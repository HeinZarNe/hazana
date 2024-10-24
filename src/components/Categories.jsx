import React from 'react'
import Category from './Category'

const Categories = () => {
    return (
        <div className="w-full px-1 lg:px-0">
            <p className='text-xl font-thin mb-3 w-full '>Categories</p>
            <div className="flex flex-row items-center justify-center flex-wrap w-full">
                {Array(14).fill("").map((_, i) => <Category key={i} />)}
            </div>

        </div>
    )
}

export default Categories