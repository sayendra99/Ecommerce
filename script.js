document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('#navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
        document.querySelector('#navbar').classList.toggle('active');
    });

    // Add to Cart button alert
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });

    // Enable smooth snapping for product cards
    const productContainer = document.querySelector('.section_p1');
    productContainer.style.scrollSnapType = 'x mandatory';
    productContainer.style.scrollBehavior = 'smooth';
});
