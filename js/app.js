document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

   
    const restaurantOpeningTime = "06:00";  
    const restaurantClosingTime = "20:00"; 

    const selectedTime = new Date(`${date}T${time}`);
    const openingTime = new Date(`${date}T${restaurantOpeningTime}`);
    const closingTime = new Date(`${date}T${restaurantClosingTime}`);

    if (selectedTime >= openingTime && selectedTime <= closingTime) {
        
        const message = `¡Hola ${name}!\n\nTu reserva para el ${date} a las ${time} ha sido confirmada.`;
        const subject = "Reserva confirmada";
        window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`);
    } else {
        alert("Lo sentimos, el restaurante no está abierto en el horario seleccionado. Por favor, elige un horario dentro del horario de apertura.");
    }
});






    