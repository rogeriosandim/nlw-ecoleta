import { Request, Response } from "express";
import knex from "../database/connection";

class itemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        name: item.title,
        image_url: `http://192.168.8.115:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default itemsController;
