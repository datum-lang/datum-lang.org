interface Props {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className='markdown-posts'>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
