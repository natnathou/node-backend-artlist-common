import { Router } from 'express';
import {postsController} from "../controllers/posts.controller";

const postsRoutes = Router();

postsRoutes.post('/withLongestTitle', postsController.getPostWithLongestTitle);

export default postsRoutes;
