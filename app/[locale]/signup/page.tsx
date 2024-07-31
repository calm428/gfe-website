import { SignUpCard } from "@/components/auth/signup-card"

export default function SignupPage() {
  return (
    <section className="flex size-full flex-col items-center lg:flex-row">
      <div
        className="flex h-0 max-h-screen w-full items-center justify-center bg-[center,center,top] bg-[url('/images/auth/auth-bg.png'),url('/images/auth/auth-layer-bg.png'),url('/images/bg-gradient.webp')] bg-no-repeat lg:h-screen lg:w-1/2 xl:w-[60%]"
        style={{
          backgroundSize: "contain, contain, cover",
          backgroundPosition: "center, center, 0 0",
        }}
      ></div>
      <div className="relative h-screen px-3 py-24 lg:w-1/2 xl:w-[40%]">
        <SignUpCard></SignUpCard>
      </div>
    </section>
  )
}
