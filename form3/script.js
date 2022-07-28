function logar(){ //1ºPasso: Criar Função(function logar()) para logar o usuário

    var login = document.getElementById("login").value;//2º Passo : Criar as Variáveis (var login e var senha) para receber o nome e senha do usuário
    var senha = document.getElementById("senha").value;
    
//3ºPasso:Validar os dados preenchidos com o Desvio Condicional (If e Else)
    if(login == "Donovan" && senha == "admin"){
        alert("Login realizado com sucesso!");
        location.href="home.html";
    }else{
        alert("Usuário ou senha incorretos!");
    }

}