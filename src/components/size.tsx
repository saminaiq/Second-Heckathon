
export default function Size() {
    return (
      <div>
        <h1 className="text-xl  font-bold pl-5 mt-3"> Size</h1>
        <div className="flex space-x-3 mt-2">
          <div className="w-[80px] h-[40px] flex justify-center items-center rounded-full bg-red-500">
            <span className="text-white">1</span>
          </div>
          <div className="w-[80px] h-[40px] flex justify-center items-center rounded-full bg-blue-500">
            <span className="text-white">2</span>
          </div>
          <div className="w-[80px] h-[40px] flex justify-center items-center rounded-full bg-green-500">
            <span className="text-white">3</span>
          </div>
          <div className="w-[80px] h-[40px] flex justify-center items-center rounded-full bg-yellow-500">
            <span className="text-white">4</span>
          </div>
        </div>
      </div>
    );
  }
  