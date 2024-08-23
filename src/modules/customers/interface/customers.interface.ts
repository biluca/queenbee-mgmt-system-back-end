export interface CustomersFilters {
  sap_code: string;
  harvests: string[];
}

export interface CustomersProviderInterface {
  getTodayBirthdays(): Promise<any>;
}
