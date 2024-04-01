import { useEffect, useState } from 'react'
import getProducts from './services/getProducts';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {

  const [ products, setProducts ] = useState([])

  useEffect( () => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])


  return (
    <>
      <Header />
      <Banner />
      <Main products={products}/>
      <Footer />
    </>
  );
}


export default App;