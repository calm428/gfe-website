import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

function ContactUs() {
    return (
        <div className="py-[60px]">
      <div className="p-[60px] flex flex-col md:flex-row justify-between bg-muted rounded-xl">
        <div className="flex flex-col gap-2 lg:w-[60%]">
          <div className="text-3xl  font-monument  text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
            Contact us
          </div>
          <div className=" text-sm md:text-base  font-mont auth mb-5 md:mb-0 my-1">
          For further information, plz contact us by email at <span className='text-secondary-foreground'>info@gfe.foundation</span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 md:w-[30%]">
          <Button className="auth py-4 px-8 bg-gradient-to-l from-[#2BADFD] to-[#1570EF]">
            <Link
              href={siteConfig.links.docs}
              className="flex items-center gap-3"
            >
              Contact
            </Link>
          </Button>
          
        </div>
      </div>
    </div>
  );
}

export default ContactUs;