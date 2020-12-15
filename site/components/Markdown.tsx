import React, { useEffect } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import marked from "marked"
import dompurify from "dompurify"
import CodeBlock from "./CodeBlock"


interface MarkdownProps {
    source: string;
    className?: string;
}

function Markdown(props: MarkdownProps): React.ReactElement | null {
  useEffect(() => {
    const id = setTimeout(() => {
      let { hash } = location
      hash = hash && hash.substring(1)
      if (!hash) return

      const el = document.getElementsByName(hash)[0]
      if (!el) return

      setTimeout(() => el.scrollIntoView(), 0)
    }, 50)
    return () => clearTimeout(id)
  }, [])


  try {
    const raw = marked(props.source, {
      gfm: true,
      headerIds: true,
      sanitizer: dompurify.sanitize,
      highlight: (code, language) =>
        renderToStaticMarkup(
          <CodeBlock
            code={code}
            language={language}
          />
        ),
    })
    return (
      <div
        dangerouslySetInnerHTML={{ __html: raw }}
        className={`markdown py-8 px-4 ${props.className ?? ""}`}
      />
    )
  } catch (err) {
    console.log(err)
    return null
  }
}

export default Markdown