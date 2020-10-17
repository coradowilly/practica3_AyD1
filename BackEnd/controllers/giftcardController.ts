import {Response, Request} from 'express';
//import db from '../conf/database';

class GiftCardController
{

    async getAvailableGiftcards(req : Request, res : Response) : Promise<void> //obtener todas las Categorias
    {
        res.json({'code':200});
    }


    //HISTORIAL DE COMPRAS 
    async getHistorialCompras(req : Request, res : Response) : Promise<void> //obtener todas las compras de tarjetas de un usuario
    {
        const { username} = req.body;
       // const query = await db.query('INSERT INTO usuario set ?',[username,correo,nombres,contrasena,dpi,edad,apellidos]);
       const query = [{username: "user1",correo:"prueba@gmail.com",nombres: "prueba", contrasena: "12345",dpi: "123456789",edad: "23",apellidos: "Espino"}];  
       if(query[0].username == username ){
           console.log('Retornando lista de compras de un usuario');
           res.status(200).json({estado: 1});
       }else{
           res.status(404).json({estado: 0});
       }
    }
    
}

export const giftCardController = new GiftCardController();