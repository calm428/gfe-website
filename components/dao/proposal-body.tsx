"use client"

import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Tab,
  Tabs,
} from "@nextui-org/react"

export default function ProposalBody({
  description,
  summary,
  code,
}: {
  description: string
  summary: string
  code: string
}) {
  return (
    <Card className="w-full border" shadow="none" radius="sm">
      <CardHeader className="flex w-full items-start gap-2">
        <p className="text-lg">Proposal</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <Tabs variant="underlined" color="default" aria-label="Tabs variants">
          <Tab key="description" title="Description">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Tab>
          <Tab key="summary" title="Summary">
            <div>{summary}</div>
          </Tab>
          <Tab key="executable_code" title="Executable code">
            <div>{code}</div>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  )
}
