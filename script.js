const ctx = document.getElementById('grafico-categorias').getContext('2d');
const graficoCategorias = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Salgados', 'Bebidas', 'Doces'],
        datasets: [{
            label: 'Categorias',
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});