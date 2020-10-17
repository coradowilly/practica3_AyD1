import {Response, Request} from 'express';
//import db from '../conf/database';

class PerfilController
{

    async updateDataUser(req : Request, res : Response) : Promise<void> //Actualiza los datos del perfil de usuario 
    {
        const {id_user,username,correo,nombres,contrasena,dpi,edad,apellidos} = req.body;
        //const query = await db.query('UPDATE usuario SET username=?,correo=?,nombres=?,contrasena=?,dpi=?,edad=?,apellidos=?  WHERE id_user=?',[username,correo,nombres,contrasena,dpi,edad,apellidos,id_user]);
        const query = [{id_user:'1',username:'admin',correo: 'useradmin@ayd1.com', nombres:'Analisis', contrasena:'12345', dpi:'123456789', edad:22, apellidos:'Yanosale'}];
        
        if(query[0].username == username){
            res.status(404).json({state: 0});
        }else{
            res.status(200).json({state: 1});
        }
       
    }
    
    
}

export const perfilController = new PerfilController();