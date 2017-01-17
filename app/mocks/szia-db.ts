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
        return {airlines};
    }
}
