import {Router} from 'express';
import {loginControll} from '../controllers/loginController'


class loginRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.get('/login',loginControll.Login);
    }
}
const logineRoutes = new loginRoutes();
export default logineRoutes.router;