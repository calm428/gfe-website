import { defineDocumentType, makeSource, type ComputedFields } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger"

const computedFields: ComputedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    headings: {
        type: "json",
        resolve: async (doc) => {
            const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
            const slugger = new GithubSlugger()
            const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
                ({ groups }: any) => {
                    const flag = groups?.flag;
                    const content = groups?.content;
                    return {
                        level: flag.length,
                        text: content,
                        slug: content ? slugger.slug(content) : undefined
                    };
                }
            );
            return headings;
        },
    }
}

export const Doc = defineDocumentType(() => ({
    name: "Doc",
    filePathPattern: `blog/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        published: {
            type: "boolean",
            default: true,
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Doc],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ]
        ]
    }
})