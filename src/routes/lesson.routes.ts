import { request, Router } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
    try {
        const repo = getRepository(Lesson);
        const res = await repo.save(request.body);
        return response.status(201).json(res)
    } catch (err) {
        console.log('err.message :>> ',err.message);
        
    }
})

lessonRouter.get('/', async (request, response) => {
    response.json(getRepository(Lesson).find())
})

export default lessonRouter;
