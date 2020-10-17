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
        var newEntity3 = {email:"prueba@gmail.com", contrasena: "12345"};
        describe("WHEN: Da click en iniciar sesion", ()=>{
            it("THEN: Retorna un estado de verificacion de datos", (done)=>{
                Request.get("http://localhost:3000/api/login", (error, response, body) => {
                    expect(response.body).toBe({status:"1"});
                    done();
                })
            });

        });
    
    });
    
});



