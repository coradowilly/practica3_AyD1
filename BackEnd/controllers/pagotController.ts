import {Response, Request} from 'express';
import db from '../conf/database';

class pagotController
{

    async RegistrarTCRE(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const query = await db.query('INSERT INTO creditCard set ?',[req.body]); 
        res.json(query);
    }
    async ObtenerIdTarje(req : Request, res : Response) : Promise<void>
    {
        const {userid} = req.body;
        const query = await db.query('SELECT * FROM creditCard WHERE userid=?',[userid]);
        res.json(query);
    }

    async eliminartarjeta(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const {nameOnCard} = req.body;
        const query = await db.query('delete from creditCard where nameOnCard=?;',[nameOnCard]);
        res.json(query);
    }
    
}

export const pagotControll = new pagotController();