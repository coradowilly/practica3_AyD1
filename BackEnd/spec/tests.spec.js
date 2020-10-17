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

    /*it("GET/historial - statusCode", (done) => 
    {
         //var data = {};
         Request.get("http://localhost:3000/api/getHistorial", (error, response, body) => {
             expect(response.statusCode).toBe(200);
             done();
         })
    });*/

    describe("GIVEN: El nombre de usuario", () => { 
        var send = {username: "user1"};
        describe("WHEN: El usuario require consultar su historial", ()=>{
            it("THEN: Se retorna el historial de compra de giftcards ", (done)=>{
                Request.post("http://localhost:3001/api/getHistorial", {form: send}, (error, response, body) => {
                    expect(response.statusCode).toBe(404);
                    done();
                })
            });

        });
    
    });
    
});



