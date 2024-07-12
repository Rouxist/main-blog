type Props = {
  tags: string[]
}

export function Tags({ tags }: Props) {
  if (typeof tags == 'object') {
    return (
      <div>
        {tags.map((tag) => (
          <span
            className="py-1 px-2 min-w-10 mr-2 mb-1 md:text-md text-sm font-mono bg-gray-50 border-2 border-gray-300 rounded-md w-fit whitespace-nowrap inline-block"
            key={'tag_' + tag}
          >
            {tag}
          </span>
        ))}
      </div>
    )
  }
}
