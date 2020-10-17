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

    it("GET/historial - statusCode", (done) => 
    {
         //var data = {};
         Request.get("http://localhost:3000/api/getHistorial", (error, response, body) => {
             expect(response.statusCode).toBe(200);
             done();
         })
    });
    
});



