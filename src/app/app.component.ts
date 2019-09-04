import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TrainInformationService } from './shared/traininformation.service';
import { DepartureBoard } from './shared/departureBoard.model';
import { Subscription } from 'rxjs';

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

  constructor(private trainInformationService: TrainInformationService) {}

  ngOnInit() {
    this.getDepartureBoard();
    this.getTime();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    clearInterval(this.timer);
  }

  getDepartureBoard() {
    this.subscription = this.trainInformationService.getTrainInformation().subscribe( data => {

      // useful for debugging - outputs the json returned by huxley
      // console.log(data);

      // If there is no train information no need to do any further processing other than set the flag
      // to tell the UI to display a suitable message
      if (!data.trainServices) {
        this.noTrainInformation = true;
        return;
      } else {
        this.noTrainInformation = false;
      }

      // only interested in a subset of the data returned.
      this.trainServices = data.trainServices;

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
        this.callingAt = [];
      }
    });
  }

  getTime() {
    // window.setInterval is used as a workaround to compiler warning: Timer is not assignable to type number
    // https://github.com/TypeStrong/atom-typescript/issues/1053
    this.timer = window.setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
