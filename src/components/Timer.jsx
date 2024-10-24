"use client"
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
    const [time, setTime] = useState(initialTime); // initialTime is in seconds

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(timerInterval);
    }, []);

    // Function to format the time as HH:MM:SS
    const formatTime = (time) => {
        const hours = String(Math.floor(time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${hours} : ${minutes} : ${seconds}`;
    };

    return (
        <div className="flex items-center justify-center space-x-2">
            <p className="text-gray-700 text-sm">Ending in</p>
            <div className="flex items-center text-white text-[14px] font-semibold text-center">

                <span className="bg-[#d3232a] rounded-[2px]  h-[35px] leading-[35px] mx-[6px] my-[12px]  w-[40px]">
                    {formatTime(time).split(' : ')[0]}
                </span>
                <span className="text-lg text-black font-bold">:</span>


                <span className="bg-[#d3232a] rounded-[2px]  h-[35px] leading-[35px] mx-[6px] my-[12px]  w-[40px]">
                    {formatTime(time).split(' : ')[1]}
                </span>
                <span className="text-lg  text-black font-bold">:</span>


                <span className="bg-[#d3232a] rounded-[2px]  h-[35px] leading-[35px] mx-[6px] my-[12px]  w-[40px]">
                    {formatTime(time).split(' : ')[2]}
                </span>
            </div>
        </div>
    );
};

export default CountdownTimer;
