import {Router} from 'express';
import {userControll} from '../controllers/userController'


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
        this.router.get('/login',userControll.Login);
    }
}
const categoriesRoutes = new userRoutes();
export default categoriesRoutes.router;