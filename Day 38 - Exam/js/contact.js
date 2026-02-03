document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all required fields.");
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you, " + name + "! Your message has been sent.");
        this.reset();
    }
});