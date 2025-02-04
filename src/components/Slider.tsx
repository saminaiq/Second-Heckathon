import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="p-5">
      <h1 className="font-bold">price</h1>
       <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[90%]", className)}
      {...props}
    />
     <div className="flex justyify- arounded items -start">
       <h1 className="font- bold">550</h1>
       <h1 className="font-bold">5100</h1>
     </div>
    </div>
    
        








  )
}
