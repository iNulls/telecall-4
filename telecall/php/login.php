<?php
// Configurações do banco de dados
$hostname = 'localhost';
$username = 'root';
$password = '1578901';
$database = 'ssa';

// Conectando ao banco de dados
$mysqli = mysqli_connect($hostname, $username, $password, $database);

// Verificando erros na conexão
if ($mysqli->connect_error) {
    die('Erro na conexão com o banco de dados: ' . $mysqli->connect_error);
}

// Verifica se o formulário de login foi enviado
if (isset($_POST['usuario']) && isset($_POST['senha'])) {
    // Obtem as credenciais do formulário
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Consulta SQL para verificar as credenciais no banco de dados
    $query = "SELECT * FROM usuario WHERE usuario = '$usuario' AND password = '$senha'";
    $result = $mysqli->query($query);

    // Verifica se o resultado possui algum registro
    if ($result->num_rows == 1) {
        // Credenciais corretas, redireciona para a página de sucesso
        session_start();
        $_SESSION["usuario"] = $_POST["usuario"];
        header('Location: logado.html');
        exit();
    } else {
        // Credenciais inválidas, exibe uma mensagem de erro
        echo '<script>window.location.href = "php/error.php";</script>';
    }
}

// Fecha a conexão com o banco de dados
$mysqli->close();
?>