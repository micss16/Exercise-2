document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});