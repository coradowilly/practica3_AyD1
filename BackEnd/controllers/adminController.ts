import {Response, Request} from 'express';
import db from '../conf/database';

class AdminController
{

    async getCompras(req : Request, res : Response) : Promise<void> //obtener todas las compras
    {
        //var id = req.params.id;
        //console.log(id);
        const querycompras = await db.query("SELECT u.username, t.id AS id_transaction, t.date, tg.ammountPaid, g.code, g.type FROM transaction t JOIN transaction_giftcard tg ON t.id = tg.transactionId JOIN giftcard g ON tg.giftcardId = g.id JOIN User u ON t.idUser = u.Id ", []);
        //const querycompras = await db.query("SELECT u.username, t.id, t.date, g.code, tg.ammountPaid, g.type, g.credit FROM transaction AS t JOIN User AS u ON t.idUser = u.id JOIN giftcard AS g ON u.id = g.ownerId JOIN transaction_giftcard AS tg ON t.idUser = tg.transactionId ", []);
        res.json(querycompras);
        console.log("compras");
    }
    
    /*async getCatalogo(req : Request, res : Response) : Promise<void> //obtener el catalogo
    {
        const query = await db.query("SELECT *FROM giftcard",[]);
        res.json(query);
    }*/

}

export const adminController = new AdminController();