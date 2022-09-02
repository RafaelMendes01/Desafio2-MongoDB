export default interface Tomatoes{
    boxOffice: string;
    consensus: string;
    critic: {
        meter: number;
        numRevies: number;
        rating: number;
    }
    dvd: Date;
    fresh: number;
    lastUpdated: Date;
    production: string;
    rotten: number
    viewer: {
        meter: number;
        numRevies: number;
        rating: number;
    }
    website: string
}