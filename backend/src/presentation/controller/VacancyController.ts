import { Request, Response } from "express";
import { container } from "tsyringe";
import { Vacancy } from "../../entities/Vacancy";
import { VacancyService } from "../../modules/VacancyService";
import { HttpCode } from "../../utils/ApiErrors";

class VacancyController {
  async handlePersistNewVacancy(
    request: Request,
    response: Response
  ): Promise<Response<number>> {
    try {
      const data = request.body;

      const vacancyService = container.resolve(VacancyService);

      await vacancyService.persist(data);

      return response.sendStatus(HttpCode.NO_CONTENT);
    } catch (e: any) {
      return response.json({ message: e.message });
    }
  }

  async handleListVacancies(
    _request: Request,
    response: Response
  ): Promise<Response<Vacancy[]>> {
    try {
      const vacancyService = container.resolve(VacancyService);

      const jobs = await vacancyService.list();

      return response.status(HttpCode.OK).json(jobs);
    } catch (e: any) {
      return response.json({ message: e.message });
    }
  }

  async handleGetVacancy(
    request: Request,
    response: Response
  ): Promise<Response<Vacancy>> {
    try {
      const { id } = request.params;
      const vacancyService = container.resolve(VacancyService);

      const jobs = await vacancyService.get(id);

      return response.status(HttpCode.OK).json(jobs);
    } catch (e: any) {
      return response.json({ message: e.message });
    }
  }

  async handleFilteredVacancy(
    request: Request<{}, {}, {}, Vacancy>,
    response: Response
  ): Promise<Response<Vacancy[]>> {
    try {
      const { title, cityName } = request.query;

      const vacancyService = container.resolve(VacancyService);

      const jobs = await vacancyService.filteredVacancyList(title, cityName);

      return response.status(HttpCode.OK).json(jobs);
    } catch (e: any) {
      return response.json({ message: e.message });
    }
  }

  async handleRemoveVacancy(
    request: Request,
    response: Response
  ): Promise<Response<Vacancy[]>> {
    try {
      const { id } = request.params;

      const vacancyService = container.resolve(VacancyService);

      const jobs = await vacancyService.remove(id);

      return response.status(HttpCode.OK).json(jobs);
    } catch (e: any) {
      return response.json({ message: e.message });
    }
  }
}
export { VacancyController };
