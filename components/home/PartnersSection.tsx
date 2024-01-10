import Image from 'next/image';
import React from 'react';

function PartnersSection() {
    return (
        <div className=' px-5 lg:px-24 py-[100px] lg:flex items-center gap-6 bg-muted'>
            <h1 className='font-monument text-3xl capitalize text-center mb-4 lg:mb-0 text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]'>Partners</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-5 flex-1 gap-3'>
                {/* company logos */}
                <div className='py-5 rounded-md px-8 flex items-center justify-center bg-background '>
                    <Image src={"/logos/logo1.svg"} width={80} height={50} alt='company'/>
                </div>
                <div className='py-5 rounded-md px-8 flex items-center justify-center bg-background'>
                    <Image src={"/logos/logo2.svg"} width={80} height={50} alt='company'/>
                </div>
                <div className='py-5 rounded-md px-8 flex items-center justify-center bg-background'>
                    <Image src={"/logos/logo3.svg"} width={80} height={50} alt='company'/>
                </div>
                <div className='py-5 rounded-md px-8 flex items-center justify-center bg-background'>
                    <Image src={"/logos/logo4.svg"} width={80} height={50} alt='company'/>
                </div>
                <div className='py-5 rounded-md px-8 flex items-center justify-center bg-background'>
                    <Image src={"/logos/logo5.svg"} width={80} height={50} alt='company'/>
                </div>
            </div>
        </div>
    );
}

export default PartnersSection;