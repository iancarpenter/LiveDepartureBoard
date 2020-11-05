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
})