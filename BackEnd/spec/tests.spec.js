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


});



