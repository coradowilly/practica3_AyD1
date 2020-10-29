import {Response, Request} from 'express';
import db from '../conf/database';

class GiftCardController
{

    async getAvailableGiftcards(req : Request, res : Response) : Promise<void> //obtener todas las Categorias
    {
        res.json({'code':200});
    }


    //HISTORIAL DE COMPRAS 
    async getHistorialCompras(req : Request, res : Response) : Promise<void> //obtener todas las compras de tarjetas de un usuario
    {
        var id = req.params.id;
        console.log(id);
        const queryhistorial = await db.query("SELECT t.id, t.date, g.code, tg.ammountPaid, g.type FROM transaction AS t JOIN User AS u ON t.idUser = u.id JOIN giftcard AS g ON u.id = g.ownerId JOIN transaction_giftcard AS tg ON t.idUser = tg.transactionId  WHERE t.idUser = ? ORDER BY t.id, t.date, g.code, tg.ammountPaid, g.type", [id]);
        res.json(queryhistorial);
    }
    
}

export const giftCardController = new GiftCardController();