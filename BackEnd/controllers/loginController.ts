import {Response, Request} from 'express';
import db from '../conf/database';

class loginController
{

    async Login(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const { email, password} = req.body;
        const query = await db.query('SELECT * FROM User WHERE email=? and password=?',[email,password]);
        
        if(query.length == 1){
            console.log('Acceso correcto');
            res.status(200).json(query[0]);
        }else{
            console.log('Acceso denegado'); 
            res.status(404).json({Acceso: "Denegado"});
        }
    }
    
}

export const loginControll = new loginController();