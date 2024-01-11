import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props{
    icon: string,
    title: string,
    desc: string,
    link:string
}
function FeatureDiv({icon,title,desc,link}:Props) {
    return (
        <div className={` ${title === "Staking reward" ? " !text-muted bg-gradient-to-bl from-[#2BADFD] to-[#1570EF]":"bg-background"} p-6 auth shadow-lg rounded-md flex flex-col gap-8 justify-between`}>
            <div className='flex flex-col gap-3'>
                {/* icon */}
                <Image src={icon} width={50} height={50} alt={title}/>
                {/* title */}
                <h1 className=' font-semibold text-[18px]'>{title}</h1>
                <p className={`${title === "Staking reward" ? " text-muted ":" text-muted-foreground"} text-base font-normal`}>{desc}</p>
            </div>
            <div>
                <Link className={`${title === "Staking reward" ? "text-muted":"text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]"}  text-base font-semibold flex items-center gap-5`} href={link}>Read more <span><ArrowRightIcon className={`${
                title === "Staking reward"
                  ? "text-muted "
                  : "text-secondary-foreground"
              } w-[20px] h-[20px] `}/></span></Link>
            </div>
        </div>
    );
}

export default FeatureDiv;