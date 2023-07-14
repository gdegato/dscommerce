import './styles.css'
import SearchBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import { ProductDTO } from '../../../models/product'

const product: ProductDTO = {
    id: 2,
    name: 'Smart TV',
    description: "lorem lorem lorem",
    imgUrl: 'https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true',
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: 'Eletronicos'
        },
        {
            id: 3,
            name: 'Computadores'
        },
        {
            id: 4,
            name: 'Importados'
        }
    ]
}


export default function Catalog() {
    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                        <CatalogCard product={product} />
                    </div>
                    <ButtonNextPage text='Carregar mais' />
                </section>
            </main>
        </>
    )
}