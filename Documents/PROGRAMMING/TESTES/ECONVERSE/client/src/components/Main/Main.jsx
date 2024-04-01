import Categories from '../Articles/Categories'
import SliderProducts from '../Slider/Slider'
import Partnes from '../Articles/Partnes'
import RelatedProducts from '../Articles/RelatedProducts'
import ProductsMarks from '../Articles/ProductsMarks'


function Main({ products }) {

    return (
        <main>
            <section className="categories">
                <Categories />
            </section>

            <article className="products">
                <div className="heading">
                    <div className="title">
                    <div className="left-line"></div>
                    <h2>Produtos relacionados</h2>
                    <div className="right-line"></div>
                    </div>
                    <nav className="nav-products">
                    <ul>
                        <a href="#cell"><li><span>celular</span></li></a>
                        <a href="#accessories"><li>assesórios</li></a>
                        <a href="#tablets"><li>tablets</li></a>
                        <a href="#notebooks"><li>notebooks</li></a>
                        <a href="#tvs"><li>tvs</li></a>
                        <a href="#see-all"><li>ver todos</li></a>
                    </ul>
                    </nav>
                </div>

                <SliderProducts products={products} />

                <Partnes />

                <RelatedProducts />

                <ProductsMarks />
            </article>
        </main>
    )
}

export default Main