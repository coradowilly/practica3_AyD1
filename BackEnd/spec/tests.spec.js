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

    it("GET /giftcards - statusCode|Content-Type|BodyLength", (done) => 
    {
         //var data = {};
         Request.get("http://localhost:3002/api/giftcards/1", (error, response, body) => {
             /*data.status = response.statusCode;
             data.body = response.body;*/
             expect(response.statusCode).toBe(200);
             expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
             expect(response.body.length).toBeGreaterThan(0);
             done();
         })
    });

    //registro usuario
    describe("GIVEN: El usuario intenta registrarse", () => 
    { 
        var newEntity3 = {username:"prueba",email:"prueba@gmail.com",password:"1234",firstname:"Nery",lastname:"Condon",dpi:"123456",age:"23"};
        describe("WHEN: Da click en registrar usuario", ()=>{
            it("THEN: Retorna el status de la peticion", (done)=>{
                Request.post("http://localhost:3002/api/registro", {form: newEntity3}, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
                });
            });
        });        
    });
 

    //registrar tarjeta
 
    describe("GIVEN: El usuario quiere pagar ", () => { 
        var newEntity3 = {userid:1, cardNumber:132165,nameOnCard:"prueba",expiryDate:'2020-10-09',cvv:555};
        describe("WHEN: Da click en registrar tarjeta", ()=>{
            it("THEN: Retorna un estado de verificacion de transaccion", (done)=>{
                Request.post("http://localhost:3002/api/registrartarjeta",{form: newEntity3}, (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                })
            });
        });
    });

    //login
    describe("GIVEN: El usuario intenta acceder (LOGIN)", () => { 
        var newEntity3 = {email:"prueba@gmail.com", password: "12345"};
        describe("WHEN: Da click en iniciar sesion", ()=>{
            it("THEN: Retorna un estado de verificacion de datos", (done)=>{
                Request.post("http://localhost:3002/api/login", {form: newEntity3}, (error, response, body) => {
                var esta = JSON.parse(response.body).Acceso;
                expect(esta).toBe("Denegado");
                done();
                })
            });
        });
    });
    
    //obtener tarjeta
    describe("GIVEN: El usuario quiere pagar ", () => { 
        var newEntity4 = {userid:1};
        describe("WHEN: Da click en registrar tarjeta", ()=>{
            it("THEN: Retorna un estado de verificacion de transaccion", (done)=>{
                Request.post("http://localhost:3002/api/obtenerdatostarjeta",{form: newEntity4}, (error, response, body) => {
                   console.log(response.body)
                    expect(response.body).not.toBe([]);
                    done();
                 })
            });

        });
    });
    

    describe("GIVEN: Un usuario administrador quiere consultar las compras de los usuarios", () => { 

        describe("WHEN: Consulta las compras", ()=>{
            //var send = {id_user:'1',username:'admin',correo: 'useradmin@ayd1.com', nombres:'Analisis', contrasena:'12345', dpi:'123456789', edad:22, apellidos:'Yanosale'};
            
            it("THEN: Retorna un mensaje y stauts de verificacion", (done)=>{
   
                Request.get("http://localhost:3002/api/getcompras" , (error, response, body) => {;
                    expect(response.statusCode).toBe(200);
                    done();
                })
            });

        });
    });

    //PRUEBAS UNITARIAS DE PERFIL DE USUARIO
    describe("GIVEN: Un usuario quiere editar los datos de su perfil", () => { 

        describe("WHEN: envia sus nuevos valores", ()=>{
            var send = {id:'1',username:'admin',email: 'useradmin@ayd1.com', firstname:'Analisis', password:'12345', dpi:'123456789', age:22, lastname:'Yanosale'};
           
            it("THEN: Retorna un mensaje de verificacion", (done)=>{
   
                Request.post("http://localhost:3002/api/editperfil", {form:send} , (error, response, body) => {;
                    expect(response.statusCode).not.toBe(200);
                    done();
                })
            });

        });
    });

    

    

    it("GET /getHistorial - statusCode|Content-Type|BodyLength", (done) => 
    {
         Request.get("http://localhost:3002/api/getHistorial/1", (error, response, body) => {
          
             expect(response.statusCode).toBe(200);
             expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
             expect(response.body.length).toBeGreaterThan(0);
             done();
         })
    });


});
