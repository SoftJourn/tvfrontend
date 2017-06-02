export class Item {
    public id: string;
    public url: string;
    public volumeLevel: number;
    public type: string;
    public owner: string;
    public created: number;
    public startTime: number;
    public endTime: number;
    public startDate: number;
    public endDate: number;
    public enabled: boolean;

    constructor (
        id: string,
        url: string,
        volumeLevel: number,
        type: string,
        owner: string,
        created: number,
        startTime: number,
        endTime: number,
        startDate: number,
        endDate: number,
        enabled: boolean,
    ) {
        this.id = id;
        this.url = url;
        this.volumeLevel = volumeLevel;
        this.type = type;
        this.owner = owner;
        this.created = created;
        this.startTime = startTime;
        this.endTime = endTime;
        this.startDate = startDate;
        this.endDate = endDate;
        this.enabled = enabled;
    }
}
