import {Response, Request} from 'express';
import db from '../conf/database';

class userController
{

    async Login(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const { email, contrasena} = req.body;
        const query = await db.query('SELECT * FROM usuario WHERE email=? and contrasena=?',[email,contrasena]);
        console.log(query.rows);
         
        if(query.length == 1){
            console.log('Acceso correcto');
            res.status(200).json({estado: "1"});
        }else{
            console.log('Acceso denegado'); 
            res.status(404).json({estado: "0"});
        }
    }
    
}

export const userControll = new userController();