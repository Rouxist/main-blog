type Props = {
  tags: string[]
}

export function Tags({ tags }: Props) {
  if (typeof tags == 'object') {
    return (
      <div>
        {tags.map((tag) => (
          <span
            className="font-mono bg-gray-50 border-2 border-gray-300 rounded-md py-1 px-2 min-w-10 w-fit whitespace-nowrap mr-2 mb-1 inline-block"
            key={'tag_' + tag}
          >
            {tag}
          </span>
        ))}
      </div>
    )
  }
}
