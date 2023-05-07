const nameInput = document.querySelector("#nome-input")

const emailInput = document.querySelector("#email-input")

const telefoneInput = document.querySelector("#telefone-input")

const senhaInput = document.querySelector("#senha-input")

const buttonInput = document.querySelector(".btn")


buttonInput.addEventListener("click", function (event){
    event.preventDefault()

    if(nameInput.value === ""){
        alert("Favor preencher o campo: NOME")
    }else if(emailInput.value === ""){
        alert("Favor preencher o campo: EMAIL")
    }else if (telefoneInput.value === ""){
        alert("Favor preencher o campo: TELEFONE")
    }else if (senhaInput.value === ""){
        alert("Favor preencher o campo: SENHA")
    }else {
        alert("Cadastrado")
    }

    nameInput.value = ""

    emailInput.value = ""

    telefoneInput.value = ""

    senhaInput.value = ""

})

