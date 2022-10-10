import { Vacancy } from "../entities/Vacancy";
import { IVacanciesRepository } from "../repository/protocols/IVacanciesRepository";

import { inject, injectable } from "tsyringe";
import { TokenConstructorVacancy } from "../container";
import { ApiErrors, HttpCode } from "../utils/ApiErrors";

@injectable()
class VacancyService {
  constructor(
    @inject(TokenConstructorVacancy.Vacancy)
    private readonly vacanciesRepo: IVacanciesRepository
  ) {}

  async persist(data: Omit<Vacancy, "id">): Promise<Vacancy> {
    const createVacancy = await this.vacanciesRepo.create(data);

    return createVacancy;
  }

  async list(): Promise<Vacancy[]> {
    const allVacancies = await this.vacanciesRepo.listAll();

    if (!allVacancies) {
      throw new ApiErrors("No Jobs available", HttpCode.NOT_FOUND);
    }

    return allVacancies;
  }

  async filteredVacancyList(
    title?: string,
    cityName?: string
  ): Promise<Vacancy[]> {
    const allVacancies = await this.vacanciesRepo.listFilteredVacancies(
      title,
      cityName
    );
    if (!allVacancies) {
      throw new ApiErrors("No jobs available", HttpCode.NOT_FOUND);
    }
    return allVacancies;
  }

  async get(id: string): Promise<Vacancy> {
    const vacancy = await this.vacanciesRepo.get(id);

    if (!vacancy) {
      throw new ApiErrors("Job Not Found!", HttpCode.NOT_FOUND);
    }
    return vacancy;
  }

  async remove(id: string): Promise<void> {
    const vacancy = await this.vacanciesRepo.get(id);

    if (!vacancy) {
      throw new ApiErrors("Job Not Found!", HttpCode.NOT_FOUND);
    }

    await this.vacanciesRepo.delete(id);
    return;
  }
}
export { VacancyService };
