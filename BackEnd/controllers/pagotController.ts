import {Response, Request} from 'express';
import db from '../conf/database';

class pagotController
{

    async Pago(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const {userid, cardNumber,nameOnCard,expiryDate,cvv,d,giftcardId, moneda,total} = req.body;
        const query1 = await db.query('INSERT INTO tarjeta (fk_usuario,numero,fecha,codigo) set ?',[moneda]);
        const query2 = await db.query('INSERT INTO transaccion (fk_usuario,fk_card,aprobacion,moneda,total) set ?',[moneda,total]);
        const query3 = await db.query('INSERT INTO inventario (fk_usuario,fk_card) set ?',[moneda]); 
       
       
    }

    async RegistrarTCRE(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
       
        const query = await db.query('INSERT INTO creditCard set ?',[req.body]); 
        res.json(query);
    }
    
}

export const pagotControll = new pagotController();