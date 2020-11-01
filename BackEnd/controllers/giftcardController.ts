import {Response, Request} from 'express';
import db from '../conf/database';

class GiftCardController
{

    async getGiftcards(req: Request, res : Response) : Promise<void>
    {
        var userid = req.params.userid;
        console.log(userid);
        const giftCards = await db.query("SELECT * FROM giftcard WHERE ownerId = ?", [userid]);
        res.json(giftCards);
    }

    async changeOwner(req : Request, res : Response) : Promise<void>
    {
        var currentOwner = req.params.ownerid;
        var newOwner = req.params.newownerid;
        var giftCard = req.params.giftcard;
        await db.query("UPDATE giftcard SET ownerId = ? WHERE ownerId = ? AND id = ? ", [newOwner, currentOwner, giftCard]);
        res.json({statusCode:200});
    }

    async placeNewOrder(req : Request, res : Response): Promise<void>
    {
        console.log("Alvvvv");
        console.log(req.body);
        var giftCardsBought = req.body.giftCards;
        var creditCard = req.body.creditCard;
        var userid = req.body.userid;
        const transactionInsertion = await db.query("INSERT INTO transaction SET ? ",[{idUser: userid,creditCard:creditCard,date:new Date().toISOString().slice(0, 19).replace('T', ' ')}]);
        var randomString = (length : number, chars : string) => {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        }
        for(let i = 0; i < giftCardsBought.length; i++)
        {
            var giftcarRandomCode =  randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            const giftcardInsertion = await db.query("INSERT INTO giftcard SET ? ",[{ownerId: userid,code:giftcarRandomCode,type:giftCardsBought[i].type,credit:giftCardsBought[i].credit}]);
            await db.query("INSERT INTO transaction_giftcard SET ? ",[{transactionId: transactionInsertion.insertId,giftcardId: giftcardInsertion.insertId, ammountPaid: giftCardsBought[i].ammountPaid}]);
        }
        res.json({statusCode:200});
    }



    //HISTORIAL DE COMPRAS 
    async getHistorialCompras(req : Request, res : Response) : Promise<void> //obtener todas las compras de tarjetas de un usuario
    {
        var id = req.params.id;
        console.log(id);
        const queryhistorial = await db.query("SELECT t.id AS id_transaction, t.date, tg.ammountPaid, g.code, g.type FROM transaction t JOIN transaction_giftcard tg ON t.id = tg.transactionId JOIN giftcard g ON tg.giftcardId = g.id WHERE t.idUser = ? ", [id]);
        console.log(queryhistorial);
        res.status(200).json(queryhistorial);
    }
    
}

export const giftCardController = new GiftCardController();