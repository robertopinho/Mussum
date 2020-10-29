import { Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';

const studentRouter = Router();

studentRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(Student);
        const res = await repo.save(request.body);
        return response.status(201).json(res);
    } catch (err) {
        console.log('err.message :>> ', err.message);

    }
})

studentRouter.get('/', async (request, response) => {
    response.json(getRepository(Student).find())
})

export default studentRouter;