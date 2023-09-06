import React, { useState } from "react"
import { PRODUCTS } from '../../products'
import { BsSearch } from 'react-icons/bs';
import { Product } from './product'
import './searchShop.css';


export const Search = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setProducts(null); }
        const filterBySearch = PRODUCTS.filter((item) => {
            if (item
                .productName
                .toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        }
        )
        setProducts(filterBySearch);













    }
    // const mystyle = {
    //     marginLeft: "600px",
    //     marginTop: "20px",
    //     fontWeight: "700"
    // };

    return (
        <div className="container">
            <div className="searchbar">
                <input onChange={e => setSearchVal(e.target.value)} placeholder="Search Products" name="product-search" id="product-search">
                </input>
                <BsSearch id="searchid" onClick={handleSearchClick} className="bssearch" />
            </div>



            <div className="products">
                {products.map((product) => (searchVal != "" ?
                    <Product data={product} /> : ""
                ))}

            </div>



        </div>
    )
}