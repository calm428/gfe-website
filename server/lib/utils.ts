import { IHeading } from "@/types"
import { JSDOM } from "jsdom"
import { nanoid } from "nanoid"
import slugify from "slugify"

const generateSlugWithShortHash = (title: string) => {
  const shortHash = nanoid(5) // Generates a short random ID
  return `${slugify(title, { lower: true })}-${shortHash}`
}

const processHeadingsInHtml = (
  htmlString: string
): { modifiedHtml: string; headings: IHeading[] } => {
  const dom = new JSDOM(htmlString)
  const document = dom.window.document

  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
  const extractedHeadings: IHeading[] = []

  headings.forEach((heading, index) => {
    // Generate an ID for the current heading
    const headingId = `heading-${index}`
    heading.id = headingId // Assign ID directly to the element

    // Push information to the extractedHeadings array
    extractedHeadings.push({
      id: headingId,
      text: heading.textContent || "",
      tagName: heading.tagName.toLowerCase(), // tagName is uppercase in HTML
    })
  })

  const modifiedHtml = dom.serialize() // Serialize the modified document back to a string
  return { modifiedHtml, headings: extractedHeadings }
}

export { generateSlugWithShortHash, processHeadingsInHtml }
