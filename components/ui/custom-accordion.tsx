import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    isOpen: boolean
  }
>(({ className, children, isOpen, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "px-5 data-[state=closed]:bg-[#E7F0FD] data-[state=open]:shadow-md",
      className
    )}
    {...props}
  >
    <h3
      className={`mr-4 bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pt-3 font-monument text-3xl text-transparent`}
    >
      {props.value}
    </h3>
    {children}
  </AccordionPrimitive.Item>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, onClick, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline ",
        "[&[data-state=closed]>#minus]:hidden ",
        "[&[data-state=open]>#plus]:hidden",
        "from-[#2BADFD] to-[#1570EF] bg-clip-text text-transparent data-[state=open]:bg-gradient-to-b",
        "data-[state=closed]:text-primary",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
      <span id="plus" className="rounded-full bg-white p-1.5 text-primary">
        <Plus className="size-4 shrink-0 transition-transform duration-200" />
      </span>

      <span id="minus" className="rounded-full bg-primary p-1.5 text-white">
        <Minus className="size-4 shrink-0 transition-transform duration-200" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="mr-9 overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
