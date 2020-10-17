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
        res.json({'code':200});
    }
    
}

export const giftCardController = new GiftCardController();