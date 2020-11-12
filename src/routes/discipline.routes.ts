import { response, Router } from "express";
import { getConnection, getRepository } from 'typeorm';
import Discipline from "../models/Discipline";

const disciplineRouter = Router();

disciplineRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(Discipline);
        const res = await repo.save(request.body);
        await getConnection().queryResultCache?.remove(['listDiscipline']);
        return response.status(201).json(res);
    } catch (err) {
        console.log('err.message :>> ', err.message);
    }
})

disciplineRouter.get('/', async (request, response) => {
    response.json(await getRepository(Discipline).find({cache: {id: 'listDiscipline', milliseconds: 10000}}))
})

export default disciplineRouter;