import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

function Introduction() {
  return (
    <div className="w-full px-10 py-24 bg-[url('/images/bg-gradient.webp')] bg-cover bg-center bg-no-repeat auth">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 rounded-xl overflow-hidden">
        <div className="p-8 bg-primary/10">
          <div>
            <div className="text-5xl font-goldman text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
              Book a meeting
            </div>
            <p className="font-mont auth text-base lg:text-lg my-4">
              Interested in our services and willing to participate in our
              private sale? That’s why we are here! Book a meeting with our team
              to discuss in detail, how it works, the pricing. We will do our
              best to help.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 mt-4 mb-24">
              <Button
                className=" font-mont auth py-4 px-8 bg-gradient-to-l from-[#2BADFD] to-[#1570EF]"
                asChild
              >
                <Link
                  href={siteConfig.links.docs}
                  className="flex items-center gap-3"
                >
                  Book a meeting with CEO
                </Link>
              </Button>
              <Button
                className="auth py-4 px-8 bg-background border border-secondary-foreground hover:bg-muted"
                variant="outline"
                asChild
              >
                <Link
                  href={siteConfig.links.docs}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <Image
                    src="/images/contacts/calendly.svg"
                    width={24}
                    height={25}
                    alt="calendly"
                    className="w-6 h-6"
                  />
                  Calendly
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col auth gap-6">
            <div className="text-2xl font-mont font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
              Contact info
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="uppercase text-muted-foreground text-sm">
                      Email us
                    </div>
                    <div className="text-black text-md font-medium">
                      info@gfe.foundation
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="uppercase text-muted-foreground text-sm">
                      Phone number
                    </div>
                    <div className="text-black text-md font-medium">
                      0000000000000
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-black text-md font-medium">
                      83 McDonald Road, City of Edinburgh, Alba / Scotland, EH7
                      4NQ, United Kingdom
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center text-lg font-mont font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
                  <div className="w-6 h-[3px] bg-primary"></div>
                  connect with us:
                </div>
                <div className="flex gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Twitter className="w-6 h-6 text-primary" />
                  </div>
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 px-16 bg-secondary flex flex-col items-center justify-center">
          <div className="w-full flex flex-col auth gap-6">
            <div className="w-full flex gap-4">
              <div className="w-full">
                <div className="text-md font-mont text-muted-foreground">
                  Name
                </div>
                <Input type="text" placeholder="Fullname" />
              </div>
              <div className="w-full">
                <div className="text-md font-mont text-muted-foreground">
                  Email
                </div>
                <Input type="email" placeholder="Email address" />
              </div>
            </div>
            <div>
              <div className="text-md font-mont text-muted-foreground">
                Subject
              </div>
              <Input type="text" placeholder="Subject" />
            </div>
            <div>
              <div className="text-md font-mont text-muted-foreground">
                Message
              </div>
              <Textarea
                placeholder="Tell us about what you think..."
                rows={10}
              />
            </div>
          </div>
          <Button className="w-full font-mont auth py-4 px-8 bg-gradient-to-l from-[#2BADFD] to-[#1570EF] mt-6">
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Introduction
