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

    it("GET /giftcards - statusCode|Content-Type|BodyLength", (done) => 
    {
         //var data = {};
         Request.get("http://localhost:3002/api/giftcards/-1", (error, response, body) => {
             /*data.status = response.statusCode;
             data.body = response.body;*/
             expect(response.statusCode).toBe(200);
             expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
             expect(response.body.length).toBeGreaterThan(0);
             done();
         })
    });

    describe("GIVEN: El usuario intenta registrarse", () => { 
        var newEntity3 = {username:"prueba",email:"prueba@gmail.com",password:"1234",firstname:"Nery",lastname:"Condon",dpi:"123456",age:"23"};
        describe("WHEN: Da click en registrar usuario", ()=>{
            it("THEN: Retorna el status de la peticion", (done)=>{
                Request.post("http://localhost:3001/api/registro", {form: newEntity3}, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                })
            });

        });
    

    describe("GIVEN: El usuario intenta acceder (LOGIN)", () => { 
        var newEntity3 = {email:"prueba@gmail.com", password: "12345"};
        describe("WHEN: Da click en iniciar sesion", ()=>{
            it("THEN: Retorna un estado de verificacion de datos", (done)=>{
                Request.post("http://localhost:3001/api/login", {form: newEntity3}, (error, response, body) => {
                var esta = JSON.parse(response.body).Acceso;
                expect(esta).toBe("Denegado");
                done();
                })
            });

        });
    
    });
    
});



