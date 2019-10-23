
var senha_certa = 0;
function verifica_nome(){
    var tamanho = nome_completo.value.length;
    if(tamanho >= 5){
        if(!(nome_completo.value.startsWith(" ")) && !(nome_completo.value.endsWith(" ")) && nome_completo.value.indexOf(" ") > 0){        
            document.getElementById('nome_completo').className = 'correto';
            mensagem_nome.innerHTML = "OK";
            mensagem_nome.style.color = 'green';

        }
        else{
            document.getElementById('nome_completo').className = 'errado';
        }
    }
    else{
        document.getElementById('nome_completo').className = 'errado';
        mensagem_nome.innerHTML = "Nome Completo ";
        mensagem_nome.style.color = 'red';

    }
    // mensagens de erro
    if(nome_completo.value.endsWith(" ")){
     mensagem_nome.innerHTML = "Seu nome tem um espaço a mais no final";
     mensagem_nome.style.color = 'red';

    }
    if(nome_completo.value.startsWith(" ")){
     mensagem_nome.innerHTML = "Seu nome tem um espaço a mais no começo";
     mensagem_nome.style.color = 'red';
    }
    
    if(nome_completo.value.indexOf(" ")< 0){
        mensagem_nome.innerHTML = "Nome Completo";
        mensagem_nome.style.color = 'red';
    }

}

function verificar_email(){
    if(email_cadastro.value.indexOf("@") > 0 && (email_cadastro.value.endsWith(".com") || email_cadastro.value.endsWith(".br"))){
        document.getElementById('email_cadastro').className = 'correto';
        mensagem_email.innerHTML = "OK";
    mensagem_email.style.color = 'green';
    }
    else{
        document.getElementById('email_cadastro').className = 'errado';
    }
//Mensagens de erro
if(email_cadastro.value.indexOf("@") < 0){
    mensagem_email.innerHTML = "Seu e-mail deve conter '@' ";
    mensagem_email.style.color = 'red';
}
if(!(email_cadastro.value.endsWith(".com")) && !(email_cadastro.value.endsWith(".br"))){
    mensagem_email.innerHTML = "Seu e-mail deve terminar com '.com' ou '.br' ";
    mensagem_email.style.color = 'red';
}

if(email_cadastro.value.endsWith("@.com.br") || email_cadastro.value.endsWith("@.br") || email_cadastro.value.endsWith("@.com")){
    mensagem_email.innerHTML = "Qual o servidor? Ex: hotmail; gmail; globo; etc";
    mensagem_email.style.color = 'red';
    document.getElementById('email_cadastro').className = 'errado';
}
if(email_cadastro.value.endsWith(" ")){
    mensagem_email.innerHTML = "Seu email tem um espaço a mais no final";
    mensagem_email.style.color = 'red';
    document.getElementById('email_cadastro').className = 'errado';
   }
   if(email_cadastro.value.startsWith(" ")){
    mensagem_email.innerHTML = "Seu email tem um espaço a mais no começo";
    mensagem_email.style.color = 'red';
    document.getElementById('email_cadastro').className = 'errado';
   }

}

function verificar_senha(){
    var tamanho = senha_cadastro.value.length;
    if(tamanho > 5){
        document.getElementById('senha_cadastro').className = 'correto';
        senha_certa = 1;
        mensagem_senha.innerHTML = 'OK';
        mensagem_senha.style.color = 'green';
    }
    else{
        document.getElementById('senha_cadastro').className = 'errado';
        senha_certa = 0 ;
        mensagem_senha.innerHTML = 'Sua senha deve conter no minimo 6 carácteres';
        mensagem_senha.style.color = 'red';
    }

    if(senha_cadastro.value == senha_confirmar.value && senha_certa == 1){
        document.getElementById('senha_confirmar').className = 'correto';
        mensagem_senha_novamente.innerHTML = 'OK';
        mensagem_senha_novamente.style.color = 'green';

    }
    else{
        document.getElementById('senha_confirmar').className = 'errado';
        mensagem_senha_novamente.innerHTML = 'Suas senhas não conhecidem';
        mensagem_senha_novamente.style.color = 'red';
    }
}

function function_mostrar_senha(){
    if(mostrar_senha.checked == true){
        senha_cadastro.type = 'text';
        senha_confirmar.type = 'text';
    } else{
        senha_cadastro.type = 'password';
        senha_confirmar.type = 'password';

    }
}
