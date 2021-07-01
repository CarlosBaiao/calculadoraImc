const button = document.getElementById('button');
const result = document.getElementById('result');


const addImc  = () => {
    const meName = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    


    if(meName !== '' && weight !== '' && height !== '') {
        let formattedHeight = parseFloat(height.replace(",","."))
        let formattedWeight = parseFloat(weight.replace(",","."))

        const calc = (formattedWeight / (formattedHeight * formattedHeight)).toFixed(1);

        let placing = "";

        if(calc < 18.4) {
            placing = "abaixo do peso. Ganhe peso"
        } else if (calc < 24.9) {
            placing = "com peso ideal. Parabéns"
        } else if (calc < 29.9) {
            placing = "pré - obeso. Tenha um pouco de atenção"
        } else if (calc < 34.9) {
            placing = " com obesidade grau 1. Perca peso "
        } else if  (calc < 39.9) {
            placing = "com obesidade grau 2. Atenção, perca peso"
        } else {
            placing = "com obesidade grau 3. Cuidado, procure um especialista"
        }

        result.innerHTML = `Olá ${meName} seu IMC é ${calc} e você está ${placing}`
    } else {
        result.innerHTML = "Preencha todos os campos"
    }
}




button.addEventListener('click' , addImc);