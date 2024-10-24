"use client"
import React, { useEffect, useState } from 'react'
import CountdownTimer from './Timer'
import ProductCard from './ProductCard'
import SkeletonCard from './SkeletonCard'

const FlashSale = () => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=6');
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
        <div className="flex flex-col w-full px-1  lg:px-0">
            <p className='text-xl font-thin mb-3'>Flash Sale</p>
            <div className="flex flex-row items-center flex-wrap justify-between gap-1 px-5 py-1 bg-white w-full">
                <div className='flex flex-row items-center gap-x-3 sm:gap-20 flex-wrap'>
                    <p className="text-accent text-sm font-semibold min-w-fit">On Sale Now</p>
                    <CountdownTimer initialTime={3600} />
                </div>
                <button className="w-fit text-accent text-sm font-bold border border-accent p-2">
                    SHOW ALL PRODUCTS
                </button>
            </div>
            <hr className='border-gray-400' />
            <div className="flex flex-row items-center gap-1 overflow-x-auto bg-white py-2">
                {loading ? Array(6).fill("").map((_, i) => <SkeletonCard key={i} />) : (Array.isArray(data) && data?.map((card, i) => <ProductCard data={card} key={i} />))}
            </div>
        </div>
    )
}

export default FlashSale