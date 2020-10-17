var Request = require("request");

describe("Pruebas unitarias", () => {
    var server;
    var newEntityID;
    var newEntity = {nombre_categoria:"Prueba", "root_id": 1};
    beforeAll(()=>
    {
        server =  require("../build/index");
    });

    afterAll(()=>
    {
        server.close();
    });


    var server3;
    var newEntityID3;
    beforeAll(()=>
    {
        server3 =  require("../build/index");
    });

    afterAll(()=>
    {
        server3.close();
    });
    
    describe("GIVEN: El usuario intenta registrarse", () => { 
        var newEntity3 = {username: "prueba1",correo:"prueba@gmail.com",nombres: "prueba", contrasena: "12345",dpi: 12345678,edad: 23,apellidos: "Espino"};
        describe("WHEN: Da click en registrar usuario", ()=>{
            it("THEN: Retorna el status de la peticion", (done)=>{
                Request.post("http://localhost:3001/api/registro", {form: newEntity3}, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                })
            });

        });
    
    });
    
});



