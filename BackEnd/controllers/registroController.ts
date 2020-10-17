import {Response, Request} from 'express';
import db from '../conf/database';

class registroController
{

    async Registro(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const { username,correo,nombres, contrasena,dpi,edad,apellidos} = req.body;
        const query = await db.query('INSERT INTO usuario set ?',[username,correo,nombres,contrasena,dpi,edad,apellidos]);
        res.json(query);
    }
    
}

export const registroControll = new registroController();