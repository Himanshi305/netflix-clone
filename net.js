function submitEmail() {
    var email = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        console.log('Email submitted:', email);
        localStorage.setItem('submittedEmail', email);
        // Redirect to another page or perform any action you want after a valid email submission
        window.location.href = 'nextpage.html'; // Replace 'nextpage.html' with the actual page you want to navigate to
    } else {
        console.log('Invalid email format');
        // Add your logic to handle the invalid email input here
    }
}

function signIn() {
    // Add your logic for the Sign In button here
    console.log('Sign In button clicked');
    // Redirect to the sign-in page or perform any action you want
    window.location.href = 'signin.html'; // Replace 'signin.html' with the actual sign-in page
}