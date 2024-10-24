import { Carousel } from "flowbite-react";

export function HomeCarousel() {
  return (
    <div className="sm:w-[80%] w-full min-w-[280px] h-[350px]">
      <Carousel style={{ borderRadius: 0 }} >
        <img
          width={900}
          height={350}
          src="https://img.lazcdn.com/us/domino/b124a34e-0774-41e2-ab15-bc0fb8e02fb3_TH-1976-688.jpg_2200x2200q80.jpg"
          alt="..."
        />
        <img
          width={900}
          height={350}
          src="https://img.lazcdn.com/us/domino/709f3e37-045c-4e3d-8172-e6e12b78e01d_TH-1976-688.jpg_2200x2200q80.jpg"
          alt="..."
        />
        <img
          width={900}
          height={350}
          src="https://img.lazcdn.com/us/domino/b124a34e-0774-41e2-ab15-bc0fb8e02fb3_TH-1976-688.jpg_2200x2200q80.jpg"
          alt="..."
        />
        <img
          width={900}
          height={350}
          src="https://img.lazcdn.com/us/domino/709f3e37-045c-4e3d-8172-e6e12b78e01d_TH-1976-688.jpg_2200x2200q80.jpg"
          alt="..."
        />
        <img
          width={900}
          height={350}
          src="https://img.lazcdn.com/us/domino/b124a34e-0774-41e2-ab15-bc0fb8e02fb3_TH-1976-688.jpg_2200x2200q80.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
