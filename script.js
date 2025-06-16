// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    updateThemeIcon();
});

function updateThemeIcon() {
    if (localStorage.theme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Initialize theme icon
updateThemeIcon();

// Project Filtering
const filterButtons = document.querySelectorAll('.project-filter');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
        // Add active class to clicked button
        button.classList.add('bg-blue-500', 'text-white');
        
        const filterValue = button.getAttribute('data-filter');
        filterProjects(filterValue);
    });
});

function filterProjects(filter) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        if (filter === 'all' || project.getAttribute('data-category') === filter) {
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    });
}

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-bar-progress');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width;
            entry.target.classList.add('transition-all', 'duration-1000');
        }
    });
}, {threshold: 0.5});

skillBars.forEach(bar => observer.observe(bar));