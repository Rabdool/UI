function handleLogin(event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return false;
    }

    alert(`Logging in with:\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
    // Simulate login logic or redirect here
    return false;
}
