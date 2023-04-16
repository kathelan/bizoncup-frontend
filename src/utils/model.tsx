export interface Competitor {
    FIRSTNAME: string;
    NAME: string;
    CALL: string;
    CLUB: string;
    CAT: string;
    CARDNO: number;
    START: string;
    FOX1?: string;
    FOX2?: string;
    FOX3?: string;
    FOX4?: string;
    FOX5?: string;
    FINISH: string;
    RUNTIME: string;
    FOX: number;
    PLACE: string;
    STNO: number;
}

export interface RaceResult {
    SOURCE: string;
    CONTEST: string;
    DATE: string;
    BEGIN: string;
    BAND: string;
    LIMIT: string;
    COMPETITORS: Competitor[];
}