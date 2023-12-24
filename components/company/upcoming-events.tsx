import React from 'react';
import { Button } from '../ui/button';
import Card from '../blogs-and-news/Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UpcomingEventsSection = () => {
    return (
        <div>
            <div className='flex gap-5'>
                <div className="md:pb-14 pb-10">
                    <div className="text-xl text-primary font-monument mt-4">
                        UPCOMING EVENTS
                    </div>
                    <div className="text-md text-muted-foreground font-mont">
                        Stay tuned for our next exciting event, where innovation meets community! Join us
                        for an enriching experience filled with insights, networking opportunities,
                        and the latest developments in the world of cryptocurrency mining.
                    </div>
                </div>

                <Button
                    className='font-monument tracking-wider whitespace-nowrap'
                    style={{
                        background:
                            "linear-gradient(277deg, #22B4FD 32.53%, #2D79FF 77.26%)",
                    }}
                >
                    All Events
                </Button>
            </div>

            <div className='mt-8 grid gap-8 grid-cols-1 md:grid-cols-2'>
                <Card />
                <Card />
            </div>

            <div className='flex justify-between mt-16'>
                <div className='flex gap-3 items-center font-monument text-[#727C8F]'><ChevronLeft /><span className='pt-0.5'>Previous</span></div>
                <div className='flex gap-3 items-center font-monument text-[#727C8F]'><span className='pt-0.5'>Next</span><ChevronRight /></div>
            </div>
        </div>
    );
};

export default UpcomingEventsSection;