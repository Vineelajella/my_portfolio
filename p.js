document.addEventListener('DOMContentLoaded', function() {
    const moreAboutBtn = document.getElementById('more-about-btn');
    const moreAboutContent = document.getElementById('more-about-content');
    
    moreAboutBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        
        if (moreAboutContent.style.display === 'none' || moreAboutContent.style.display === '') {
            moreAboutContent.style.display = 'block';
            moreAboutBtn.textContent = 'Less About Me'; // Change button text
        } else {
            moreAboutContent.style.display = 'none';
            moreAboutBtn.textContent = 'More About Me'; // Change button text
        }
    });
});
