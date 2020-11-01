import {Response, Request} from 'express';
import db from '../conf/database';

class PerfilController
{

    async updateDataUser(req : Request, res : Response) : Promise<void> //Actualiza los datos del perfil de usuario 
    {
        const {id,username,email,password,firstname,lastname,dpi,age} = req.body;
        const query = await db.query('UPDATE User SET username=?,email=?,password=?,firstname=?,lastname=?,dpi=?,age=? WHERE id=?',[username,email,password,firstname,lastname,dpi,age,id]);
        //const query = [{id_user:'1',username:'admin',correo: 'useradmin@ayd1.com', nombres:'Analisis', contrasena:'12345', dpi:'123456789', edad:22, apellidos:'Yanosale'}];
        
        if(query.affectedRows ===0){
            res.status(404).json({state: 0, msj:"Error al actualizar"});
        }else{
            res.status(200).json({state: 1, msj:"Usuario actualizado"});
        }
       
    }

    async getUsers(req:Request, res:Response):Promise<void>
    {
        const query = await db.query('SELECT *FROM User');
        if(query.lenght > 0){
            res.status(200).json(query);
        }else{
            res.status(404).json(query);
        }
    }
    
    
}

export const perfilController = new PerfilController();