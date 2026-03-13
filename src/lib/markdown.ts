import { remark } from "remark"
import html from "remark-html"

export async function renderMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content)
  let rendered = result.toString()
  // Remove the first <h1> from rendered markdown to avoid duplicate H1
  // (the page template already renders the title as H1)
  rendered = rendered.replace(/<h1[^>]*>.*?<\/h1>/, '')
  return rendered
}
