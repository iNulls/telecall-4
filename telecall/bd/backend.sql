-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/05/2024 às 03:08
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `backend`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `endereco`
--

CREATE TABLE `endereco` (
  `Id_endereco` int(11) NOT NULL,
  `CEP` varchar(11) DEFAULT NULL,
  `Logradouro` varchar(55) DEFAULT NULL,
  `Complemento` varchar(30) DEFAULT NULL,
  `Numero` varchar(10) DEFAULT NULL,
  `Bairro` varchar(45) DEFAULT NULL,
  `Cidade` varchar(45) DEFAULT NULL,
  `Estado` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `log`
--

CREATE TABLE `log` (
  `Id_log` int(11) NOT NULL,
  `DataHora` datetime DEFAULT NULL,
  `Descricao2FA` varchar(50) DEFAULT NULL,
  `Resultado` text DEFAULT NULL,
  `Descricao` text DEFAULT NULL,
  `Id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pergunta2fa`
--

CREATE TABLE `pergunta2fa` (
  `Id_pergunta2FA` int(11) NOT NULL,
  `Pergunta` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `Id_user` int(11) NOT NULL,
  `Nome` varchar(100) DEFAULT NULL,
  `CPF` varchar(11) DEFAULT NULL,
  `DataNascimento` date DEFAULT NULL,
  `Sexo` char(1) DEFAULT NULL,
  `NomeMaterno` varchar(100) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Celular` varchar(11) DEFAULT NULL,
  `Telefone` varchar(10) DEFAULT NULL,
  `Login` varchar(50) DEFAULT NULL,
  `Senha` varchar(50) DEFAULT NULL,
  `TipoUsuario` char(1) DEFAULT NULL,
  `Id_endereco` int(11) DEFAULT NULL,
  `Id_pergunta2FA` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`Id_endereco`);

--
-- Índices de tabela `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`Id_log`),
  ADD KEY `FK_Log_Usuario` (`Id_user`);

--
-- Índices de tabela `pergunta2fa`
--
ALTER TABLE `pergunta2fa`
  ADD PRIMARY KEY (`Id_pergunta2FA`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id_user`),
  ADD KEY `FK_Usuario_Endereco` (`Id_endereco`),
  ADD KEY `FK_Usuario_Pergunta2FA` (`Id_pergunta2FA`);

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `log`
--
ALTER TABLE `log`
  ADD CONSTRAINT `FK_Log_Usuario` FOREIGN KEY (`Id_user`) REFERENCES `usuario` (`Id_user`) ON DELETE CASCADE;

--
-- Restrições para tabelas `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FK_Usuario_Endereco` FOREIGN KEY (`Id_endereco`) REFERENCES `endereco` (`Id_endereco`),
  ADD CONSTRAINT `FK_Usuario_Pergunta2FA` FOREIGN KEY (`Id_pergunta2FA`) REFERENCES `pergunta2fa` (`Id_pergunta2FA`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
