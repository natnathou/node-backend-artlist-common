import nodeFetch from 'node-fetch'
import {postsService} from "../services/posts.service";
import { Request, Response } from 'express';


async function getUserWithLongestTitle(req: Request, res: Response){
    try {
        console.log(`getUserWithLongestTitle | start`)
        const response = await  postsService.getPostWithLongestTitle();
        console.log(`getUserWithLongestTitle | end`)
        return res.status(200).json(response);
    }catch (err){
        console.log(`getUserWithLongestTitle | err: ${JSON.stringify(err)}`)
        res.status(500).json(err);
    }
}

export const usersController={
    getUserWithLongestTitle,
}
