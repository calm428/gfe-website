"use client";

import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const FormSection = () => {
    return (
        <div className='mb-32 mt-16 w-full bg-[#E7F0FD] p-5 rounded-xl'>
            <h1 className='text-center text-primary font-monument tracking-wide text-3xl leading-relaxed'>Fill in the form and get a personal offer from our consultant</h1>

            <div className='flex flex-col sm:flex-row w-full gap-5 mt-10'>
                <div className='w-full'>
                    <Label>First Name</Label>
                    <Input placeholder='Name'></Input>
                </div>

                <div className='w-full'>
                    <Label>Last Name</Label>
                    <Input placeholder='Name'></Input>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row w-full gap-5 mt-5'>
                <div className='w-full'>
                    <Label>Email</Label>
                    <Input placeholder='Email' type='email'></Input>
                </div>

                <div className='w-full'>
                    <Label>Phone Number</Label>
                    <Input placeholder='Phone' type='number'></Input>
                </div>
            </div>

            <div className='w-fit mx-auto mt-10'>
                <Button
                    className='font-monument tracking-wider'
                    style={{
                        background:
                            "linear-gradient(15deg, #22B4FD 32.53%, #2D79FF 77.26%)",
                    }}
                >
                    Contact
                </Button>
            </div>
        </div>
    )
}

export default FormSection;