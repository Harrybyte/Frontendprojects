document.getElementById('unlock-btn').addEventListener('click', function() {
    // Hide the gate
    document.getElementById('gate').style.display = 'none';

    // Show the content
    document.querySelector('header').style.display = 'block';
    document.querySelector('section#about').style.display = 'block';
    document.querySelector('section#projects').style.display = 'block';
    document.querySelector('section#contact').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
});