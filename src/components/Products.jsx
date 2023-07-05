import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { popularProducts } from './../data';
import ProductItem from './ProductItem';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filter, sort}) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products")

                res && res.status === 200 && setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) => Object.entries(filter).every(([key, value]) => item[key].includes(value)))
        )
    }, [products, cat, filter])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => [prev].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sort === "asc") {
            setFilteredProducts((prev) => [prev].sort((a, b) => a.price - b.price))
        } else if (sort === "desc") {
            setFilteredProducts((prev) => [prev].sort((a, b) => b.price - a.price))
        }
    }, [sort])

    return (
        <Container>
            {cat ?  filteredProducts && filteredProducts.length > 0 && filteredProducts.map((item, index) => {
                return (
                    <ProductItem key={index} item={item} />
                )
            }) : (
                products && products.length > 0 && products.slice(0, 8).map((item, index) => {
                    return (
                        <ProductItem key={index} item={item} />
                    )
                    })
                )
            }
        </Container>
    );
};

export default Products;