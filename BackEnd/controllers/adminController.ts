import {Response, Request} from 'express';
//import db from '../conf/database';

class AdminController
{

    async getCompras(req : Request, res : Response) : Promise<void> //obtener todas compras
    {
        res.status(200).json({'estado':1});
    }
    
}

export const adminController = new AdminController();