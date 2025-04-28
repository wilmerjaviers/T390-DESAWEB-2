import './App.css';


let tempValue = 39;
let tempUnit = 'Celsius';


let celsiusValue = 0;

switch (tempUnit) {
  case 'Celsius':
    celsiusValue = tempValue;
    break;
  case 'Fahrenheit':
    celsiusValue = (tempValue - 32) * 5/9;
    break;
  case 'Kelvin':
    celsiusValue = tempValue - 273.15;
    break;
}


let fahrenheitValue = (celsiusValue * 9/5) + 32;
let kelvinValue = celsiusValue + 273.15;


console.log('===== RESULTADOS DE CONVERSIÓN =====');
console.log(`Valor original: ${tempValue} ${tempUnit}`);
console.log(`Celsius: ${celsiusValue.toFixed(2)} °C`);
console.log(`Fahrenheit: ${fahrenheitValue.toFixed(2)} °F`);
console.log(`Kelvin: ${kelvinValue.toFixed(2)} K`);
console.log('==================================');

function App() {
  return (   
    <div>
      <h1 className="text-2xl font-bold mb-4">Conversor de Temperaturas</h1>
      <p className="text-lg">Abre consola para ver los resultados</p>
    </div>
  );
}

export default App;