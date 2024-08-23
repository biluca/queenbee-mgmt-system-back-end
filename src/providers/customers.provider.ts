import { Injectable } from '@nestjs/common';
import { GenericProvider } from 'src/common/genericProvider.commons';
import { CustomersProviderInterface } from 'src/modules/customers/interface/customers.interface';

@Injectable()
export class CustomersProvider
  extends GenericProvider
  implements CustomersProviderInterface
{
  todayBirthdays = [
    {
      name: 'Jane Doe',
      age: 24,
      gender: 'Female',
      profile_photo: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      name: 'Elizabeth Dutton',
      age: 34,
      gender: 'Female',
      profile_photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'Emma Wheller',
      age: 27,
      gender: 'Female',
      profile_photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      name: 'Elsa Dutton',
      age: 21,
      gender: 'Female',
      profile_photo: 'https://randomuser.me/api/portraits/women/69.jpg',
    },
    {
      name: 'Margaret Roberts',
      age: 30,
      gender: 'Female',
      profile_photo: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
  ];

  async getTodayBirthdays(): Promise<any> {
    return Promise.resolve(this.todayBirthdays);
  }
}
