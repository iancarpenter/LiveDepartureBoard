export class DepartureBoard {
    platform: string;
    trainTime: string;
    destination: string;
    etd: string;
    cancelReason: string;
    callingAt: string;


    constructor(platform: string, trainTime: string, destination: string, etd: string, cancelReason: string, callingAt: string) {
        this.platform = platform;
        this.trainTime = trainTime;
        this.destination = destination;
        this.etd = etd;
        this.cancelReason = cancelReason;
        this.callingAt = callingAt;
    }
}
