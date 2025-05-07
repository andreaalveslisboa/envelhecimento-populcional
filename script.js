function mostrarGrafico() {
  const ctx = document.getElementById('grafico').getContext('2d');

  if (window.meuGrafico) {
    window.meuGrafico.destroy(); // Evita duplicar o gráfico
  }

  window.meuGrafico = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2000', '2010', '2020', '2030 (proj.)'],
      datasets: [{
        label: 'Percentual de idosos (%)',
        data: [7.5, 10.3, 14.2, 20],
        backgroundColor: 'rgba(90,145,191,0.2)',
        borderColor: '#5a91bf',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 25
        }
      }
    }
  });
}
