import React, {useState} from "react";
import {PRODUCTS} from '../../products'
import {Product} from './product'
import {Search} from './searchShop'
import "./shop.css"

export const Shop = ()=>{

  
    return (
        <div className="shop">
            <Search />

            <div className="shopTitle">
                <h1>TFT Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                <Product data={product} />
                ))}
            </div>
        </div>
    )
}