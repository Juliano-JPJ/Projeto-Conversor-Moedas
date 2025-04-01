function conversor() {
    let reais = prompt("Digite o valor em Reais que deseja converter:");
    
    if (reais === null || reais.trim() === "" || isNaN(reais)) {
        alert("Por favor, insira um valor válido!");
        return;
    }

    const taxaDeCambio = 0.06861;
    const rublos = (parseFloat(reais) * taxaDeCambio).toFixed(2);
    
    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const reaisFormatado = formatador.format(reais);
    const rublosFormatado = formatador.format(rublos);

    alert(`No mercado negro, seus R$${reaisFormatado} valem aproximadamente ₽${rublosFormatado} rublos soviéticos!`);
}