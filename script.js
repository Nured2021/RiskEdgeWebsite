function scrollToPortfolio() {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
}

// Smooth scroll for nav links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});