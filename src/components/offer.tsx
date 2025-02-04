

import { MdOutlineEmail } from "react-icons/md";

export default function Offers() {
  return (
    <main className="w-full flex justify-center items-center">
      <div className="w-[80%] h-[200px] bg-black text-white flex flex-col justify-center items-center p-4">
        <h1 className="text-center text-lg font-semibold">
          STAY UP TO DATE ABOUT OUR LATEST OFFER
        </h1>
        <div className="flex items-center mt-2 w-full">
          <MdOutlineEmail className="text-xl text-white ml-2" />
          <input
            placeholder="Search items ..."
            className="w-full ml-2 outline-none h-10 rounded-[62px] px-4 text-black"
          />
        </div>
        <div className="flex justify-center items-center w-[200px] h-[40px] rounded bg-[#0f0f0f] mt-3">
          <p className="text-white">Subscribe to Newsletter</p>
        </div>
      </div>
    </main>
  );
}
