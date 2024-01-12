"use client"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const FormSection = () => {
  return (
    <div className="mb-32 mt-16 w-full rounded-xl bg-[#E7F0FD] p-5">
      <h1 className="text-center font-monument text-3xl leading-relaxed tracking-wide text-primary">
        Fill in the form and get a personal offer from our consultant
      </h1>

      <div className="mt-10 flex w-full flex-col gap-5 sm:flex-row">
        <div className="w-full">
          <Label>First Name</Label>
          <Input placeholder="Name"></Input>
        </div>

        <div className="w-full">
          <Label>Last Name</Label>
          <Input placeholder="Name"></Input>
        </div>
      </div>

      <div className="mt-5 flex w-full flex-col gap-5 sm:flex-row">
        <div className="w-full">
          <Label>Email</Label>
          <Input placeholder="Email" type="email"></Input>
        </div>

        <div className="w-full">
          <Label>Phone Number</Label>
          <Input placeholder="Phone" type="number"></Input>
        </div>
      </div>

      <div className="mx-auto mt-10 w-fit">
        <Button
          className="font-monument tracking-wider"
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

export default FormSection
