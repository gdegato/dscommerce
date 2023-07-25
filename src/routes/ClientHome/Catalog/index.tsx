/* eslint-disable @typescript-eslint/no-unsafe-argument */
import './styles.css'
import SearchBar from '../../../components/SearchBar'
import CatalogCard from '../../../components/CatalogCard'
import ButtonNextPage from '../../../components/ButtonNextPage'
import { useEffect, useState } from 'react'
import { ProductDTO } from '../../../models/product'
import * as productService from '../../../services/product-service'
import { CategoryDTO } from '../../../models/category'


export default function Catalog() {
    const [product, setProduct] = useState<ProductDTO[]>([]);

    const objTest: CategoryDTO = {
        id: 8,
        name: 'Jardinagem'
    }

    useEffect(() => {
        //local storage tem q ser string, dai tem q converter de obj para string
        /*  localStorage.setItem('minhaCategoria', JSON.stringify(objTest)) */

        //Aqui a conversão é o contrario para pegar o dado do storage
        /*   const obj = JSON.parse(localStorage.getItem('minhaCategoria') || '{}')
          console.log(obj.name) */

        productService.findAll()
            .then(response => {
                setProduct(response.data.content)
            }).catch(
                error => {
                    console.error(error)
                })
    }, [])



    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        {
                            product
                                .map(
                                    product =>
                                        <CatalogCard
                                            key={product.id}
                                            product={product} />
                                )
                        }
                    </div>
                    <ButtonNextPage text='Carregar mais' />
                </section>
            </main>
        </>
    )
}
