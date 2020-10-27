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
    }
}
const categoriesRoutes = new CategoryRoutes();
export default categoriesRoutes.router;