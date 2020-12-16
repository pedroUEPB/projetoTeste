Projeto para a disciplina de Técnicas de Desenvolvimento de Interface Gráfica(TDIG)

Banco de Dados(mysql)
-- ----------
-- SCHEMA
-- ----------
create schema `projetotdig`;

use `projetotdig`;

-- ----------
-- pessoa
-- ----------
CREATE TABLE pessoas(
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(50) NOT NULL,
	`idade` INT NOT NULL,
	`cpf` VARCHAR(14) NOT NULL,
	`cep` VARCHAR(9) NOT NULL,
	`endereco` VARCHAR(50) NOT NULL,
	`bairro` VARCHAR(50) NOT NULL,
	`cidade` VARCHAR(50) NOT NULL,
	`numero` VARCHAR(5),
	`complemento` VARCHAR(50),
	`uf` VARCHAR(2) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

-- ----------
-- PROFESSOR
-- ----------
CREATE TABLE professors(
	`id` INT NOT NULL AUTO_INCREMENT,
	`matricula` VARCHAR(11) NOT NULL,
	`curso` VARCHAR(50) NOT NULL,
	`usuario` VARCHAR(50) NOT NULL,
	`senha` VARCHAR(50) NOT NULL,
	`fk_pessoa` INT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_professor_pessoa_idx` (`fk_pessoa` ASC),
	CONSTRAINT `fk_professor_pessoa`
		FOREIGN KEY (`fk_pessoa`)
		REFERENCES `pessoas` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
);

-- ----------
-- ALUNO
-- ----------
CREATE TABLE alunos(
	`id` INT NOT NULL AUTO_INCREMENT,
	`matricula` VARCHAR(11) NOT NULL,
	`curso` VARCHAR(50) NOT NULL,
	`usuario` VARCHAR(50) NOT NULL,
	`senha` VARCHAR(50) NOT NULL,
	`fk_pessoa` INT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_aluno_pessoa_idx` (`fk_pessoa` ASC),
	CONSTRAINT `fk_aluno_pessoa`
		FOREIGN KEY (`fk_pessoa`)
		REFERENCES `pessoas` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
);

-- ----------
-- PROJETO
-- ----------
CREATE TABLE `projetos`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`titulo_do_projeto` VARCHAR(255) NOT NULL,
	`fk_professor` INT NOT NULL,
	`area_do_projeto` VARCHAR(255) NOT NULL,
	`resumo` VARCHAR(3000) NOT NULL,
	`palavra_chave1` VARCHAR(50) NOT NULL,
	`palavra_chave2` VARCHAR(50) NOT NULL,
	`palavra_chave3` VARCHAR(50) NOT NULL,
	`url_documento` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    PRIMARY KEY (`id`),
	INDEX `fk_projeto_professor_idx` (`fk_professor` ASC),
	CONSTRAINT `fk_projeto_professor`
		FOREIGN KEY (`fk_professor`)
		REFERENCES `professors` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
);

-- -----------------------------
-- CADASTRO DE ALUNO NO PROJETO
-- -----------------------------
CREATE TABLE `cadalunos`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`fk_aluno` INT NOT NULL,
	`fk_projeto` INT NOT NULL,
    `formacao` VARCHAR(50) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `fk_cadastroaluno_aluno_idx` (`fk_aluno` ASC),
	CONSTRAINT `fk_cadastroaluno_aluno`
		FOREIGN KEY (`fk_aluno`)
		REFERENCES `alunos` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	INDEX `fk_cadastroaluno_projeto_idx` (`fk_projeto` ASC),
	CONSTRAINT `fk_cadastroaluno_projeto`
		FOREIGN KEY (`fk_projeto`)
		REFERENCES `projetos` (`id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
);
