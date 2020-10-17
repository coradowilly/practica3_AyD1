CREATE TABLE usuario (
id_user INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(50),
correo  VARCHAR(50),
nombres VARCHAR(50),
apellidos VARCHAR(50),
contrasena VARCHAR(50),
spi VARCHAR(50),
edad INT
);

CREATE TABLE tarjeta (
id_tarjeta INT PRIMARY KEY AUTO_INCREMENT,
numero VARCHAR(50),
fecha VARCHAR(50),
codigo INT,
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario (id_user)
);

CREATE TABLE card (
id_card INT PRIMARY KEY AUTO_INCREMENT,
codigo VARCHAR(500),
nombre VARCHAR(50),
imagen VARCHAR(500),
valor INT
);


CREATE TABLE transaccion (
id_transaccion INT PRIMARY KEY AUTO_INCREMENT,
fk_usuario INT,
fk_card INT,
aprobacion BOOLEAN,
moneda VARCHAR(10),
total int,
FOREIGN KEY (fk_usuario) REFERENCES usuario (id_user),
FOREIGN KEY (fk_card) REFERENCES card (id_card)
);

CREATE TABLE inventario (
dk_card INT,
fk_usuario INT,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id_user),
FOREIGN KEY (fk_card) REFERENCES card(id_card)
);
