import { useState, useEffect } from 'react'
import '../styles/globals.css'
import { ContextCart } from '../context/context'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function App({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)
  const [paginaLista, setPaginaLista] = useState(false)
  const [popUp, setPopUp] = useState(false)



  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
    const calcularSumaTotal = () => {
      const sumaTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0)
      setPopUp(sumaTotal > 0)
    }
    calcularSumaTotal()
  }, [carrito])




  const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map(guitarraState => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra]);
      localStorage.setItem('carrito', JSON.stringify(carrito, guitarra));
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carritoActualizado));



  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad)
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carritoActualizado));

  }


  return paginaLista ?

    <ContextCart.Provider value={{ popUp }}>
      <Component
        carrito={carrito}
        agregarCarrito={agregarCarrito}
        eliminarProducto={eliminarProducto}
        actualizarCantidad={actualizarCantidad}
        popUp={popUp}
        {...pageProps}
      />
      <ToastContainer/>
    </ContextCart.Provider>

    : null;
}
