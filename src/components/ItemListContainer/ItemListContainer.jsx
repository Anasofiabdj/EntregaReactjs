import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { mFetch } from "../../utilidades/mFetch"
import { Link, useParams } from "react-router-dom"




function ItemListContainer({greetings='saludo'}) {
  const [productos, setProductos] =useState ([])
  const [producto, setProducto] =useState ([])

  const {cid} = useParams()

  // useEffect (()=>{
  //   if (cid) {
  //     mFetch ()
  //     .then (
  //       resultado => setProductos (resultado.filter(product => product.category ===cid)))
  //     .catch(error => console.log(error))
  //     .finally(()=> console.log ('ultimo'))

  //   }else {
  //   mFetch ()
  //   .then (
  //     resultado => setProductos (resultado))
  //   .catch(error => console.log(error))
  //   .finally(()=> console.log ('ultimo'))
  //   }
  // }, [cid]) 
  useEffect (()=> {
    if (cid) {
    const dbFirestore= getFirestore()
    const queryCollection = collection (dbFirestore, 'productos')
    const queryFilter = query (queryCollection, where('category','==', cid))

    getDocs (queryFilter)
    .then (res => setProductos (res.docs.map(product => ({id: product.id, ...product.data() }))))
    .catch (err => console.log (err))
  
  } else {
    const dbFirestore= getFirestore()
    const queryCollection = collection (dbFirestore, 'productos')
    getDocs (queryCollection)
    .then (res => setProductos (res.docs.map(product => ({id: product.id, ...product.data() }))))
    .catch (err => console.log (err))
  }
  },[cid])
  console.log(productos)



  console.log (productos)
  return (
    <>
        <div>
          {greetings}
        </div>
         
        <div className="d-flex justify-content-center align-items-center">
          {productos.map(product=>  
          <div  key={product.id} className="card w-25">
             <img src= {product.imageUrl} className= "card-img-top" />
    
             <div className= "card-body">
             <p> Nombre: {product.name}</p>
             <p> Precio: {product.price}</p>
             <p> Categoria: {product.category}</p>
             </div>
             <div className= "card-footer">
             
                <Link to={`/details/${product.id}`}>
                <button className= "btn btn-outline-dark w-100">Ver más</button>
                </Link>
             </div>
            
              </div>
            

      
      )}
      </div>
</>
)
  }

export default ItemListContainer
