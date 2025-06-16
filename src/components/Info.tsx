
const Info = () => {
    return (
        <div>
            <div className='min-h-screen w-full'>
                <div className=' flex item-start justify-center font-pp'>
                    <div className='flex items-start md:flex-row flex-col justify-between gap-[3rem] md:gap-[16rem] 2xl:gap-[28rem]'>
                        <div className=' flex  items-center  font-bold gap-[0.4rem] 2xl:text-[2rem] lg:mr-0 '>
                            <span>01</span>
                            <div className='h-[0.2rem] w-[2rem]  bg-black relative' />
                            <span>WHAT WE DO</span>
                        </div>
                        <div className='flex flex-col gap-[7rem] max-w-[20rem] 2xl:max-w-[50rem]'>
                            <h1 className='font-semibold font-ppmedium text-[1.3rem] lg:text-[1.6rem] 2xl:text-[3.6rem]'>
                                We aim to elevate digital production in
                                the advertising space,
                                bringing your ideas to life.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
