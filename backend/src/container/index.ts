import { container } from "tsyringe";
import { IVacanciesRepository } from "../repository/protocols/IVacanciesRepository";
import { VacanciesRepository } from "../repository/VacanciesRepository";

export enum TokenConstructorVacancy {
  Vacancy = "Vacancies",
}

container.registerSingleton<IVacanciesRepository>(
  TokenConstructorVacancy.Vacancy,
  VacanciesRepository
);
