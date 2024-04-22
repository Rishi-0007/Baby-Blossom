const navEl = document.querySelectorAll('i');

navEl.forEach(icon => {
    icon.addEventListener('click', () => {
        // Remove active class from all icons
        navEl.forEach(icon => {
            icon.classList.remove('active');
        });

        // Add active class to the clicked icon
        icon.classList.add('active');
    });
});

//function to show selected content
function showContent(contentId) {
    const contentEl = document.querySelectorAll('.content');

    contentEl.forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById(contentId).style.display = 'block';
}