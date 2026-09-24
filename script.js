const header = document.getElementById('siteHeader');
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

// Handle header background style switches on viewport scroll
if (header) {
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12), { passive: true });
}

// Mobile responsive menu toggle actions
menuBtn?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
});

mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuBtn?.setAttribute('aria-expanded', 'false');
    });
});

// Structural entrance reveal observers
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in-view');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Active navigation highlights matching desktop viewport scrolling position
const anchors = [...document.querySelectorAll('.desktop-nav a')];
const sections = anchors.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
        }
    });
}, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

sections.forEach(s => navObserver.observe(s));

// Interaction Handler Pass: Disables template pointer freezes and tracks card expansion
document.querySelectorAll('.team-card.founder').forEach(card => {
    card.style.pointerEvents = 'auto'; // Explicitly forces interaction
    card.addEventListener('click', function(event) {
        // Prevent accordion layout close action if a link inside is clicked
        if (event.target.closest('.professional-link')) {
            return;
        }
        
        const contactPanel = this.querySelector('.founder-contact-info');
        if (contactPanel) {
            contactPanel.classList.toggle('show-contacts');
        }
    });
});
