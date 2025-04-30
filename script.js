  document.getElementById('bufferForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const container = document.querySelector(".container")
    container.style.marginTop= "-3px";
    container.style.marginBottom= "40px";
    // Data colction
    const ph = parseFloat(document.getElementById('ph').value);
    const capacity = parseFloat(document.getElementById('capacity').value);
    // const strength = parseFloat(document.getElementById('strength').value);
    const acid = document.getElementById('acid').value;

    const acids = {
        acetic: { name: 'Acetic acid', pKa: 4.76 },
        phosphoric1: { name: 'Phosphoric acid', pKa: 2.14 }, 
        phosphoric2: { name: 'Phosphoric acid', pKa: 7.20 }, 
        phosphoric3: { name: 'Phosphoric acid', pKa: 12.67 }, 
        formic: { name : 'Formic Acid', pKa: 3.75 },
        propanoic: { name: 'Propanoic Acid', pKa: 4.87 },
        benzoic:{ name: 'Benzoic Acid', pKa: 4.20 }, 
        hydrofluoric:{ name: 'Hydrofluoric Acid', pKa: 3.17 }
    };

    // الحصول على pKa
    const pKa = acids[acid].pKa;

    // حساب نسبة [A⁻]/[HA]
    const ratio = Math.pow(10, ph - pKa);

    // 2. Buffer capacity calc
    const HA = capacity / (2.303 * (1 + ratio));
    const A = ratio * HA

    // The Results
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>The Results :</h3>
        <p> pKa : ${pKa}</p>
        <p> The Acid : ${acids[acid].name}</p>
        <p> buffer capacity : ${capacity.toFixed(2)}</p>
        <p> <span> ADD </span> Acid Conc([HA]) : ${HA.toFixed(4)} M</p>
        <p> <span> ADD </span> Base Conc ([A⁻]) : ${A.toFixed(4)} M</p>
        ` ;
}); 
