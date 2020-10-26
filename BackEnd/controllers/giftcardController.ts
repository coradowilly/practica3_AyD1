import {Response, Request} from 'express';
import db from '../conf/database';

class GiftCardController
{

    async getAvailableGiftcards(req : Request, res : Response) : Promise<void> //obtener todas las Categorias
    {
        var mockedDb = [{cardId:'129',type:1},{cardId:'121',type:4}]
        res.json(mockedDb);
    }
    
    async createNewGiftcards(req : Request, res : Response) : Promise<void>
    {
        res.send(200);
    }

    async placeNewOrder(req : Request, res : Response): Promise<void>
    {
        var giftCardsBought = req.body.giftCards;
        var creditCard = req.body.creditCard;
        var userid = req.body.userid;
        const transactionInsertion = await db.query("INSERT INTO transaction SET ? ",[{idUser: userid,creditCard:creditCard,date:new Date().toISOString().slice(0, 19).replace('T', ' ')}]);
        
        for(let i = 0; i < giftCardsBought; i++)
        {
            var giftcarRandomCode = this.randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            const giftcardInsertion = await db.query("INSERT INTO giftcard SET ? ",[{ownerId: userid,code:giftcarRandomCode,type:giftCardsBought[i].type,credit:giftCardsBought[i].credit}]);
            await db.query("INSERT INTO transaction_giftcard SET ? ",[{transactionId: transactionInsertion.insertId,giftcardId: giftcardInsertion.insertId, ammountPaid: giftCardsBought[i].paid}]);
            
        }
    }

    randomString(length : number, chars : string) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }
    

}

export const giftCardController = new GiftCardController();