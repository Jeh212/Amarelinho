import { Vacancy } from "../../entities/Vacancy";

interface IVacanciesRepository {
  create(data: Omit<Vacancy, "id">): Promise<Vacancy>;
  delete(id: string): Promise<void>;
  listAll(): Promise<Vacancy[]>;
  listFilteredVacancies(title?: string, cityName?: string): Promise<Vacancy[]>;
  get(id: string): Promise<Vacancy>;
}

export { IVacanciesRepository };
