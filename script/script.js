document.addEventListener('DOMContentLoaded', function () {
    let activeLink = document.querySelector('.nav-items.active-nav-link');

    // Change nav link to active on click
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            activeLink = document.querySelector('.nav-items.active-nav-link');
            activeLink.classList.remove('active-nav-link');
            this.querySelector('li').classList.add('active-nav-link');
        });
    });

    // Set default nav link
    const setActiveNavLink = (navItem) => {
        activeLink.classList.remove('active-nav-link');
        navItem.classList.add('active-nav-link');
        activeLink = navItem;
    };

    const fragment = window.location.hash;

    if (fragment) {
        const targetNavItem = document.querySelector(
            `a[href="${fragment}"] li`
        );
        setActiveNavLink(targetNavItem);
    }

    // On scroll check active section
    // const sections = document.querySelectorAll('section');
    // let activeSection = 'hero';

    // const isSectionInView = (section) => {
    //     const rect = section.getBoundingClientRect();
    //     return rect.top >= 0 && rect.top <= 100;
    // };

    // const updateSection = () => {
    //     sections.forEach((section) => {
    //         if (isSectionInView(section)) {
    //             activeSection = section.id;
    //             console.log(activeSection);
    //         }
    //     });
    // };

    // const handleScroll = () => {
    //     updateSection();
    //     activeLink = document.querySelector('.nav-items.active-nav-link');
    //     const targetNavItem = document.querySelector(
    //         `a[href="#${activeSection}"] li`
    //     );
    //     setActiveNavLink(targetNavItem);
    // };

    // window.addEventListener('scroll', handleScroll);
});
