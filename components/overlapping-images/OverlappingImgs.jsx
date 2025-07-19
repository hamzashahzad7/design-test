import { cn } from "@/utils/helpers"


export default function OverlappingImgs({ imgs = [], className, type = "with-hover" }) {
    return (
        <div className={cn("w-fit flex", className)}>
            {type === 'with-hover' && imgs.map((item, index) => (
                <img
                    key={index}
                    src={item.src}
                    className={cn("w-9 object-contain rounded-full border-[1px] border-solid border-[#dedede] p-0 transition-all duration-300  hover:scale-110 hover:z-10 hover:m-0 shadow-none hover:shadow-xl shadow-black",
                        index > -1 && "-mr-3",
                        (index < 1) && "hidden md:block")}
                />
            ))}

            {type === 'without-hover' && imgs.map((item, index) => (
                <img
                    key={index}
                    src={item.src}
                    className={cn("w-7 object-contain rounded-full border-[1px] border-solid border-[#dedede] p-0 transition-all duration-300",
                        index > -1 && "-mr-3",
                        (index < 1) && "hidden md:block")}
                />
            ))}
        </div>
    )
}