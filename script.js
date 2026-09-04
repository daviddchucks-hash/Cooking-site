
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
 const display = document.getElementById("display");
    const message = document.getElementById('message').value;

  const prompt = document.getElementById("promptbtn");

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

prompt.addEventListener("click", () => {

   let amount = prompt("How much do u want to save");
  if (amount === "") {
    alert("pls input amount");
  }
  else {
document.getElementById("amountadded").textContent = "Amount Added successfully";
  }
display.textContent = amount
  
})
