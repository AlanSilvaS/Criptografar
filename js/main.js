let encryptBtn = document.getElementById(`encrypt-btn`);
let eInput = document.getElementById(`encryptedInput-1`);
let pInput = document.getElementById(`plainInput-1`);
let copybtn = document.getElementById(`copyToClipBoard`);
let inputs = [eInput, pInput]

let descriptBtn = document.getElementById(`descriptBtn`)
inputs.forEach(input => {
    input.oninput = () => {
        input.value = input.value.toLowerCase()
    }
})

function encrypt() {
    let pInput = document.getElementById(`plainInput-1`);
    let solved = ``
    let e = `enter`
    let i = `imes`
    let a = `ai`
    let o = `ober`
    let u = `ufat`

    if (pInput.value == `e`) {
        eInput.value = `${e}`
    } else if (pInput.value == `i`) {
        eInput.value = `${i}`
    } else if (pInput.value == `a`) {
        eInput.value = `${a}`
    } else if (pInput.value == `o`) {
        eInput.value = `${o}`
    } else if (pInput.value == `u`) {
        eInput.value = `${u}`
    }
    // eInput.value += substitui()
    // outra forma de fazer 
}

function encrypt2() {
    let pInput = document.getElementById(`plainInput-1`).value;

    resultado = pInput.replaceAll(/e/g, `enter`).replaceAll(/i/g, `imes`).replaceAll(/a/g, `ai`).replaceAll(/o/g, `ober`).replaceAll(/u/g, `ufat`);
    eInput.value = resultado
}

function descript(){
    let eInput = document.getElementById(`encryptedInput-1`);
    
    resultado2 = eInput.replaceAll(/enter/g, `e`).replaceAll(/i/g, `imes`).replaceAll(/a/g, `ai`).replaceAll(/o/g, `ober`).replaceAll(/u/g, `ufat`);
    pInput.value = resultado2
}

function copy() {
    eInput.select();
    eInput.setSelectionRange(0, 9999);
    document.execCommand(`copy`)
    // alert(`copiado`)
}

function telalimpa() {
    let img = document.getElementById(`imagemboy`)
    let pInput = document.getElementById(`plainInput-1`);
    let text1 = document.getElementById(`texth1`)
    let text2 = document.getElementById(`texth2`)
    if (pInput.value == ``) {
        // img.src = `garoto.svg`

    } else if (pInput.value != ``) {
        text2.innerHTML = ``
        text1.innerHTML = ``
        img.remove()
    }
}

// descriptBtn.addEventListener(`click`,descript);
copybtn.addEventListener(`click`, copy);
encryptBtn.addEventListener(`click`, telalimpa)
encryptBtn.addEventListener(`click`, encrypt2)