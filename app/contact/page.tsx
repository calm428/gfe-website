"use client";

import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import FaqSection from '@/components/contact/faq';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

const page = () => {
    return (
        <>
            <div className='container flex gap-10 mt-16'>
                <div className='w-full'>
                    <AspectRatio ratio={1} className="conta">
                        <Image
                            src="/images/contact/image.png"
                            alt="image"
                            fill
                            className="rounded-3xl object-cover"
                        />
                    </AspectRatio>
                </div>

                <div className='w-full'>
                    <h1 className='font-monument text-primary tracking-wider text-2xl'>Ready to add blockchain solutions to your business or government agency?</h1>

                    <p className='mt-5'>Send us a message and let us know about your needs.</p>

                    <div className='flex w-full gap-5 mt-10'>
                        <div className='w-full'>
                            <Label>First Name</Label>
                            <Input placeholder='Name'></Input>
                        </div>

                        <div className='w-full'>
                            <Label>Last Name</Label>
                            <Input placeholder='Name'></Input>
                        </div>
                    </div>

                    <div className='flex w-full gap-5 mt-5'>
                        <div className='w-full'>
                            <Label>Email</Label>
                            <Input placeholder='Email' type='email'></Input>
                        </div>

                        <div className='w-full'>
                            <Label>Phone Number</Label>
                            <Input placeholder='Phone' type='number'></Input>
                        </div>
                    </div>

                    <div className='w-full mt-5'>
                        <Label>Your Queries</Label>
                        <Textarea rows={7} placeholder="Query" />
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
            </div>
            
            <FaqSection />
        </>
    );
};

export default page;