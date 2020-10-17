import {Router} from 'express';
import {perfilController} from '../controllers/perfilController'


class PerfilRoutes
{
    public router : Router;

    constructor()
    {
        this.router = Router();
        this.config();
    }

    config() : void
    {
        this.router.put('/editperfil',perfilController.updateDataUser);
    }
}
const perfilRoutes = new PerfilRoutes();
export default perfilRoutes.router;