import {Router} from 'express';
import {registroControll} from '../controllers/registroController'


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
        this.router.post('/registro',registroControll.Registro);
    }
}
const registroeRoutes = new registroRoutes();
export default registroeRoutes.router;