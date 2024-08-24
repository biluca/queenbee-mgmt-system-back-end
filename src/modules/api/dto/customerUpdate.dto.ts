export class CustomerUpdateDTO {
  //Mandatory
  uuid: string;
  name: string;

  //Optional
  email?: string;
  phoneNumber?: string;
  instagram?: string;
}
