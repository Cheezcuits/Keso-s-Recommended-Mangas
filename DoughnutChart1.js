const ctx = document.getElementById('DoughnutChart1').getContext('2d');
const DoughnutChart1 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Manga','Manhwa'],
        datasets: [{
            label: '# of Mangas',
            data: [31, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 1000, 
            easing: 'easeInOut' 
        }
    }
});
