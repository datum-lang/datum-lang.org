import Highlight, {Prism} from "prism-react-renderer"
import light from "prism-react-renderer/themes/github"

(typeof global !== "undefined" ? global : (window as any)).Prism = Prism

require("prismjs/components/prism-rust")
require("prismjs/components/prism-toml")

interface Props {
    code: string
    language: string
}

const CodeBlock = ({code, language}: Props) => {
  return (
    <Highlight
      Prism={Prism}
      theme={light}
      code={code}
      language={language as any}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre
          className={
            className + " flex overflow-y-auto"
          }
          style={{...style}}
        >
          <code>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({line, key: i})
              lineProps.className += " text-xs"
              return line[0]?.empty && i === tokens.length - 1 ? null : (
                <div key={i} {...lineProps}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                  {line[0]?.empty ? "\n" : ""}
                </div>
              )
            })}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock