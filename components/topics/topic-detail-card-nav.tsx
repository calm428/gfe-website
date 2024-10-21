import { Button } from "@nextui-org/react"
import { useTranslations } from "next-intl"
import { BsReplyFill, BsSendFill } from "react-icons/bs"
import { CgPushUp } from "react-icons/cg"
import { MdCancelScheduleSend } from "react-icons/md"

import CancelSubmissionConfirmModal from "./cancel-submission-confirm-modal"
import SubmitTopicModal from "./submit-topic-modal"
import TopicPublishModal from "./topic-publish-modal"
import TopicReplyModal from "./topic-reply-modal"

const TopicDetailCardNav = ({ 
    session,
    topic,
    id, 
    summary
}: { 
    session: any,
    topic: any ,
    id: any,
    summary: any
}) => {
    const t = useTranslations("main.forum")
    if (!session) return null;

    return (
        <>
            {topic.author._id.toString() === (session?.user as any)?.id ? (
                topic.status === "DRAFT" ? (
                    <SubmitTopicModal topic={topic}>
                    <Button
                        color="primary"
                        variant="light"
                        startContent={<BsSendFill />}
                    >
                        {t("submit")}
                    </Button>
                    </SubmitTopicModal>
                ) : topic.status === "SUBMISSION" ? (
                    <CancelSubmissionConfirmModal id={topic._id}>
                    <Button
                        color="danger"
                        variant="light"
                        startContent={<MdCancelScheduleSend />}
                    >
                        {t("cancel")}
                    </Button>
                    </CancelSubmissionConfirmModal>
                ) : topic.status === "SUBMISSION_APPROVED" ? (
                    <TopicPublishModal
                    id={id}
                    data={JSON.stringify({
                        id,
                        title: topic.title,
                        summary: summary,
                    })}
                    >
                    <Button
                        color="primary"
                        variant="light"
                        startContent={<CgPushUp />}
                    >
                        {t("publish")}
                    </Button>
                    </TopicPublishModal>
                ) : topic.status === "SUBMISSION_CANCELED" ? (
                    <SubmitTopicModal topic={topic}>
                    <Button
                        color="primary"
                        variant="light"
                        startContent={<BsSendFill />}
                    >
                        {t("submit")}
                    </Button>
                    </SubmitTopicModal>
                ) : null
                ) : (
                <TopicReplyModal slug={topic?.slug}>
                    <Button
                    variant="light"
                    color="primary"
                    startContent={<BsReplyFill className="size-5" />}
                    >
                    {t("reply")}
                    </Button>
                </TopicReplyModal>
            )}
        </>
    )
}

export default TopicDetailCardNav