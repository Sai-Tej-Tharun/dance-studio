 const menuBtn = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const main = document.getElementById('main-content');
        const themeBtn = document.getElementById('theme-toggle');

    
        menuBtn.addEventListener('click', () => {
            if (window.innerWidth > 1024) {
               
                sidebar.classList.toggle('collapsed');
                main.classList.toggle('expanded');
            } else {
             
                sidebar.classList.toggle('active');
            }
        });

        
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            themeBtn.textContent = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        }

        themeBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeBtn.textContent = '🌙 Dark Mode';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeBtn.textContent = '☀️ Light Mode';
            }
        });
        
        
    

// --- Revenue Donut Logic ---
const revCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revCtx, {
    type: 'doughnut',
    data: {
        labels: ['Products', 'Courses'],
        datasets: [{
            data: [35, 65],
            backgroundColor: ['#4cd137', '#00a8ff'],
            borderWidth: 0,
            cutout: '75%' // Creates the thin "ring" look from your image
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
    }
});