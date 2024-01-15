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
    <div className="auth w-full bg-[url('/images/bg-gradient.webp')] bg-cover bg-center bg-no-repeat px-10 py-24">
      <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-xl lg:grid-cols-2">
        <div className="bg-primary/10 p-8">
          <div>
            <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-goldman text-5xl text-transparent">
              Book a meeting
            </div>
            <p className="auth my-4 font-mont text-base lg:text-lg">
              Interested in our services and willing to participate in our
              private sale? That{"'"}s why we are here! Book a meeting with our
              team to discuss in detail, how it works, the pricing. We will do
              our best to help.
            </p>
            <div className="mb-24 mt-4 flex flex-col gap-4 md:flex-row lg:flex-col xl:flex-row">
              <Button
                className=" auth bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4 font-mont"
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
                className="auth border border-secondary-foreground bg-background px-8 py-4 hover:bg-muted"
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
                    className="h-6 w-6"
                  />
                  Calendly
                </Link>
              </Button>
            </div>
          </div>
          <div className="auth flex flex-col gap-6">
            <div className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-mont text-2xl font-bold text-transparent">
              Contact info
            </div>
            <div className="flex flex-col gap-2 md:flex-row lg:flex-col xl:flex-row">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm uppercase text-muted-foreground">
                      Email us
                    </div>
                    <div className="text-md font-medium text-black">
                      info@gfe.foundation
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm uppercase text-muted-foreground">
                      Phone number
                    </div>
                    <div className="text-md font-medium text-black">
                      0000000000000
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-md font-medium text-black">
                      83 McDonald Road, City of Edinburgh, Alba / Scotland, EH7
                      4NQ, United Kingdom
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text font-mont text-lg font-medium text-transparent">
                  <div className="h-[3px] w-6 bg-primary"></div>
                  connect with us:
                </div>
                <div className="flex gap-2">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Twitter className="h-6 w-6 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-secondary p-8 px-16">
          <div className="auth flex w-full flex-col gap-6">
            <div className="flex w-full gap-4">
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
          <Button className="auth mt-6 w-full bg-gradient-to-l from-[#2BADFD] to-[#1570EF] px-8 py-4 font-mont">
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Introduction
