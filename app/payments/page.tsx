import HeroSection from '@/components/payments/hero';
import OrderSection from '@/components/payments/order';
import React from 'react';

const page = () => {
    return (
        <div className='pb-40'>
            <HeroSection />
            <OrderSection />
        </div>
    );
};

export default page; 