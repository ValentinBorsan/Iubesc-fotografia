 document.addEventListener('DOMContentLoaded', function() {
        // Selectorii adaptați la clasele tale
        const hamburger = document.querySelector('.hamburger-menu');
        const navLinks = document.getElementById('navLinks');
        const header = document.querySelector('.meniu-navigatie'); 

        if (hamburger && navLinks && header) {
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
                
                if (navLinks.classList.contains('active')) {
                    navLinks.style.top = header.offsetHeight + 'px'; 
                } else {
                   
                }
            });

            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                });
            });
        } else {
            console.warn("Elemente header/hamburger/navLinks nu au fost găsite. Verifică HTML-ul și selectorii JS.");
        }
    });