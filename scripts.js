window.onload = function () {
  const btnCalculate = document.getElementById('btn-calculate');
  const heightInput = document.getElementById('height-input');
  const weightInput = document.getElementById('weight-input');
  const heightError = document.getElementById('height-error');
  const weightError = document.getElementById('weight-error');

  function calcImc(height, weight) {
    const heightParsed = parseFloat(height);
    const weightParsed = parseFloat(weight);
  
    return weightParsed / (heightParsed * heightParsed)
  };

  function showImcResults(imc) {
    const resultSection = document.getElementById('result-section');
    const resultImcValue = document.getElementById('imc-value');

    resultSection.style.display = 'block';
    resultImcValue.innerHTML = imc;
  } 
  
  btnCalculate.addEventListener('click', () => {
    const heightValue = heightInput.value;
    const weightValue = weightInput.value;
    
    if (!heightValue) {
      heightError.innerHTML = 'Por favor informe a altura'
      heightError.style.display = 'block';
    }
    
    if (!weightValue) {
      weightError.innerHTML = 'Por favor informe o peso'
      weightError.style.display = 'block';
    }
    
    if (!heightValue || !weightValue) return;

    weightError.style.display = 'none';

    const imcValue = calcImc(heightValue, weightValue).toFixed(1);

    showImcResults(imcValue);
  })

  heightInput.addEventListener('focusout', event => {
    heightError.innerHTML = !event.target.value ? 'Por favor informe a altura' : '';
    heightError.style.display = !event.target.value ? 'block' : 'none';
  })

  weightInput.addEventListener('focusout', event => {
    weightError.innerHTML = !event.target.value ? 'Por favor informe o peso' : '';
    weightError.style.display = !event.target.value ? 'block' : 'none';
  })
}
