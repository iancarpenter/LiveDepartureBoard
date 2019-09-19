import { Component, OnInit, OnDestroy, Input, Directive, HostListener } from '@angular/core';
import { TrainInformationService } from './shared/traininformation.service';
import { DepartureBoard } from './shared/departureBoard.model';
import { Subscription } from 'rxjs';
import { StationNamesService } from './shared/stationnames.service';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit, OnDestroy {

  trainServices: any;
  callingAt = Array<string>();
  callingAtCSV: string;
  departureBoard = Array<DepartureBoard>();
  subscription: Subscription;
  noTrainInformation: boolean;
  time = new Date();
  timer: number;
  trainStationNames: string[];

  private readonly defaultTrainStationURL = 'https://ichuxley.azurewebsites.net/departures/lbo';

  constructor(private trainInformationService: TrainInformationService,
              private stationNamesService: StationNamesService) {}

  ngOnInit() {
    this.populateStationAutocomplete();
    this.getDepartureBoard();
    this.getTime();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    clearInterval(this.timer);
  }

  private populateStationAutocomplete() {
    this.trainStationNames = this.getTrainStationNames();
    $('#stationName').autocomplete({
      source: this.trainStationNames
    });
  }

  getDepartureBoard(url: string = this.defaultTrainStationURL) {
    this.subscription = this.trainInformationService.getTrainInformation(url).subscribe( data => {

      // useful for debugging - outputs the json returned by huxley
      // console.log(data);

      // start with a new board each time a station is selected
      this.departureBoard = new Array<DepartureBoard>();

      // If there is no train information no need to do any further processing other than set the flag
      // to tell the UI to display a suitable message
      if (!data.trainServices) {
        this.noTrainInformation = true;
        return;
      } else {
        this.noTrainInformation = false;
      }

      // interested in a subset of the data returned.
      this.trainServices = data.trainServices;

      // add the information returned by huxley to departureBoard object which is to be used
      // by ui for display
      this.addTrainInforToDepartureBoard();

    });
  }

  // create an object with the information returned by Huxley
  // this object will be used by the ui to display the information
  private addTrainInforToDepartureBoard() {

    for (const trainService of this.trainServices) {
      for (const callingPoint of trainService.subsequentCallingPoints) {
        for (const station of callingPoint.callingPoint) {
          this.callingAt.push(station.locationName);
        }
      }

      this.callingAtCSV = this.callingAt.join(', ');

      this.departureBoard.push(new DepartureBoard(trainService.platform,
                                                  trainService.std,
                                                  trainService.destination[0].locationName,
                                                  trainService.etd,
                                                  trainService.cancelReason,
                                                  this.callingAtCSV));

      // get the array ready for the calling points of the next station
      this.callingAt = [];
    }
  }

  getTime() {
    // window.setInterval is used as a workaround to compiler warning: Timer is not assignable to type number
    // https://github.com/TypeStrong/atom-typescript/issues/1053
    this.timer = window.setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  // return an array containing all the station names
  getTrainStationNames(): string[] {
    return this.stationNamesService.getStationNames();
  }

  // actions required once the user has selected a different train station
  // invoked by either the enter key or by search button
  trainStationSelected(stationName: string) {
    const crsCode = this.stationNamesService.getCRSForStation(stationName);
    const trainStationUrl = this.trainInformationService.getFullUrl(crsCode);
    this.getDepartureBoard(trainStationUrl);
  }
}
