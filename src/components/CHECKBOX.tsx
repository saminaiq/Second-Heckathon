


import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const checkboxColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-gray-500",
  "bg-black",
];

export default function CheckboxDemo() {
  const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>(
    new Array(checkboxColors.length).fill(false)
  );

  const toggleCheckbox = (index: number) => {
    setCheckedBoxes((prev) =>
      prev.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {checkboxColors.map((color, index) => (
        <label
          key={index}
          className={cn(
            "relative flex items-center justify-center w-16 h-16 rounded-full cursor-pointer transition-all duration-300",
            color,
            checkedBoxes[index] ? "border-4 border-white shadow-lg scale-110" : "opacity-80"
          )}
          onClick={() => toggleCheckbox(index)}
        >
          {checkedBoxes[index] && (
            <Check className="text-white w-8 h-8" strokeWidth={3} />
          )}
        </label>
      ))}
    </div>
  );
}
