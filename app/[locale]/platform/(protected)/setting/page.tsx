import MainPanel from "@/components/setting/main-panel"
import NavLinks from "@/components/setting/nav-links"

export default function SettingPage() {
  return (
    <div>
      <div className="container mx-auto max-w-7xl">
        <h1 className="w-fit bg-gradient-to-t from-[#1A88F9] to-[#76c8ff] bg-clip-text text-3xl font-semibold text-transparent">
          Setting
        </h1>
        <div className="mt-4 flex w-full items-start gap-4">
          <NavLinks />
          <div className="w-full">
            <MainPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
