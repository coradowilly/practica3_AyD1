import {Router} from 'express';
import {userController} from '../controllers/userController'


class userRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.get('/login',userController.getUser);
    }
}
const categoriesRoutes = new userRoutes();
export default categoriesRoutes.router;