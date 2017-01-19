import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemorySziaService implements InMemoryDbService {
    createDb(): {} {
        let airlines = [
            {
                'imageUrl': 'http://www.brandsoftheworld.com/sites/default/files' +
                '/styles/logo-thumbnail/public/042014/untitled-1_74.png?itok=eHy19j2Z',
                'name': 'WizzAir',
                'airlineCode': 'WIZZ',
                'id': 1
            },
            {
                'imageUrl': 'http://www.team.aero/files/company_logos/ElAl_logo.png',
                'name': 'El Al',
                'airlineCode': 'ELAL',
                'id': 2
            },
            {
                'imageUrl': 'http://www.elmatar.com/images/compagnies/logos/logo-lufthansa.jpg',
                'name': 'Lufthansa',
                'airlineCode': 'LUFT',
                'id': 3
            }
        ];
        let flights = [
            {
                'flightNumber': 'LY 8045',
                'departure': 'South Zubogy International Airport',
                'arrival': 'Heatrow Airport',
                'departureCity': 'South Zubogy',
                'departureCode': 'SZU',
                'arrivalCity': 'London',
                'arrivalCode': 'LHR',
                'departureTime': '2017-01-17T20:50:00.000Z',
                'arrivalTime': '2017-01-17T23:10:00.000Z',
                'status': 'Boarding',
                'checkinDeskNumber': 17,
                'gateNumber': 22,
                'delay': 0,
                'comment': 'El Al',
                'id': 1,
                'airlineId': 2
            },
            {
                'flightNumber': 'LH 0676',
                'departure': 'Frankfurt International Airport',
                'arrival': 'South Zubogy International Airport',
                'departureCity': 'Frankfurt',
                'departureCode': 'FRA',
                'arrivalCity': 'South Zubogy',
                'arrivalCode': 'SZU',
                'departureTime': '2017-01-17T21:00:00.000Z',
                'arrivalTime': '2017-01-17T23:25:00.000Z',
                'status': 'Delayed',
                'checkinDeskNumber': 16,
                'gateNumber': 23,
                'delay': 30,
                'comment': 'Lufthansa',
                'id': 2,
                'airlineId': 3
            },
            {
                'flightNumber': 'AL 4157',
                'departure': 'South Zubogy International Airport',
                'arrival': 'Sheremetyevo International Airport',
                'departureCity': 'South Zubogy',
                'departureCode': 'SZU',
                'arrivalCity': 'Moscow',
                'arrivalCode': 'SVU',
                'departureTime': '2017-01-17T21:50:00.000Z',
                'arrivalTime': '2017-01-18T00:20:00.000Z',
                'status': 'Departing',
                'checkinDeskNumber': 8,
                'gateNumber': 1,
                'delay': 30,
                'comment': 'Aeroloft',
                'id': 3,
                'airlineId': 2
            },
            {
                'flightNumber': 'FD 1477',
                'departure': 'Luton Airport',
                'arrival': 'South Zubogy International Airport',
                'departureCity': 'London',
                'departureCode': 'LLU',
                'arrivalCity': 'South Zubogy',
                'arrivalCode': 'SZU',
                'departureTime': '2017-01-17T20:50:00.000Z',
                'arrivalTime': '2017-01-18T00:15:00.000Z',
                'status': 'Arriving',
                'checkinDeskNumber': 22,
                'gateNumber': 4,
                'delay': 5,
                'comment': '',
                'id': 4,
                'airlineId': 1
            },
            {
                'flightNumber': 'W6 2444',
                'departure': 'South Zubogy International Airport',
                'arrival': 'Frankfurt International Airport',
                'departureCity': 'South Zubogy',
                'departureCode': 'SZU',
                'arrivalCity': 'Frankfurt',
                'arrivalCode': 'FRA',
                'departureTime': '2017-01-17T22:15:00.000Z',
                'arrivalTime': '2017-01-18T00:00:00.000Z',
                'status': 'On flight',
                'checkinDeskNumber': 11,
                'gateNumber': 13,
                'delay': 0,
                'comment': 'Wizz Air',
                'id': 5,
                'airlineId': 1
            },
            {
                'flightNumber': 'NZ 4853',
                'departure': 'South Zubogy International Airport',
                'arrival': 'Ataturk Airport',
                'departureCity': 'South Zubogy',
                'departureCode': 'SZU',
                'arrivalCity': 'Istambul',
                'arrivalCode': 'IST',
                'departureTime': '2017-01-17T22:45:00.000Z',
                'arrivalTime': '2017-01-18T00:40:00.000Z',
                'status': 'On flight',
                'checkinDeskNumber': 12,
                'gateNumber': 78,
                'delay': 0,
                'comment': 'New Zealand Airlines',
                'id': 6,
                'airlineId': 3
            },
            {
                'flightNumber': 'AC 6830',
                'departure': 'South Zubogy International Airport',
                'arrival': 'Zurich Airport',
                'departureCity': 'South Zubogy',
                'departureCode': 'SZU',
                'arrivalCity': 'Zurich',
                'arrivalCode': 'ZRH',
                'departureTime': '2017-01-17T23:10:00.000Z',
                'arrivalTime': '2017-01-18T02:30:00.000Z',
                'status': 'Boarding',
                'checkinDeskNumber': 11,
                'gateNumber': 65,
                'delay': 0,
                'comment': 'Air Canada',
                'id': 7,
                'airlineId': 2
            },
            {
                'flightNumber': 'DL 4391',
                'departure': 'San Francisco International Airport',
                'arrival': 'South Zubogy International Airport',
                'departureCity': 'San Francisco',
                'departureCode': 'SFO',
                'arrivalCity': 'South Zubogy',
                'arrivalCode': 'SZU',
                'departureTime': '2017-01-17T21:00:00.000Z',
                'arrivalTime': '2017-01-18T07:30:00.000Z',
                'status': 'Arriving',
                'checkinDeskNumber': 22,
                'gateNumber': 4,
                'delay': 120,
                'comment': 'Delta Air Lines',
                'id': 8,
                'airlineId': 1
            },
            {
                'flightNumber': 'GF 6686',
                'departure': 'Abu Dhabi International Airport',
                'arrival': 'South Zubogy International Airport',
                'departureCity': 'Abu Dhabi',
                'departureCode': 'AUH',
                'arrivalCity': 'South Zubogy',
                'arrivalCode': 'SZU',
                'departureTime': '2017-01-17T21:15:00.000Z',
                'arrivalTime': '2017-01-18T02:25:00.000Z',
                'status': 'Arriving',
                'checkinDeskNumber': 22,
                'gateNumber': 4,
                'delay': 5,
                'comment': 'Gulf Air',
                'id': 9,
                'airlineId': 2
            },
            {
                'flightNumber': 'VS 4010',
                'departure': 'Ft. Worth International Airport',
                'arrival': 'South Zubogy International Airport',
                'departureCity': 'Dallas',
                'departureCode': 'DFW',
                'arrivalCity': 'South Zubogy',
                'arrivalCode': 'SZU',
                'departureTime': '2017-01-17T22:45:00.000Z',
                'arrivalTime': '2017-01-18T09:10:00.000Z',
                'status': 'Arriving',
                'checkinDeskNumber': 11,
                'gateNumber': 41,
                'delay': 0,
                'comment': 'Virgin Atlantic',
                'id': 10,
                'airlineId': 3
            }
        ];

        let login: any[] = [];

        return {airlines, flights, login};
    }
}
