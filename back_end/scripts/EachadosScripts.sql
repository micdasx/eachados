CREATE TABLE Cor(
id int NOT NULL PRIMARY KEY,
descricao varchar(50) NOT NULL,
hexadecimal varchar(20) NOT NULL
);

CREATE TABLE Local(
id int NOT NULL PRIMARY KEY,
descricao varchar(50) NOT NULL
);

CREATE TABLE Sublocal(
id int NOT NULL PRIMARY KEY,
descricao varchar(50) NOT NULL
);

CREATE TABLE Piso(
id int NOT NULL PRIMARY KEY,
descricao varchar(50) NOT NULL
);

CREATE TABLE Tipo_Contato(
id int NOT NULL PRIMARY KEY,
descricao varchar(50) NOT NULL
);

CREATE TABLE Categoria(
id int NOT NULL PRIMARY KEY,
descricao varchar(50) NOT NULL
);

CREATE TABLE Subcategoria(
id int NOT NULL PRIMARY KEY,
descricao varchar(50) NOT NULL,
id_categoria int NOT NULL,

FOREIGN KEY (id_categoria) REFERENCES Categoria(id) ON DELETE CASCADE
);


CREATE TABLE Usuario(
id int NOT NULL PRIMARY KEY,
nome varchar(255) NOT NULL,
nick varchar(30) NOT NULL,
biografia varchar(150),
contato varchar(20) NOT NULL,
id_tipo_contato int NOT NULL,

FOREIGN KEY (id_tipo_contato) REFERENCES Tipo_Contato(id) ON DELETE CASCADE
);

CREATE TABLE Objeto(
id int NOT NULL PRIMARY KEY,
id_cor int NOT NULL,
id_categoria int NOT NULL,
id_subcategoria int NOT NULL,
id_local int NOT NULL,
id_piso int NOT NULL,
id_sublocal int NOT NULL,
id_usuario int NOT NULL,
descricao varchar(150),
deletado boolean NOT NULL,

FOREIGN KEY (id_cor) REFERENCES Cor(id),
FOREIGN KEY (id_categoria) REFERENCES Categoria(id),
FOREIGN KEY (id_subcategoria) REFERENCES Subcategoria(id),
FOREIGN KEY (id_local) REFERENCES Local(id),
FOREIGN KEY (id_sublocal) REFERENCES Sublocal(id),
FOREIGN KEY (id_piso) REFERENCES Piso(id),
FOREIGN KEY (id_usuario) REFERENCES Usuario(id)

);

CREATE TABLE Objeto_Achado(
id_obj int NOT NULL PRIMARY KEY,
devolvido boolean NOT NULL,

FOREIGN KEY (id_obj) REFERENCES Objeto(id) ON DELETE CASCADE
);

CREATE TABLE Objeto_Perdido(
id_obj int NOT NULL PRIMARY KEY,
publico boolean NOT NULL,
imagem_s3 varchar(255),
recuperado boolean NOT NULL,

FOREIGN KEY (id_obj) REFERENCES Objeto(id) ON DELETE CASCADE
);


