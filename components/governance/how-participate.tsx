import Link from "next/link"
import { useTranslations } from "next-intl"
import { AiFillCode, AiFillMessage } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"
import { FaCirclePlus } from "react-icons/fa6"
import { GrStakeholder } from "react-icons/gr"

import SectionDescription from "../common/section-description"
import SectionTitle from "../common/section-title"
import { Button } from "../ui/button"

function GoverCard({
  title,
  content,
  further,
  link,
  external,
}: {
  title: string
  content: string
  further: string
  link: string
  external: boolean
}) {
  const t = useTranslations("main")

  return (
    <div className="mx-auto flex h-full max-w-[320px] flex-col justify-between rounded-lg p-4 shadow-md sm:max-w-[400px]">
      <div>
        <h3 className="bg-gradient-to-b from-[#2BADFD] to-[#1570EF] bg-clip-text pb-4 font-goldman text-2xl text-transparent">
          {t(title as any)}
        </h3>
        <p className="text-sm md:text-base">{t(content as any)}</p>
      </div>
      <Button
        className="mt-6 w-fit bg-gradient-to-l from-[#2BADFD] to-[#1570EF]"
        asChild
      >
        <Link href={link} target={external ? "_blank" : "_self"}>
          {t(further as any)}
        </Link>
      </Button>
    </div>
  )
}

const cardData = [
  {
    id: 1,
    title: "governance.documentation",
    content: "governance.documentation_description",
    further: "governance.read_more",
    link: "",
    external: false,
  },
  {
    id: 2,
    title: "governance.forum",
    content: "governance.forum_description",
    further: "governance.open_forum",
    link: "https://forum.gfe.foundation",
    external: true,
  },
  {
    id: 3,
    title: "governance.staking",
    content: "governance.staking_description",
    further: "governance.stake_now",
    link: "",
    external: false,
  },
]

export default function HowParticipateSection() {
  const t = useTranslations("main")

  return (
    <section className="container pt-12 md:pt-20">
      <div className="pb-10 md:pb-14">
        <SectionTitle>{t("governance.how_participate_gfe")}</SectionTitle>
        <SectionDescription>
          {t("governance.how_participate_gfe_description")}
        </SectionDescription>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="border-primary bg-white" asChild>
            <Link href="https://forum.gfe.foundation" target="_blank">
              <FaUsers className="mr-2 size-5 text-[#2BADFD]" />
              {t("governance.join_our_forum")}
            </Link>
          </Button>
          <Button variant="outline" className="border-primary bg-white">
            <GrStakeholder className="mr-2 size-5 text-[#2BADFD]" />
            {t("governance.stake_gfe")}
          </Button>
          <Button variant="outline" className="border-primary bg-white">
            <FaCirclePlus className="mr-2 size-5 text-[#2BADFD]" />
            {t("governance.propose_gfe")}
          </Button>
          <Button variant="outline" className="border-primary bg-white">
            <AiFillMessage className="mr-2 size-5 text-[#2BADFD]" />
            {t("governance.discuss_ongoing_proposals")}
          </Button>
          <Button variant="outline" className="border-primary bg-white">
            <AiFillCode className="mr-2 size-5 text-[#2BADFD]" />
            {t("governance.get_reward")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {cardData.map((card) => (
          <GoverCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}
