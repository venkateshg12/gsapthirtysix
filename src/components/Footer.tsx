import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='w-full min-h-[20rem] -mt-[10vh] 2xl:mt-[20rem] '>
                <div className='flex items-center flex-col md:flex-row justify-center gap-[3rem] md:gap-[20rem] mb-[2rem] md:mb-[7rem] font-pp'>
                    <div className='flex flex-col justify-center gap-[3rem]'>
                        <div className='flex gap-7 items-center 2xl:text-[2rem]'>
                            <span>Linkedin</span>
                            <span>Instagram</span>
                        </div>
                        <div className='max-w-[10rem] 2xl:text-[2rem] 2xl:max-w-[20rem]'>
                            <h1>All Rights Reserved
                                ©2025, Thirtysixstudio
                            </h1>
                        </div>
                    </div>
                    <div className='max-w-[14rem] 2xl:text-[2rem] text-center 2xl:max-w-[26rem]'>
                        <h5>
                            hello@thirtysixstudio.com
                            Amsterdam and worldwide
                        </h5>
                    </div>
                </div>
                <div className='flex items-center flex-col md:flex-row justify-center mb-[3rem] gap-[3rem] md:gap-[20rem]'>
                    <div className='max-w-[20rem] text-[.8rem] 2xl:text-[1.2rem] 2xl:max-w-[30rem   ]'>
                        Thirtysixstudio is registered with the Dutch Chamber of Commerce under registration number KVK 90310152.
                    </div>
                    <div className='font-ppmedium text-[3rem] mb-[3rem]'>
                        <h1>Thirtysixstudio</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
