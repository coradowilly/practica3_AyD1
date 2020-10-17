import {Response, Request} from 'express';
import db from '../conf/database';

class PerfilController
{

    async updateDataUser(req : Request, res : Response) : Promise<void> //Actualiza los datos del perfil de usuario 
    {
        res.json({'code':200});
    }
    
}

export const perfilController = new PerfilController();