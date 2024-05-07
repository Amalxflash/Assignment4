// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); 

  
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

  
//   if (username === 'admin' && password === '12345') {
    
//     alert('You are successfully logged in!');

//     // Redirect to another page
//     window.location.href = '.html'; // Replace with the URL of your desired page
//   } else {
//     // Display an error message
//     alert('Invalid details entered. Please try again.');
//   }
// });

const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username!== 'admin' || password!== '12345') {
    // Display an error message
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Invalid username or password. Please try again.';
    errorMessage.style.color = 'red';
    form.appendChild(errorMessage);

    // Clear the input values
    usernameInput.value = '';
    passwordInput.value = '';

    // Focus on the username input
    usernameInput.focus();
  } else {
    // Redirect to another page
    window.location.href = 'todo.html'; // Replace with the URL of your desired page
  }
});