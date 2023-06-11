import { Router } from 'express';
import {usersController} from "../controllers/users.controller";

const usersRoutes = Router();

usersRoutes.post('/withLongestName', usersController.getUserWithLongestTitle);

export default usersRoutes;
