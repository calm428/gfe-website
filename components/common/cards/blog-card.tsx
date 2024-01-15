"use client"

import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const Card = () => {
    return (
        <div className="">
            <AspectRatio ratio={16 / 9} className="">
                <Image
                    src="/images/blogs-and-news/highlights.png"
                    alt="Photo by Drew Beamer"
                    fill
                    className="rounded-3xl rounded-b-none object-cover"
                />
            </AspectRatio>

            <div className="space-y-3 rounded-3xl rounded-t-none bg-[#E7F0FD] p-5">
                <h1 className="font-goldman text-xl tracking-wider text-primary">
                    BSV Academy: Taking the lead on blockchain education
                </h1>
                <p className="font-medium text-muted-foreground">
                    Renewable energy uses natural resources like sunlight and wind for
                    sustainable power, reducing environmental impact and fostering energy
                    independence.
                </p>

                <div className="flex items-end justify-between">
                    <div className="flex gap-2">
                        <Avatar className="h-[50px] w-[50px]">
                            <AvatarImage src="/images/blogs-and-news/avatar.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col text-sm">
                            <span className="font-medium text-muted-foreground">
                                MICHAEL SPRICK
                            </span>
                            <span className="font-medium text-muted-foreground">
                                10 DEC 2023
                            </span>
                        </div>
                    </div>

                    <Button
                        variant={"ghost"}
                        className="mt-0 flex items-center p-0 font-goldman text-base tracking-wider text-primary"
                    >
                        Read More
                        <ArrowRightIcon className="ml-1 h-[20px] w-[20px] stroke-1" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Card
