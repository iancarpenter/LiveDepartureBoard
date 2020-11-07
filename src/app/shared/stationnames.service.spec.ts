import { StationNamesService } from "./stationnames.service"

describe('stationnamesservice', () => {
    let service: StationNamesService;

    beforeEach( () => {
        service = new StationNamesService();
    });

    it('should return an array of station names', () => {
        // act
        const stationNames = service.getStationNames();
        
        // assert
        expect(stationNames.length).toBe(2587);
    })

    it('should return Aberdovey as the third element in the array', () => {
        // act
        const stationNames = service.getStationNames();

        // assert
        expect(stationNames[2]).toBe('Aberdovey');
    });

    it('should return Ystrad Rhondda as the last element in the array', () => {
        // act 
        const stationsNames = service.getStationNames();

        // assert
        expect(stationsNames[2586]).toBe('Ystrad Rhondda');
    });

    it('should return the crs code for Winchmore Hill', () => {
        // act
        const stationCRSCode = service.getCRSForStation('Winchmore Hill');

        //assert
        expect(stationCRSCode).toBe('WIH');
    });

    it('should return the crs code for Palmers Green', () => {
        // act
        const stationCRSCode = service.getCRSForStation('Palmers Green');

        //assert
        expect(stationCRSCode).toBe('PAL');
    });

    it('should return the crs code for Bowes Park', () => {
        // act
        const stationCRSCode = service.getCRSForStation('Bowes Park');

        //assert
        expect(stationCRSCode).toBe('BOP');
    });
})