import Header from '@/components/header/header'
import OverlappingImgs from '@/components/overlapping-images/OverlappingImgs';
import CustomProgress from '@/components/progress-bar/ProgressBar';
import { IoShareSocialOutline, IoFlag } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import { FaRegCircle } from "react-icons/fa";

export default function Dashboard() {
    const overlappingImgsData = [
        {
            src: "/assets/dashboard/overview-section/1.png",
        },
        {
            src: "/assets/dashboard/overview-section/2.png",
        },
        {
            src: "/assets/dashboard/overview-section/3.png",
        },
        {
            src: "/assets/dashboard/overview-section/4.png",
        },
        {
            src: "/assets/dashboard/overview-section/5.png",
        },
    ];

    const cardsImgs = [
        {
            src: "/assets/dashboard/overview-section/1.png",
        },
        {
            src: "/assets/dashboard/overview-section/2.png",
        },
        {
            src: "/assets/dashboard/overview-section/3.png",
        },
        {
            src: "/assets/dashboard/cards/img.png",
        },
    ]

    return (
        <div className='px-10'>
            <Header />

            <main className='space-y-4'>
                {/* Overview First Container */}
                <div className='bg-[#F4F6F980] w-full rounded-lg min-h-11 flex items-center justify-between py-6 px-4 border border-solid border-black/20 '>

                    {/* Left child Container */}
                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-12'>
                        <div className='space-y-2'>
                            <h3 className='text-sm text-black/50 uppercase'>
                                Name
                            </h3>
                            <h2 className='font-semibold text-xl'>Website Design</h2>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-sm text-black/50 uppercase'>
                                Budget
                            </h3>
                            <h2 className='font-semibold text-xl'>$45000</h2>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-sm text-black/50 uppercase'>
                                Status
                            </h3>
                            <h2 className='font-semibold text-xl'>Inprogress</h2>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-sm text-black/50 uppercase'>
                                team on project
                            </h3>
                            <OverlappingImgs imgs={overlappingImgsData} />
                        </div>

                        <div className='space-y-3'>
                            <h3 className='text-sm text-black/90 uppercase'>
                                Completion Rate
                            </h3>
                            <CustomProgress />
                        </div>
                    </div>

                    {/* Right child container/Share BTN with icon */}
                    <div className=''>
                        <div className='bg-[#10898F] p-2 rounded-md text-white flex items-center gap-2'>
                            <IoShareSocialOutline className='text-xl' />
                            <button className='font-semibold'>Share</button>
                        </div>
                    </div>
                </div>

                {/* Tabs with Sections */}
                <div className='bg-[#F4F6F980] w-full rounded-lg min-h-11 py-6 px-4 border border-solid border-black/20 space-y-5 pb-20'>
                    {/* Main Tab Navigation  */}
                    <div className='flex justify-between items-center'>
                        {/* left Tabs */}
                        <div className='flex flex-wrap lg:flex-nowrap items-center gap-5'>
                            <h2 className='tabs-style'>Overview</h2>
                            <h2 className='tabs-style bg-[#C72C88] text-white'>Onboard</h2>
                            <h2 className='tabs-style'>Milestones</h2>
                            <h2 className='tabs-style'>Deliverable</h2>
                            <h2 className='tabs-style'>Calendar</h2>
                            <h2 className='tabs-style'>Discussion</h2>
                        </div>

                        {/* Right Buttons */}
                        <div className='flex flex-col md:flex-row items-center gap-2'>
                            <button className='px-3 py-1.5 border border-solid border-[#C72C88] text-[#C72C88] font-semibold rounded-md'>Add cards</button>
                            <div className='flex items-center gap-1 px-3 py-1.5 border border-solid border-[#10898F] text-[#10898F] font-semibold rounded-md'>
                                <FaPlus />
                                <button >Create Task</button>
                            </div>
                        </div>
                    </div>

                    <hr className='w-full h-px bg-black/10' />

                    {/* Grid Columns with Cards */}
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2'>
                        {/* Todo Column */}
                        <div className='space-y-2 border border-solid border-black/10 bg-white p-2.5 rounded-lg h-fit'>
                            <div className='flex gap-2 items-center justify-start w-full bg-[#F6F6F6] p-2 rounded-lg'>
                                <img src="/assets/dashboard/cards/todo.png" alt="" />
                                <h2>To Do</h2>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#C72C2F1A] text-[#C72C2F] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Urgent</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UX Researcher</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#3A98EB1A] text-[#3A98EB] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Medium</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UI Design</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#C72C2F1A] text-[#C72C2F] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Urgent</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UX Researcher</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* In Progress */}
                        <div className='space-y-2 border border-solid border-black/10 bg-white p-2.5 rounded-lg h-fit'>
                            <div className='flex gap-2 items-center justify-start w-full bg-[#3A98EB1A] text-[#3A98EB] p-2 rounded-lg'>
                                <img src="/assets/dashboard/cards/progress.png" alt="" />
                                <h2>In Progress</h2>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#C72C2F1A] text-[#C72C2F] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Urgent</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UX Researcher</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#3A98EB1A] text-[#3A98EB] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Medium</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UI Design</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#C72C2F1A] text-[#C72C2F] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Urgent</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UX Researcher</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Review */}
                        <div className='space-y-2 border border-solid border-black/10 bg-white p-2.5 rounded-lg h-fit'>
                            <div className='flex gap-2 items-center justify-start w-full bg-[#F1A02E1A] text-[#F1A02E] p-2 rounded-lg'>
                                <img src="/assets/dashboard/cards/review.png" alt="" />
                                <h2>Review</h2>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#C72C2F1A] text-[#C72C2F] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Urgent</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UX Researcher</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#3A98EB1A] text-[#3A98EB] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Medium</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UI Design</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* completed */}
                        <div className='space-y-2 border border-solid border-black/10 bg-white p-2.5 rounded-lg h-fit'>
                            <div className='flex gap-2 items-center justify-start w-full bg-[#20BB701A] text-[#20BB70] p-2 rounded-lg'>
                                <img src="/assets/dashboard/cards/completed.png" alt="" />
                                <h2>Completed</h2>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#C72C2F1A] text-[#C72C2F] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Urgent</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UX Researcher</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* archive */}
                        <div className='space-y-2 border border-solid border-black/10 bg-white p-2.5 rounded-lg h-fit'>
                            <div className='flex gap-2 items-center justify-start w-full bg-[#F6F6F6] text-[#5D5D5D] p-2 rounded-lg'>
                                <img src="/assets/dashboard/cards/archive.png" alt="" />
                                <h2>Archive</h2>
                            </div>

                            {/* Card */}
                            <div className='py-3 px-3 rounded-lg border border-solid border-black/10 min-h-12 space-y-3 custom-shadow'>
                                <div className='flex items-center justify-between'>
                                    <div className='bg-[#C72C2F1A] text-[#C72C2F] flex items-center gap-1 py-1.5 px-2 rounded-md'>
                                        <IoFlag className='text-lg' />
                                        <h2 className='text-sm'>Urgent</h2>
                                    </div>
                                    <div>
                                        <HiOutlineDotsHorizontal className='text-xl' />
                                    </div>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='text-lg font-semibold'>UX Researcher</h2>
                                    <div className='flex items-center gap-2'>
                                        <img src="/assets/dashboard/cards/arrow.png" alt="" />
                                        <h2 className=''>
                                            School Website
                                        </h2>
                                    </div>
                                </div>

                                <hr className='w-full h-px bg-black/10' />

                                <div className='flex flex-col 2xl:flex-row items-start 2xl:items-center gap-2 justify-between'>
                                    {/* overlappping Imgs */}
                                    <OverlappingImgs type='without-hover' imgs={cardsImgs} />

                                    <div className='flex items-center gap-2'>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/chat.png" alt="" />
                                            <h4 className='text-sm'>5</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <img src="/assets/dashboard/cards/calendar.png" alt="" />
                                            <h4 className='text-sm'>5 Oct</h4>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <FaRegCircle className='text-black/20' />
                                            </div>
                                            <h4 className='text-sm'>0%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
