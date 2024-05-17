document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.fontWeight = 'bold';
        });

        link.addEventListener('mouseout', function() {
            this.style.fontWeight = 'normal';
        });
    });
});
