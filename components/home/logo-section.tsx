import React from 'react';

const LogoSection = () => {
    return (
        <div className='w-full relative h-32 my-10'
            style={{
                background:
                    "linear-gradient(300deg, #22B4FD 32.53%, #2D79FF 77.26%)",
            }}
        >
            <div className='bg-primary h-32 rotate-[2.55deg] absolute w-[110vw] -left-2 -z-10' />
            <div className='container items-center h-full flex justify-between font-monument text-3xl text-muted'>
                <div className='px-5'>LOGO</div>
                <div className='px-5'>LOGO</div>
                <div className='px-5'>LOGO</div>
                <div className='px-5'>LOGO</div>
            </div>
        </div>
    );
};

export default LogoSection;