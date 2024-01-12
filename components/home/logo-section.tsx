const LogoSection = () => {
  return (
    <div
      className=" relative my-10 h-32"
      style={{
        background: "linear-gradient(300deg, #22B4FD 32.53%, #2D79FF 77.26%)",
      }}
    >
      <div className="absolute -left-2 -z-10 h-32 w-[110vw] rotate-[2.55deg] bg-primary" />
      <div className="contaner flex h-full items-center justify-between font-monument text-lg text-muted lg:text-3xl ">
        <div className="px-5 ">LOGO</div>
        <div className="px-5">LOGO</div>
        <div className="px-5">LOGO</div>
        <div className="px-5">LOGO</div>
      </div>
    </div>
  )
}

export default LogoSection
