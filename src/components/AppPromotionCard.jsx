import Image from "next/image";
import React from "react";
import { BsApple, BsStarFill, BsTicketPerforatedFill } from "react-icons/bs";
import { FaTruck, FaGooglePlay } from "react-icons/fa";

const AppPromotionCard = () => {
  return (
    <div className="flex sm:flex-col flex-wrap justify-center flex-row p-1 sm:gap-0 gap-3 bg-white rounded-md ">
      <div className="flex flex-col  bg-white rounded-md ">
        <div className="flex flex-row items-center justify-start ">
          <div className="flex items-center justify-center p-2 bg-white rounded-md">
            <Image width={30} height={30} alt="logo" src={"/squarelogo.jpg"} />
          </div>
          <p className="text-green-950 font-semibold text-sm">TRY HAZANA APP</p>
        </div>
        <div className=" flex flex-col gap-1 py-2 px-3 text-white w-max sm:w-[223px] h-auto bg-no-repeat" style={{ backgroundImage: `url(foldervector.png)`, backgroundSize: 'cover', }}>
          <p className="flex flex-row items-center justify-start w-full text-sm text-bold">
            <BsStarFill /> 4.8 Rated </p>
          <p className="text-sm font-bold">
            Get the Hazana app to enjoy
          </p>
          <div className="flex flex-col mx-auto w-fit py-3">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="flex items-center justify-center bg-white rounded-lg p-2 ">

                <FaTruck className="w-5 h-5 text-cyan-500" />
              </div>
              <div className="text-sm font-bold">
                <p >FREE</p>
                <p >SHIPPING</p></div>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="flex items-center justify-center bg-white rounded-lg p-2">
                <BsTicketPerforatedFill className="w-5 h-5 text-pink-500" />
              </div>
              <div className="text-sm font-bold">
                <p>EXCLUSIVE</p>
                <p>VOUCHERS</p>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="flex flex-col min-w-[205px] sm:w-auto bg-white rounded-md sm:justify-start justify-center ">
        <div className="flex flex-row flex-wrap items-center sm:justify-start justify-center">
          <Image src="/qr.png" width={90} height={90} alt="qr" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-1 border border-gray-400 rounded-md px-1 py-1">
              <BsApple className="w-4 h-4" />
              <p className="text-xs">App Store</p>
            </div>
            <div className="flex flex-row items-center gap-1 border border-gray-400 rounded-md px-1 py-1">
              <FaGooglePlay className="w-4 h-4" />
              <p className="text-xs">Google Play</p>
            </div>

          </div>
        </div>
        <p className="text-xs text-gray-800 pb-1 px-2 w-fit">
          Download the app now by scanning <br /> the QR code
        </p>
      </div>
    </div>
  );
};

export default AppPromotionCard;
