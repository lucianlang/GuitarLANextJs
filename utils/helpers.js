export const formatearFecha = fecha => {
  const fechaNueva = new Date(fecha)
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }


  return fechaNueva.toLocaleDateString('es-ES', opciones)
}



export const popupATC = () => {

  const valoresDelCarrito = JSON.parse(localStorage.getItem("carrito"))

  const sumaTotal = valoresDelCarrito.map(producto => producto.cantidad).reduce((total, sigProducto) => total + sigProducto, 0);

  if (sumaTotal > 0) { document.querySelector('.popup').style.display = "block" } else {
    document.querySelector('.popup').style.display = "none"
  }
  
  return popupATC
}


export const textoCargando = () => {

  document.querySelectorAll('.ver-producto').forEach(e => {
    e.addEventListener('click', function(e){
      
        e.target.innerText = 'Cargando...'
     
    })


})

  return textoCargando
}