CREATE DATABASE final2;

CREATE TABLE perfil(
	codigo_perfil CHAR(4) PRIMARY KEY,
	nombre_perfil VARCHAR (30),
	indicador CHAR (1)
);

CREATE TABLE aplicacion (
	codigo_app CHAR (4) PRIMARY KEY,
	nombre_app VARCHAR (30)
);

CREATE TABLE usuario (
	codigo_usr CHAR (4) PRIMARY KEY,
	cuenta_usr CHAR (8),
	nombre_usr VARCHAR (30),
	pass_usr VARCHAR (12),
	codigo_perfil CHAR (4),
	FOREIGN KEY (codigo_perfil) REFERENCES perfil (codigo_perfil)
);

CREATE TABLE perfil_aplicacion (
	id_prefil_app NUMERIC (4) PRIMARY KEY,
	codigo_perfil CHAR (4),
	codigo_app CHAR (4),
	FOREIGN KEY (codigo_perfil) REFERENCES perfil (codigo_perfil),
	FOREIGN KEY (codigo_app) REFERENCES aplicacion (codigo_app)
);

INSERT INTO perfil VALUES ('0001','Usuario de planilla',1);
INSERT INTO perfil VALUES ('0002','Usuario de ventas',1);
INSERT INTO perfil VALUES ('0003','Usuario de caja',1);
INSERT INTO perfil VALUES ('0004','Usuario de almacen',1);
INSERT INTO perfil VALUES ('0005','Usuario de consulta',0);

INSERT INTO aplicacion VALUES ('0001','Modulo de planillas');
INSERT INTO aplicacion VALUES ('0002','Modulo de ventas');
INSERT INTO aplicacion VALUES ('0003','Modulo de almacen');

INSERT INTO perfil_aplicacion VALUES (1,'0001','0001');
INSERT INTO perfil_aplicacion VALUES (2,'0002','0002');
INSERT INTO perfil_aplicacion VALUES (3,'0002','0003');
INSERT INTO perfil_aplicacion VALUES (4,'0003','0003');
INSERT INTO perfil_aplicacion VALUES (5,'0004','0002');
INSERT INTO perfil_aplicacion VALUES (6,'0004','0003');
INSERT INTO perfil_aplicacion VALUES (7,'0005','0001');
INSERT INTO perfil_aplicacion VALUES (8,'0005','0002');
INSERT INTO perfil_aplicacion VALUES (9,'0005','0003');

INSERT INTO usuario VALUES ('u001','adm_pla','juan melo','secret0','0001');
INSERT INTO usuario VALUES ('u002','adm_ven','claudio zamora','secret1','0002');
INSERT INTO usuario VALUES ('u003','adm_alm','percy galvan','secret2','0003');


SELECT u.codigo_usr, u.cuenta_usr, u.nombre_usr, u.pass_usr, u.codigo_perfil, p.nombre_perfil, p.indicador 'indicador_perfil', a.codigo_app, a.nombre_app FROM usuario u INNER JOIN perfil p ON (u.codigo_perfil = p.codigo_perfil) INNER JOIN perfil_aplicacion pa ON (pa.codigo_perfil = p.codigo_perfil) INNER JOIN aplicacion a ON (pa.codigo_app = a.codigo_app); 

UPDATE perfil SET indicador = 0 WHERE codigo_perfil = '0005';









