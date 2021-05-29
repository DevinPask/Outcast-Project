// Sign Up
async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (username && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            console.log('success');
            setTimeout(loginFormHandler(event), 5000);
        } else {
            alert(response.statusText);
            console.log('error');
        }
    }  
}
document.querySelector('#signup').addEventListener('click', signupFormHandler);

// Login
async function loginFormHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log('click login');
    console.log(username, password);

    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
        console.log('error');
      }
    }
  }

  document.querySelector('#login').addEventListener('click', loginFormHandler);