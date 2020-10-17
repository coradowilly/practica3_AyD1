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
        this.router.get('/giftcards',giftCardController.getAvailableGiftcards);
        this.router.get('/getHistorial',giftCardController.getHistorialCompras);
    }
}
const categoriesRoutes = new CategoryRoutes();
export default categoriesRoutes.router;