const nameInput = document.querySelector("#nome-input")

const emailInput = document.querySelector("#email-input")

const telefoneInput = document.querySelector("#telefone-input")

const senhaInput = document.querySelector("#senha-input")

const buttonInput = document.querySelector(".btn")


buttonInput.addEventListener("click", function (event){
    event.preventDefault()

    if(nameInput.value === ""){
        alert("FAVOR PREENCHER O CAMPO: NOME")
    }else if(emailInput.value === ""){
        alert("FAVOR PREENCHER O CAMPO: EMAIL")
    }else if (telefoneInput.value === ""){
        alert("FAVOR PREENCHER O CAMPO: TELEFONE")
    }else if (telefoneInput.value === ""){
        alert("FAVOR PREENCHER O CAMPO: SENHA")
    }else {
        alert("Cadastrado")
    }

    nameInput.value = ""

    emailInput.value = ""

    telefoneInput.value = ""

    senhaInput.value = ""

})

