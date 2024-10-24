"use client";


import { useState, useEffect } from "react";

import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";

const ProductCardsContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=18');
                const result = await response.json();
                setData(result);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="flex flex-row items-center justify-center flex-wrap gap-2">
            {loading ? Array(18).fill("").map((item, i) => <SkeletonCard key={i} />) : Array.isArray(data) && data.map((card, i) => (
                <ProductCard data={card} key={i} />
            ))}
        </div>
    );
};

export default ProductCardsContainer;
