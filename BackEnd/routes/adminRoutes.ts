import {Router} from 'express';
import {adminController} from '../controllers/adminController'

class AdminRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.get('/getcompras',adminController.getCompras);
        //this.router.get('/getCatalogo',adminController.getCatalogo);
    }
}
const adminRoutes = new AdminRoutes();
export default adminRoutes.router;