interface Vacancy {
  id: string;
  title: string;
  description: string;
  companyName: string;
  cityName: string;
  stateName: string;
  updatedAt?: Date;
  createdAt?: Date;
}
export { Vacancy };
