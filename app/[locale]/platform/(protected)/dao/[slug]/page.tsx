import { getProposal } from "@/server/lib/fetchers"

import ProposalBody from "@/components/dao/proposal-body"
import ProposalHeader from "@/components/dao/proposal-header"
import ProposalStatus from "@/components/dao/proposal-status"
import VoteStatistics from "@/components/dao/vote-statistics"

export default async function ProposalDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { proposal } = await getProposal(decodeURIComponent(params.slug))

  return (
    <div className="container mx-auto">
      <ProposalHeader
        proposalId={proposal.proposalId}
        title={proposal.topic.title}
        status={proposal.topic.status}
        user={proposal.topic.author}
        createdAt={proposal.publishedAt}
      />
      <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        <div className="lg:col-span-2 xl:col-span-3">
          <ProposalBody
            description={proposal.topic.content}
            summary={proposal.summary}
            code=""
          />
        </div>
        <div>
          <VoteStatistics
            vFor={proposal.votes.vFor}
            vAgainst={proposal.votes.vAgainst}
            vAbstain={proposal.votes.vAbstain}
          />
          <ProposalStatus
            draft={{
              timestamp: proposal.createdAt,
              user: {
                name: proposal.topic.author.name,
                avatar: proposal.topic.author.image,
              },
            }}
            published={{
              timestamp: proposal.publishedAt,
              user: {
                name: proposal.topic.author.name,
                avatar: proposal.topic.author.image,
              },
            }}
            votingStarted={
              [
                "ACTIVE",
                "CANCELED",
                "DEFEATED",
                "SUCCEEDED",
                "QUEUED",
                "EXPIRED",
                "EXECUTED",
              ].indexOf(proposal.topic.status) > -1
                ? {
                    timestamp: proposal?.voteStartDate || new Date(),
                  }
                : undefined
            }
            votingEnded={
              [
                "CANCELED",
                "DEFEATED",
                "SUCCEEDED",
                "QUEUED",
                "EXPIRED",
                "EXECUTED",
              ].indexOf(proposal.topic.status) > -1
                ? {
                    timestamp: proposal?.voteEndDate || new Date(),
                  }
                : undefined
            }
            queue={
              ["QUEUED", "EXPIRED", "EXECUTED"].indexOf(proposal.topic.status) >
              -1
                ? {
                    timestamp: proposal?.queueDate || new Date(),
                  }
                : undefined
            }
            execute={
              ["EXPIRED", "EXECUTED"].indexOf(proposal.topic.status) > -1
                ? {
                    timestamp: proposal?.executeDate || new Date(),
                  }
                : undefined
            }
          />
        </div>
      </div>
    </div>
  )
}
