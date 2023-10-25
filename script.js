const numeroInput1 = document.querySelector('#numero-input1')
const numeroInput2 = document.querySelector('#numero-input2')

const a = document.querySelector('.btn')
a.addEventListener('click', validar)


function validar(){
    const nu1 = Number(numeroInput1.value)
    const nu2 = Number(numeroInput2.value)

    if(nu1 > nu2){
        alert('depósito não autorizado')
    } else {
        alert('depósito autorizado')
    }
}