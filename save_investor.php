<?php
// Credenciais validadas com as informações atualizadas do banco de dados
$host = "localhost";
$dbname = "u480954643_scleenker";
$username = "u480954643_scleenker"; 
$password = "48344834Rj30@"; 

// Cabeçalhos para permitir que o React converse com o PHP (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

// Responde a requisições de verificação (preflight) do navegador
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Captura o JSON enviado pelo seu App.jsx
$input = file_get_contents("php://input");
$data = json_decode($input);

if (isset($data->email) && filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    try {
        // Conexão via PDO
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Insere o e-mail na tabela leads_investidores
        $sql = "INSERT INTO leads_investidores (email) VALUES (:email)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([':email' => $data->email]);

        echo json_encode(["status" => "sucesso"]);
    } catch (PDOException $e) {
        // Se o erro for 23000, significa que o e-mail já está cadastrado
        if ($e->getCode() == 23000) {
            echo json_encode(["status" => "erro", "message" => "Este e-mail já está na lista!"]);
        } else {
            // Retorna o erro técnico caso falte algo na conexão
            echo json_encode(["status" => "erro", "message" => "Erro técnico: " . $e->getMessage()]);
        }
    }
} else {
    echo json_encode(["status" => "erro", "message" => "E-mail inválido."]);
}
?><?php
// 1. CONFIGURAÇÕES DO BANCO DE DADOS
$host = "localhost";
$dbname = "u480954643_scleenker";
$username = "u480954643_scleenker"; 
$password = "48344834Rj30@"; 

// 2. CABEÇALHOS DE SEGURANÇA (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=utf-8");

// Responde ao preflight do navegador
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 3. PROCESSAMENTO DOS DADOS
$input = file_get_contents("php://input");
$data = json_decode($input);

if (isset($data->email) && filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // GRAVA EXCLUSIVAMENTE NA TABELA LEADS_INVESTIDORES
        $sql = "INSERT INTO leads_investidores (email) VALUES (:email)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([':email' => $data->email]);

        echo json_encode(["status" => "sucesso"]);
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) {
            echo json_encode(["status" => "erro", "message" => "Este e-mail já está na lista de investidores!"]);
        } else {
            echo json_encode(["status" => "erro", "message" => "Erro técnico: " . $e->getMessage()]);
        }
    }
} else {
    echo json_encode(["status" => "erro", "message" => "E-mail inválido."]);
}
?>