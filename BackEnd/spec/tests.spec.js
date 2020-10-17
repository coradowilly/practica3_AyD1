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
    
    describe("GIVEN: El usuario quiere pagar ", () => { 
        var newEntity3 = {id_usuario: 1, numero: "1234567890",fecha: "10/22",codigo: "000",id_card: 1 , moneda: "$",total: "50"};
        describe("WHEN: Da click en pagar pedido", ()=>{
            it("THEN: Retorna un estado de verificacion de transaccion", (done)=>{
                Request.get("http://localhost:3000/api/pago", (error, response, body) => {
                    expect(response.body).toBe({status:"1"});
                    done();
                })
            });

        });
    
    });
    
});



