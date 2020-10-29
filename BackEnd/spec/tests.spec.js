var Request = require("request");

describe("Pruebas unitarias", () => {
    var server;
    beforeAll(()=>
    {
        server =  require("../build/index");
    });

    afterAll(()=>
    {
        server.close();
    });

    describe("GIVEN: Un usuario administrador quiere consultar las compras de los usuarios", () => { 

        describe("WHEN: Consulta las compras", ()=>{
            //var send = {id_user:'1',username:'admin',correo: 'useradmin@ayd1.com', nombres:'Analisis', contrasena:'12345', dpi:'123456789', edad:22, apellidos:'Yanosale'};
            
            it("THEN: Retorna un mensaje y stauts de verificacion", (done)=>{
   
                Request.get("http://localhost:3001/api/getcompras" , (error, response, body) => {;
                    expect(response.statusCode).toBe(200);
                    done();
                })
            });

        });
    });



    
});



