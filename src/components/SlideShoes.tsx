interface Shoe {
    marginLeft: string;
    bgColor: string;
    shoeName: string;
    img: string;
}

function SlideShoes({ currentShoe, shoes }: { currentShoe: number; shoes: Shoe[] }) {
  return (
    <div
      className={`flex absolute left-0 top-0 w-[300%] h-full [&>div>img]:max-w-[400px] [&>div]:w-1/3 [&>div]:relative [&>div>img]:absolute [&>div>img]:w-full [&>div>img]:left-1/2 [&>div>img]:-translate-x-1/2 [&>div>img]:top-1/2 [&>div>img]:-translate-y-1/2 slider transition-[margin-left_0.5s_ease-in-out] duration-500 ${shoes[currentShoe].marginLeft}`}
    >
      {shoes.map((shoe, index) => (
        <div
          key={index}
          className={`slide-shoe ${
            currentShoe === index ? "animate-shoeMovement" : ""
          }`}
        >
          <img src={shoe.img} alt={shoe.shoeName} />
        </div>
      ))}
    </div>
  );
}

export default SlideShoes;
