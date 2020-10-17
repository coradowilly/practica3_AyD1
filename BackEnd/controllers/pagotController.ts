import {Response, Request} from 'express';
//import db from '../conf/database';

class pagotController
{

    async Pago(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const {id_usuario, numero,fecha,codigo,id_card, moneda,total} = req.body;
       // const query1 = await db.query('INSERT INTO tarjeta (fk_usuario,numero,fecha,codigo) set ?',[id_usuario,numero,fecha,codigo]);
       // const query2 = await db.query('INSERT INTO transaccion (fk_usuario,fk_card,aprobacion,moneda,total) set ?',[id_usuario,id_card,1,moneda,total]);
       // const query3 = await db.query('INSERT INTO inventario (fk_usuario,fk_card) set ?',[id_usuario,id_card]); 
       const query1 =[{id_usuario: 1, numero: "1234567890",fecha: "10/22",codigo: "000",id_card: 2 , moneda: "$",total: 50}]
       if(moneda == "Q"){
        res.status(200).json({cambio: query1[0].total});
        }else if(moneda == "$"){
        res.status(200).json({cambio: query1[0].total*7.7});
        }else{
        res.status(404).json({cambio: 0});
        }
       
    }
    
}

export const pagotControll = new pagotController();