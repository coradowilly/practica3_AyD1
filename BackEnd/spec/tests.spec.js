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
    
    //registrar tarjeta
    describe("GIVEN: El usuario quiere pagar ", () => { 
        var newEntity3 = {userid:1, cardNumber:132165,nameOnCard:"prueba",expiryDate:'2020-10-09',cvv:555};
        describe("WHEN: Da click en registrar tarjeta", ()=>{
            it("THEN: Retorna un estado de verificacion de transaccion", (done)=>{
                Request.post("http://localhost:3001/api/registrartarjeta",{form: newEntity3}, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                })
            });

        });
    
    });

    //obtener tarjeta
    describe("GIVEN: El usuario quiere pagar ", () => { 
        var newEntity3 = {userid:1,cardNumber:123};
        describe("WHEN: Da click en registrar tarjeta", ()=>{
            it("THEN: Retorna un estado de verificacion de transaccion", (done)=>{
                Request.post("http://localhost:3001/api/obtenerdatostarjeta",{form: newEntity3}, (error, response, body) => {
                    expect(response.statusCode).toBe(404);
                    done();
                })
            });

        });
    
    });
    
});



