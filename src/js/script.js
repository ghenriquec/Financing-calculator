const calculate = document.getElementById('calculate');

let inputs = document.querySelectorAll(".input");

/* Mask for input */
$(document).ready(function () {
  $('.weight').mask("#00", {
    reverse: true
  });
})

$(document).ready(function () {
  $('.height').mask("#0.00", {
    reverse: true
  });
})

const financingCar = () => {
  const name = document.getElementById('name').value
  const priceCar = document.getElementById('carPrice').value
  const salary = document.getElementById('salary').value
  const inputValue = document.getElementById('inputValue').value
  const quantityInstallments = document.getElementById('installmentsQuantity').value
  const resultFinancing = document.getElementById('result');

  let fees = document.getElementById('fees').value

  feesDecimal = (fees / 100)

  if(priceCar !== '' && salary !== '' && inputValue !== '' && fees !== '' && quantityInstallments !== '' && resultFinancing !== ''){
   
    const PV = priceCar - inputValue;
    const maximumValue = salary * 0.3;

    const PMT = ((PV*(1+feesDecimal) ** quantityInstallments *(feesDecimal)) / ((1 + feesDecimal)**quantityInstallments-1)).toFixed(2);

    if (PMT <= maximumValue) {
      financingResult = "aprovado com sucesso";
    }else{
      financingResult = "recusado.";
    }

    result.textContent = `Olá ${name}! O valor ${PV} foi parcelado em ${quantityInstallments} parcelas com ${fees}% de juros mensais, resultando no valor total de R$ ${PMT} por parcela. Tendo em vista o seu salario de R$ ${salary} e o seu limite de R$ ${maximumValue} para cada parcela, o seu financiamento foi ${financingResult}!`;
  }else{
    alert('Por favor preencha todos os camps para que o financiamento possa ser feito.')
  }  
}

const clearText = () => {

}

const focusFunx = () => {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
};



calculate.addEventListener("click", financingCar)

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunx);
});

