export class Flight {
    flightNumber: string;
    departure?: string;
    arrival: string;
    departureCity?: string;
    departureCode?: string;
    arrivalCity?: string;
    arrivalCode?: string;
    departureTime: Date;
    arrivalTime: Date;
    status: string;
    checkinDeskNumber: number;
    gateNumber: number;
    delay: number;
    comment?: string;
    id?: number;
    airlineId?: number;
}
