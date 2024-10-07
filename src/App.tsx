import { ArrowLeft, ArrowRight } from "./components/Icons";
import Header from "./components/Header";
import SlideShoes from "./components/SlideShoes";
import { useState } from "react";
const shoes = [
  {
    marginLeft: "ml-[0%]",
    bgColor: "bg-red-700",
    shoeName: "Jordan 1 red",
    img: "/src/assets/red-nike.png",
  },
  {
    marginLeft: "ml-[-100%]",
    bgColor: "bg-blue-700",
    shoeName: "Jordan 1 blue",
    img: "/src/assets/blue-nike.png",
  },
  {
    marginLeft: "ml-[-200%]",
    bgColor: "bg-green-700",
    shoeName: "Jordan 1 green",
    img: "/src/assets/green-nike.png",
  },
];

const shoesSizeOptions = [ 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5 ];

function App() {
  const [currentShoe, setCurrentShoe] = useState(0);

  const handleShowNextShoe = () => {
    if (currentShoe === shoes.length - 1) {
      setCurrentShoe(0);
    } else {
      setCurrentShoe((cu) => cu + 1);
    }
  };

  const handleShowPrevShoe = () => {
    if (currentShoe === 0) {
      setCurrentShoe(shoes.length - 1);
    } else {
      setCurrentShoe((cu) => cu - 1);
    }
  };

  const handleShowShoeColor = (index: number) => {
    setCurrentShoe(index);
  }

  return (
    <div>
      <main
        className={`h-screen overflow-hidden ${shoes[currentShoe].bgColor} font-tomorrow text-white relative uppercase transition-colors duration-500`}
      >
        <Header />

        <div className="absolute max-w-[550px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:[background:_radial-gradient(rgba(255,255,255,0.5)_0%,_transparent_70%)] after:w-[150%] after:aspect-square after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:rounded-full">
          <img className="relative z-10" src="/src/assets/nike.png" alt="" />
        </div>

        <SlideShoes currentShoe={currentShoe} shoes={shoes} />

        <section className="absolute bottom-4 left-8 grid gap-8">
          <div className="grid gap-8 visible-text animate-visible" key={currentShoe}>
            <h3 className="text-3xl shoe-name">{shoes[currentShoe].shoeName}</h3>
            <ul className="text-sm grid gap-1 [&>li]:grid [&>li]:gap-1">
              <li>
                <h5>Release Date</h5>
                <span>2016-10-06</span>
              </li>
              <li>
                <h5>Color way</h5>
                <span>Sail/starfish-black</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-2">
            <h4 className="font-semibold">Select size (us)</h4>
            <ul className="grid gap-2 grid-cols-5 [&>li>button]:w-12 [&>li>button]:aspect-square [&>li>button]:border [&>li>button]:border-white [&>li>button:hover]:bg-white [&>li>button:hover]:text-black [&>li>button]:transition-colors">
              {shoesSizeOptions.map((size, index) => (
                <li key={index}>
                  <button>{size}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-2">
            <h4 className="font-semibold">Select color</h4>
            <ul className="flex gap-3 [&>li>button]:w-12 [&>li>button]:aspect-square [&>li>button]:border [&>li>button]:border-black [&>li>button]:rounded-full [&>li>button:hover]:border-2 [&>li>button:hover]:border-white [&>li>button]:transition-all">
              {shoes.map((shoe, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleShowShoeColor(index)}
                    className={`btn-color ${shoe.bgColor} ${
                      currentShoe === index ? "border-2 border-white focus:border-white focus:border-2" : ""
                    }`}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="absolute bottom-4 right-8 max-w-[300px] normal-case grid gap-6">
          <p>
            The quality is excellent, packed reliably, and the color is a dream.
            The USS store is excellent. Thank you!!! We strive to earn and keep
            your trust.
          </p>
          <div className="[&>button]:w-12 [&>button]:aspect-square [&>button]:border [&>button]:rounded-full flex gap-4 text-2xl [&>button]:transition-colors [&>button:hover]:border-2 [&>button]:flex [&>button]:justify-center [&>button]:items-center">
            <button onClick={handleShowPrevShoe}>
              <ArrowLeft />
            </button>
            <button onClick={handleShowNextShoe}>
              <ArrowRight />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
