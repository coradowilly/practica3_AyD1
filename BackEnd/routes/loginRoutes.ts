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
        this.router.post('/login',loginControll.Login);
        this.router.post('/eliminauser',loginControll.eliminar);
    }
}
const logineRoutes = new loginRoutes();
export default logineRoutes.router;