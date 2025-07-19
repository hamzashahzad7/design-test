import { FiArrowLeftCircle } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
export default function Header() {
  return (
    <header className="w-full space-y-5 py-5">
      <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between">
        {/* Left welcome with icon */}
        <div className="flex items-center gap-4 relative -left-3">
          {/* Icon */}
          <div>
            <FiArrowLeftCircle className="text-2xl" />
          </div>

          {/* heading */}
          <h2 className="text-3xl font-bold">
            Website Design
          </h2>
        </div>

        {/* right icons container  */}
        <div className="flex items-center gap-2">
          {/* input */}
          <div className="bg-[#F2F4F8] rounded-full p-3 flex items-center gap-5">
            <CiSearch className="text-xl" />
            <input type="text" placeholder="Search" className="outline-none placeholder:text-black/20" />
          </div>

          <div className="flex items-center gap-4 bg-[#F2F4F8] py-3 px-6 rounded-full">
            <img src="/assets/icons/header-right-notifications.png" alt="" />
            <img src="/assets/icons/header-right-messages.png" alt="" />
          </div>
        </div>
      </div>

      <hr className="w-[100%] mx-auto h-px bg-black/50" />
    </header>
  )
}
