import React from 'react'
import { BiDollar } from "react-icons/bi";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const getRateStar = (rating) => {
    if (!Number(rating?.rate)) {
        return <IoIosStar className="w-5 h-5 text-yellow-300" />;
    }
    const integer = Math.floor(rating?.rate);
    const decimal = rating.rate - integer;

    return (
        <div className="flex flex-row items-center">
            {Array(integer).fill("").map((_, i) => (
                <IoIosStar key={i} className="w-3 h-3 text-yellow-300" />
            ))}
            {decimal >= 0.5 && <IoIosStarHalf className="w-3 h-3 text-yellow-300" />}
            <span className="text-xs text-gray-500 ps-1">({rating.count})</span>
        </div>
    );
};
const ProductCard = ({ data }) => {
    return (
        <div className="py-2 flex flex-col hover:shadow-custom cursor-pointer gap-1 min-w-[188px] flex-1 sm:max-w-[200px] flex-1 bg-white   ">
            <img src={data?.image} alt="product image" className="h-[189px] mx-auto" width={188} />
            <div className="px-2 flex flex-col gap-1">
                <p className="h-[36px] truncate ...">{data?.title}</p>
                <p className="flex flex-row text-lg items-center text-accent ">
                    <BiDollar className="w-6 h-6" />{data?.price}
                </p>
                {getRateStar(data?.rating)}
            </div>
        </div>
    )
}

export default ProductCard