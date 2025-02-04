
// Import Fonts
import { Playfair_Display, Cinzel, Bodoni_Moda, Prata, Montserrat } from "next/font/google";

const Playfair_ = Playfair_Display({ subsets: ["latin"] });
const Cinze_ = Cinzel({ subsets: ["latin"] });
const Bodon_ = Bodoni_Moda({ subsets: ["latin"] });
const Prat_ = Prata({ subsets: ["latin"], weight: "400" });
const Montserrat_ = Montserrat({ subsets: ["latin"] });

export default function Fonts() {
  return (
    <div className="bg-black w-full h-[122px] flex justify-center md:justify-between items-center px-6">
      <h1 className={`${Playfair_.className} text-white text-2xl md:text-4xl`}>VERSACE</h1>
      <h1 className={`${Cinze_.className} text-white text-2xl md:text-4xl`}>ZARA</h1>
      <h1 className={`${Bodon_.className} text-white text-2xl md:text-4xl`}>GUCCI</h1>
      <h1 className={`${Prat_.className} text-white text-2xl md:text-4xl`}>PRADA</h1>
      <h1 className={`${Montserrat_.className} text-white text-2xl md:text-4xl`}>CALVIN KLEIN</h1>
    </div>
  );
}
