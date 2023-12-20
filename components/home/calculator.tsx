"use client";

import React, { useState } from 'react'
import HistoricalPowerGraph from './HistoricalPowerGraph';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Slider } from "../ui/slider";
import { Button, buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';


function CalculatorSection() {
  const [amount, setAmount] = useState<number | null>(null);
  return (
    <div className='py-20'>
      <h1 className="text-center font-monument font-normal text-2xl text-primary pb-20 uppercase">Buy Our Energy & Save Per Machine</h1>

      <div className='w-full flex flex-col xl:flex-row gap-10'>
        <HistoricalPowerGraph />

        <div className='xl:w-1/2 w-full'>
          <h1 className='text-xl font-monument tracking-wider text-primary pt-10 pb-5'>Calculate</h1>

          <div className='flex items-start gap-3'>
            <div className='w-full'>
              <div className='w-full space-y-2'>
                <Label>Amount</Label>
                <div className='relative flex w-full h-full items-center'>
                  <Input type="number" placeholder='Enter amount' className={'w-full h-14 text-primary font-mont text-lg ' + `${(amount && amount > 0) && "font-bold text-lg"}`} value={amount || ""} onChange={(e) => setAmount(e.target.value as any)} />
                  {(amount && amount > 0) && <span className='absolute ml-3 font-mont text-primary font-bold text-lg'><span className='text-transparent mr-2'>{amount}</span>Kwh</span>}
                </div>
              </div>
              <Slider defaultValue={[33]} max={100} step={1} className='my-6' />
            </div>

            <div className='space-y-2'>
              <Label>Amount</Label>
              <span className='py-[13px] px-5 bg-[#D8FFB4] font-bold text-lg flex items-center justify-center font-mont text-[#479A0B]'>11%</span>
            </div>
          </div>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
            <div className='flex justify-between bg-accent p-4 rounded-md'>
              <span className='text-lg'>Bonus Energy</span>
              <span className='font-mont text-primary font-bold text-lg'>2720 Kwh</span>
            </div>

            <div className='flex justify-between bg-accent p-4 rounded-md'>
              <span className='text-lg'>Total Energy</span>
              <span className='font-mont text-primary font-bold text-lg'>2720 Kwh</span>
            </div>
          </div>

          <div className='flex justify-between bg-blue-100 p-4 rounded-md mt-5'>
            <span className='text-lg'>Price</span>
            <span className='font-mont text-primary font-bold text-lg'>$ 2720</span>
          </div>

          <Button className={cn(buttonVariants(), "font-monument tracking-widest pt-2.5 font-normal hidden md:block mt-10")} style={{
            background:
              "linear-gradient(75deg, #22B4FD 10%, #2D79FF 90%)",
          }}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;