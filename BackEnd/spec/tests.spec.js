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

  

    /*describe("GIVEN: El nombre de usuario", () => { 
        var send = {username: "user1"};
        describe("WHEN: El usuario require consultar su historial", ()=>{
            it( "THEN: Se retorna el historial de compra de giftcards ", (done)=>{
                Request.post("http://localhost:3001/api/getHistorial", {form: send}, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                })
            });

        });
    
    });*/
    

    it("GET /getHistorial - statusCode|Content-Type|BodyLength", (done) => 
    {
         Request.get("http://localhost:3001/api/getHistorial/1", (error, response, body) => {
          
             expect(response.statusCode).toBe(200);
             expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
             expect(response.body.length).toBeGreaterThan(0);
             done();
         })
    });
});



