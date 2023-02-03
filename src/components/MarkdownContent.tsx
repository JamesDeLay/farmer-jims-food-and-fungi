import { getCompanyAbout } from "@/lib/api"
import { CompanyAbout } from "@/lib/types"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm"

interface AboutProps {
    content: string
}

export default function MarkdownContent({ content }: AboutProps) {
    return (
        <ReactMarkdown className="prose md:prose-xl max-w-none text-dark" remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    )
}
