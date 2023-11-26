import { useContext, useState } from "react"
import { CartContext, useCartContext } from "../../contexts/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"


export const CartContainer = () => {
  const { cartList, vaciarCarrito } = useCartContext();
  const [showCheckout, setShowCheckout] = useState(false); 
  const [checkoutData, setCheckoutData] = useState(null);

  const handleOrders = () => {
    const order = {}
        order.buyer= { name: 'sofia', phone: '3512648877', email: 'sofi@gmail.com' },
        order.items= cartList.map(({id, price, cant, name}) =>({  id:id, price: price, name: name, cant:cant }))
        order.total= 25525
        console.log('order antes de añadir a firestore:', order); 

      const db = getFirestore();
      const queryCollection = collection(db, 'orders');
  
    addDoc(queryCollection, order)
    .then((res) => {
      console.log(res);
      setCheckoutData(order);
      setShowCheckout(true); // Mostrar datos del checkout después de realizar el pedido
    })
    .catch((err) => console.log(err));
};
 
  return (
    <div className="w-100">
      {cartList && cartList.map(product => (
        <div key={product.id}>
          <img className="w-25" src={product.imageUrl} alt="image" />
          Producto: {product.name} price: {product.price} cantidad {product.cant} 
          <button className="btn btn-danger">Eliminar</button>
          <hr />
        </div>
      ))}
      Total:
      <button className= "btn-btn-danger" onClick= {vaciarCarrito}> Vaciar carrito</button>
      <button onClick= {handleOrders}>Finalizar compra</button>
      {showCheckout && (
        <div style={{backgroundColor: 'pink',borderRadius: '10px',padding: '10px',marginTop: '20px',}}>
          <h2>Datos de la compra </h2>
          <p>Nombre: {checkoutData.buyer.name}</p>
          <p>Teléfono: {checkoutData.buyer.phone}</p>
          <p>Email: {checkoutData.buyer.email}</p>

          <h3>Productos:</h3>
          <ul>
            {checkoutData.items.map((item) => (
              <li key={item.id}>
                {item.name} - Cantidad: {item.cant} - Precio: {item.price}
              </li>
            ))}
          </ul>

          <p>Total: {checkoutData.total}</p>
        </div>
      )}
    </div>
  );
};

export default CartContainer; 