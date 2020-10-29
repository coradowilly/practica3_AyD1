import {Router} from 'express';
import {giftCardController} from '../controllers/giftcardController'


class CategoryRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.post('/giftcards/placeOrder', giftCardController.placeNewOrder);
        this.router.get('/giftcards/:userid', giftCardController.getGiftcards);
        this.router.post('/giftcards/changeOwner/:giftcard/:ownerid/:newownerid', giftCardController.changeOwner)
        //this.router.get('/giftcards',giftCardController.getAvailableGiftcards);
        this.router.get('/getHistorial/:id',giftCardController.getHistorialCompras);
    }
}
const categoriesRoutes = new CategoryRoutes();
export default categoriesRoutes.router;