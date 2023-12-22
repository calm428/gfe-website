"use client";

import React from 'react';
import Card from './Card';

const NewsSection = () => {
    return (
        <div className='container'>
            <h1 className='font-monument tracking-wider text-center mb-5 text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]'>News</h1>

            <div className='mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default NewsSection;