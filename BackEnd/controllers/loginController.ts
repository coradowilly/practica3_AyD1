import {Response, Request} from 'express';
//import db from '../conf/database';

class loginController
{

    async Login(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const { correo, contrasena} = req.body;
       // const query = await db.query('SELECT * FROM usuario WHERE correo=? and contrasena=?',[correo,contrasena]);
        const query = [{correo:"prueba@gmail.com", contrasena: "12345"}];         
        if(query.length == 1){
            console.log('Acceso correcto');
            res.status(200).json({estado: 1});
        }else{
            console.log('Acceso denegado'); 
            res.status(404).json({estado: 0});
        }
    }
    
}

export const loginControll = new loginController();