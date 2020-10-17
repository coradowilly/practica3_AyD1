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
    
    describe("GIVEN: El usuario intenta acceder (LOGIN)", () => { 
        var newEntity3 = {correo:"prueba@gmail.com", contrasena: "12345"};
        describe("WHEN: Da click en iniciar sesion", ()=>{
            it("THEN: Retorna un estado de verificacion de datos", (done)=>{
                Request.post("http://localhost:3001/api/login", {form: newEntity3}, (error, response, body) => {
                var esta = JSON.parse(response.body).estado;
                console.log(esta);
                expect(esta).toBe(1);
                    done();
                })
            });

        });
    
    });
    
});



