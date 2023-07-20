import { useEffect, useState } from "react"
import axios from "axios"

import Header from "../components/Header"
import Product from "../components/Product"
import Slider from "../components/Slider"
import Footer from "../components/Footer"

export default function Home () {

    const [dataProduct, setDataProduct] = useState ([])
    const [search, setSearch] = useState ('')

    const getData = (searchProduct) => {
        axios.get(`https://64b93cf379b7c9def6c0caf2.mockapi.io/productname`,  {
            params: {
                search: searchProduct
            }
        }).then ((res) => {
            const { data } = res
            setDataProduct(data) 
        })
    }
    useEffect(() => {
        getData()
    }, [])

    
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
    useEffect(() => {
        const debounceSearch = setTimeout (() => {
            if (search) {
                getData(search)
            }
        }, 2000)
        
        return () => clearTimeout (debounceSearch)
        
    }, [search])

    return (
        <>
            <div className="mb-12">
                <Header />
                </div>
            <div className="my-10 px-4"><Slider /></div>
            <div className=" flex border rounded justify-center">
                <input type="search" id="default-search" placeholder="search product..." className="w- h-8 px-4 py-1 mr-5" value={search} onChange={onChangeSearch}/>
                <img src="https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png" className=" w-7 h-7 p-1"/>
            </div>
            <div className="grid grid-cols-4 gap-2 px-4">
                {dataProduct.map((item) => (
                    <Product data={item}/>
                ))}
                
            </div>
            
            <Footer />
            
        </>
    )
}
