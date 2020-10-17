import {Response, Request} from 'express';
//import db from '../conf/database';

class registroController
{

    async Registro(req : Request, res : Response) : Promise<void> //inicio de sesion  
    {
        const { username,correo,nombres, contrasena,dpi,edad,apellidos} = req.body;
       // const query = await db.query('INSERT INTO usuario set ?',[username,correo,nombres,contrasena,dpi,edad,apellidos]);
       const query = [{username: "prueba1",correo:"prueba@gmail.com",nombres: "prueba", contrasena: "12345",dpi: "123456789",edad: "23",apellidos: "Espino"}];  
       if(query[0].username == username && correo== query[0].correo){
        console.log('Registro correcto');
        res.status(200).json({estado: 1});
        }else{
            console.log('Registro denegado'); 
            res.status(404).json({estado: 0});
        }
    }
    
}

export const registroControll = new registroController();