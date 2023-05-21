export const formatearFecha = fecha => {
  const fechaNueva = new Date(fecha)
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }


  return fechaNueva.toLocaleDateString('es-ES', opciones)
}






export const textoCargando = () => {

  document.querySelectorAll('.ver-producto').forEach(e => {
    e.addEventListener('click', function(e){
      
        e.target.innerText = 'Cargando...'
     
    })


})

  return textoCargando
}