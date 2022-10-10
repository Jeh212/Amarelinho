import { Request, Response, Router } from "express";
import { Vacancy } from "../../entities/Vacancy";
import { VacancyController } from "../controller/VacancyController";

export const routes = Router();
const vancacyController = new VacancyController();

routes.post("/new", (request: Request, response: Response) => {
  vancacyController.handlePersistNewVacancy(request, response);
});

routes.get("/list", (request: Request, response: Response) =>
  vancacyController.handleListVacancies(request, response)
);

routes.get(
  "/search",
  (request: Request<{}, {}, {}, Vacancy>, response: Response) =>
    vancacyController.handleFilteredVacancy(request, response)
);

routes.get("/retrive/:id", (request: Request, response: Response) =>
  vancacyController.handleGetVacancy(request, response)
);

routes.delete("/remove/:id", (request: Request, response: Response) =>
  vancacyController.handleRemoveVacancy(request, response)
);
