import './styles.css'
import ProductDetailsCard from '../../../components/ProductDetailsCard'
import ButtonPrimary from '../../../components/ButtonPrimary'
import ButtonInverse from '../../../components/ButtonInverse'
import { ProductDTO } from '../../../models/product'

const product: ProductDTO = {
    id: 2,
    name: 'Smart TV',
    description: "lorem lorem lorem",
    imgUrl: 'https://a-static.mlcdn.com.br/800x560/smart-tv-43-uhd-4k-led-samsung-43cu7700-lancamento-2023-wi-fi-bluetooth-alexa-3-hdmi/magazineluiza/237016000/0d04b4d2c6a502b6e928766eb8c44c93.jpg',
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: 'Eletronicos'
        },
        {
            id: 3,
            name: 'Computadores'
        }
    ]
}

export default function ProductDetails() {
    return (
        <>
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard product={product} />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary text='Comprar' />
                        <ButtonInverse text='Inicio' />
                    </div>
                </section>
            </main>
        </>
    )
}
