import {Response, Request} from 'express';
import db from '../conf/database';

class registroController
{

    async Registro(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {

       const query = await db.query('INSERT INTO User set ?',[req.body]);
       res.json(query);
    }
    
}

export const registroControll = new registroController();