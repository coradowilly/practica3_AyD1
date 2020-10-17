import {Response, Request} from 'express';
import db from '../conf/database';

class pagotController
{

    async Pago(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const {id_usuario, numero,fecha,codigo,id_card, moneda,total} = req.body;
        const query1 = await db.query('INSERT INTO tarjeta (fk_usuario,numero,fecha,codigo) set ?',[id_usuario,numero,fecha,codigo]);
        const query2 = await db.query('INSERT INTO transaccion (fk_usuario,fk_card,aprobacion,moneda,total) set ?',[id_usuario,id_card,1,moneda,total]);
        const query3 = await db.query('INSERT INTO inventario (fk_usuario,fk_card) set ?',[id_usuario,id_card]); 
        res.json({estado:1});
    }
    
}

export const pagotControll = new pagotController();