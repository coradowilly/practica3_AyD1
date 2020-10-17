import {Router} from 'express';
import {loginControll} from '../controllers/registroController'


class registroRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.get('/registro',registroControll.Registro);
    }
}
const registroeRoutes = new registroRoutes();
export default registroeRoutes.router;