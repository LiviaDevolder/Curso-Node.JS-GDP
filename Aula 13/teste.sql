INSERT INTO usuarios(nome, email, idade) VALUES(
    "Livia Devolder",
    "liviadevolder@gmail.com",
    18
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Luis Silva",
    "luis2ilva@bol.com.br",
    27
);

INSERT INTO usuarios(idade, nome, email) VALUES(
    47,
    "Jorge Fernandes",
    "jorgefernandes@yahoo.com.br"
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Sofia Wylie",
    "sofiawylie@gmail.com",
    18
);

SELECT * FROM usuarios WHERE idade = 18;

SELECT * FROM usuarios WHERE nome = "Livia Devolder";

SELECT * FROM usuarios WHERE idade >= 18;