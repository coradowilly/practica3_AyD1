import {Response, Request} from 'express';
//import db from '../conf/database';

class registroController
{

    async Registro(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const { username,correo,nombres, contrasena,dpi,edad,apellidos} = req.body;
       // const query = await db.query('INSERT INTO usuario set ?',[username,correo,nombres,contrasena,dpi,edad,apellidos]);
       const query = [];
       console.log(query.length)
       if(username != "" && correo != "" && nombres != ""&&contrasena!="" && dpi != 0 && edad!=0 && apellidos!= ""){
       query[0] = {username: username,correo:correo,nombres: nombres, contrasena:contrasena,dpi: dpi,edad:edad,apellidos: apellidos};  
       }
       console.log(query.length);
       if(query.length > 0){
        console.log('Registro correcto');
        res.status(200).json({estado: 1});
        }else{
            console.log('Registro denegado'); 
            res.status(404).json({estado: 0});
        }
    }
    
}

export const registroControll = new registroController();