const toggleButton = document.getElementById('theme');
const body = document.body;

// Attach a click event listener to the button
toggleButton.addEventListener('click', function() {
  // If the body element has the "dark-theme" class, remove it and add the "light-theme" class
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else if (!body.classList.contains('dark-theme') && !body.classList.contains('light-theme')) {
    body.classList.add('light-theme');
  }
  // Otherwise, remove the "light-theme" class and add the "dark-theme" class
  else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
});

function goToGithub() {
  window.open('https://github.com/ChanceTheDev0');
}

