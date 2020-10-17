var Request = require("request");

describe("Pruebas unitarias", () => {
    var server;
    //var newEntityID;
    //var newEntity = {nombre_categoria:"Prueba", "root_id": 1};
    beforeAll(()=>
    {
        server =  require("../build/index");
    });

    afterAll(()=>
    {
        server.close();
    });

    //PRUEBAS UNITARIAS DE PERFIL DE USUARIO
    describe("GIVEN: Un usuario quiere editar los datos de su perfil", () => { 

        describe("WHEN: envia sus nuevos valores", ()=>{
            var send = {id_user:'1',username:'admin',correo: 'useradmin@ayd1.com', nombres:'Analisis', contrasena:'12345', dpi:'123456789', edad:22, apellidos:'Yanosale'};
            var state;
            var verify;
            it("THEN: Retorna un mensaje de verificacion", (done)=>{
   
                Request.post("http://localhost:3000/api/editperfil", {form:send} , (error, response, body) => {
                    state = JSON.parse(response.body).state;
                    verify= JSON.parse(response.body).mensaje;
                   if(state === 1){
                    expect(verify).toBe("Editado Exitoso");
                    done();
                   }else{
                    expect(verify).toBe("Fallo Edicion");
                    done();
                   }
                })
            });

        });
    });

    
    
    
});



