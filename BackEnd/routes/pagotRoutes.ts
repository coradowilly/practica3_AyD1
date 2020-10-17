import {Router} from 'express';
import {pagotControll} from '../controllers/pagotController'


class pagotRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.get('/pago',pagotControll.Pago);
    }
}
const pagoteRoutes = new pagotRoutes();
export default pagoteRoutes.router;