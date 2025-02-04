import { AccordionDemo } from "@/components/accordion ";
import CheckboxDemo from "@/components/CHECKBOX";
import { Dressstyle } from "@/components/dress style";
import CasualShirts from "@/components/shirt";
import Size from "@/components/size";




import { SliderDemo } from "@/components/Slider";
import { Accordion } from "@/components/ui/accordion";




export default function Casual() {
  return (
    <main className="flex justify-center items-center">
      {/* بایاں حصہ */}
      <div className="w-[295px] h-[1200px] border rounded-[16px] p-4">
        <AccordionDemo/>
        <SliderDemo/>
        <CheckboxDemo/>
         <Size/>
         <Dressstyle/>
         <CasualShirts/>
      </div>
  

      {/* دایاں حصہ */}
      <div className="w-[900px] h-[1200px] bg-red-300">
        {/* یہاں مزید مواد شامل کریں */}
      </div>
    </main>
  );
}
