document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const order = document.getElementById('order').value;

    console.log("Order Received:", { name, email, order });
    alert("Thank you for your order! We will contact you soon.");

    event.target.reset();
});
