import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

function Introduction() {
  return (
    <div className="px-24 py-24 bg-[url('/images/bg-gradient.webp')] auth">
      <div className="grid md:grid-cols-2">
        <div className="p-[50px]">
          <div>
            <h1 className=" text-[30px] text-transparent bg-clip-text bg-gradient-to-b from-[#2BADFD] to-[#1570EF]">
              Book a meeting
            </h1>
            <p className="font-mont auth text-base lg:text-lg">
              Interested in our services and willing to participate in our
              private sale? That’s why we are here! Book a meeting with our team
              to discuss in detail, how it works, the pricing. We will do our
              best to help.
            </p>
            <div className="flex gap-4">
              <Button className=" font-mont auth py-4 px-8 bg-gradient-to-l from-[#2BADFD] to-[#1570EF]">
                <Link
                  href={siteConfig.links.docs}
                  className="flex items-center gap-3"
                >
                  Book a meeting with CEO
                </Link>
              </Button>
              <Button className="auth py-4 px-8 bg-background border border-secondary-foreground hover:bg-muted">
                <Link
                  href={siteConfig.links.docs}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  Calendly
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex auth gap-6">
            <div className="flex flex-col gap-2">
              <h1>Contact info</h1>
              <div className="flex gap-4 items-center">
                <img src="/images/Icons.svg" alt="image" />
                <div>
                  <h1>Email us</h1>
                  <p>info@gfe.foundation</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img src="/images/Icons.svg" alt="image" />
                <div>
                  <h1>Phone number</h1>
                  <p>0000000000000</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img src="/images/Icons.svg" alt="image" />
                <div>
                  <h1>
                    83 McDonald Road, City of Edinburgh, Alba / Scotland, EH7
                    4NQ, United Kingdom
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-center">connect with us</h1>
              <div className="flex gap-2">
                <img src="images/fb.svg" alt="image" />
                <img src="images/ln.svg" alt="image" />
                <img src="images/x.svg" alt="image" />
                <img src="images/ig.svg" alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-[50px]">
          <div>
            <div className="flex gap-4">
              <div>
                <h2>Name</h2>
                <Input type="text" placeholder="Fullname" />
              </div>
              <div>
                <h2>Email</h2>
                <Input type="email" placeholder="Email address" />
              </div>
            </div>
            <div>
              <h2>Subject</h2>
              <Input type="text" placeholder="Subject" />
            </div>
            <div>
              <h2>Subject</h2>
              <Textarea
                placeholder="Tell us about what you think..."
              />
            </div>
          </div>
          <Button className=" font-mont auth py-4 px-8 bg-gradient-to-l from-[#2BADFD] to-[#1570EF]">
            <Link
              href={siteConfig.links.docs}
              className="flex items-center gap-3"
            >
              Book a meeting with CEO
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Introduction
