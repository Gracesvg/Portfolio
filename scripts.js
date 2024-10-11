// function toggleMobileMenu() {
//     document.getElementById("menu").classList.toggle
//     ("active");
    
// }

function toggleNavbar() {
    const navbarLinks = document.getElementById('navbarLinks');
    if (navbarLinks.style.display === "block") {
        navbarLinks.style.display = "none";
    } else {
        navbarLinks.style.display = "block";
    }
}
// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to show/hide the FAB when the user scrolls
window.onscroll = function() {
    const fab = document.querySelector('.fab');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 200) {
        fab.style.display = "flex";  // Show button after scrolling down 300px
    } else {
        fab.style.display = "none";  // Hide button at the top of the page
    }
}
document.getElementById("displayYear").innerHTML = new Date().getFullYear();