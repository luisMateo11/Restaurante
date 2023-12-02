
  window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    if (window.scrollY > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  function comprarEnWhatsApp(nombre, precio) {
    // Reemplaza el número de teléfono con el tuyo
    var numeroTelefono = '+573205169171';
    
    // Crea el mensaje con la información del postre
    var mensaje = '¡Hola! Me gustaría comprar: ' + nombre + ' precio: $' + precio + '.';

    // Codifica el mensaje y el número de teléfono para usarlo en el enlace
    var url = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(numeroTelefono) + '&text=' + encodeURIComponent(mensaje);

    window.open(url);
  }


    
(()=>{
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success, error);
  }else{
      alert("Geolocation no es soportada en este navegador");
  }
  })();

  function success(position){
      const latitude = position.coords.latitude;
      const longitude= position.coords.longitude;
      getMap(8.7641386,-75.8849046);
  }
  function error(){
alert("no se puede recibir la ubicacion ");
  }

  function getMap(latitude, longitude){

      const map= L.map("map").setView([latitude, longitude], 10);//10 es el zoom
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
      L.marker([latitude, longitude]).addTo(map).bindPopup('restaurante esta <b>AQUI</b>').openPopup();
  }

   
  

  