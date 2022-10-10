import { PrismaClient } from "@prisma/client";
import "reflect-metadata";
import { Vacancy } from "../entities/Vacancy";
import { ApiErrors, HttpCode } from "../utils/ApiErrors";
import { to } from "../utils/to";
import { IVacanciesRepository } from "./protocols/IVacanciesRepository";

class VacanciesRepository implements IVacanciesRepository {
  private readonly prisma = new PrismaClient();

  async listFilteredVacancies(
    title?: string,
    cityName?: string
  ): Promise<Vacancy[]> {
    this.prisma.$connect();

    const [error, result] = await to(
      this.prisma.vacancy.findMany({
        take: 10,
        where: {
          OR: [
            {
              title,
            },
            {
              cityName,
            },
          ],
        },
        orderBy: {
          updatedAt: "desc",
        },
      })
    );

    if (error) {
      throw new ApiErrors(
        "Internal Server Error",
        HttpCode.INTERNAL_SERVER_ERROR
      );
    }

    this.prisma.$disconnect();

    return result;
  }

  async create(data: Omit<Vacancy, "id">): Promise<Vacancy> {
    this.prisma.$connect();

    const [error, result] = await to(
      this.prisma.vacancy.create({
        data,
      })
    );

    if (error) {
      throw new ApiErrors(
        "Internal Server Error",
        HttpCode.INTERNAL_SERVER_ERROR
      );
    }

    this.prisma.$disconnect();

    return result;
  }

  async delete(id: string): Promise<void> {
    this.prisma.$connect();

    const [error, result] = await to(
      this.prisma.vacancy.delete({ where: { id } })
    );

    if (error) {
      throw new ApiErrors(
        "Internal Server Error",
        HttpCode.INTERNAL_SERVER_ERROR
      );
    }

    this.prisma.$disconnect();

    return result;
  }
  async listAll(): Promise<Vacancy[]> {
    this.prisma.$connect();

    const [error, result] = await to(
      this.prisma.vacancy.findMany({
        orderBy: {
          updatedAt: "desc",
        },
      })
    );

    if (error) {
      throw new ApiErrors(
        "Internal Server Error",
        HttpCode.INTERNAL_SERVER_ERROR
      );
    }

    this.prisma.$disconnect();

    return result;
  }

  async get(id: string): Promise<Vacancy> {
    this.prisma.$connect();

    const [error, result] = await to(
      this.prisma.vacancy.findFirst({ where: { id } })
    );

    if (error) {
      throw new ApiErrors(
        "Internal Server Error",
        HttpCode.INTERNAL_SERVER_ERROR
      );
    }

    this.prisma.$disconnect();

    return result;
  }
}

export { VacanciesRepository };
