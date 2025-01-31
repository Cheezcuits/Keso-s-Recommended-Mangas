const ctx2 = document.getElementById('DoughnutChart2').getContext('2d');
const DoughnutChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Completed','Ongoing','Hiatus',],
        datasets: [{
            label: 'Status of Mangas',
            data: [26, 37, 1,],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)', //blue (2)
                'rgba(75, 192, 192, 0.2)', //green (4)
                'rgba(255, 159, 64, 0.2)', //orange (6)
                'rgba(255, 99, 132, 0.2)', //red (1)
                'rgba(255, 206, 86, 0.2)', //yellow (3)
                'rgba(153, 102, 255, 0.2)', //purple (5)
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)', //blue (2)
                'rgba(75, 192, 192, 1)', //green (4)
                'rgba(255, 159, 64, 1)', //orange (6)
                'rgba(255, 99, 132, 1)', //red (1)
                'rgba(255, 206, 86, 1)', //yellow (3)
                'rgba(153, 102, 255, 1)', //purple (5)
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
