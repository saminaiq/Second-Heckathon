
export default function Dress() {
    return (
        <div className="w-full h-[500px] bg-[#efefef] p-6">
            {/* اوپری سیکشن */}
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800">BROWSE BY DRESS STYLE</h1>
            </div>
            
            {/* نیچے والا سیکشن */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 shadow-md rounded-lg text-center">
                    <img src="/image 12.png" alt="Casual Dress" className="w-full h-40 object-cover rounded-md" />
                    <p className="mt-2 font-semibold">Casual</p>
                </div>
                <div className="bg-white p-4 shadow-md rounded-lg text-center">
                    <img src="/image 11 (1).png" alt="Formal Dress" className="w-full h-40 object-cover rounded-md" />
                    <p className="mt-2 font-semibold">Formal</p>
                </div>
                <div className="bg-white p-4 shadow-md rounded-lg text-center">
                    <img src="/Frame 38.png" alt="Party Dress" className="w-full h-40 object-cover rounded-md" />
                    <p className="mt-2 font-semibold">Party</p>
                </div>
                <div className="bg-white p-4 shadow-md rounded-lg text-center">
                    <img src="/image 7 (2).png" alt="Traditional Dress" className="w-full h-40 object-cover rounded-md" />
                    <p className="mt-2 font-semibold">Traditional</p>
                </div>
            </div>
        </div>
    );
}
