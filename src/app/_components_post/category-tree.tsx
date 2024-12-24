'use client'
import { CategoryTree } from '@/interfaces/categoryTree'

type CategoryTreeProps = {
  tree: CategoryTree
  level: number
  path: string
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  updatePosts: (category: string) => void
}

export default function CategoryTreeComponent({
  tree,
  level,
  path,
  selectedCategory,
  setSelectedCategory,
  updatePosts,
}: CategoryTreeProps) {
  const handleCategoryClick = (event: React.MouseEvent, category: string) => {
    event.stopPropagation()
    const fullPath = path ? `${path}/${category}` : category
    if (selectedCategory === fullPath) {
      setSelectedCategory('')
      updatePosts('')
    } else {
      setSelectedCategory(fullPath)
      updatePosts(category)
    }
  }

  const sortCategoryTree = (tree: CategoryTree): CategoryTree => {
    const sortedTree: CategoryTree = {}
    const sortedKeys = Object.keys(tree).sort()

    sortedKeys.forEach((key) => {
      sortedTree[key] = {
        ...tree[key],
        subcategories: sortCategoryTree(tree[key].subcategories),
      }
    })

    return sortedTree
  }

  const sortedTree = sortCategoryTree(tree)

  return (
    <ul className="list-none pl-0">
      {Object.keys(sortedTree).map((category) => {
        const fullPath = path ? `${path}/${category}` : category
        return (
          <li
            key={category}
            className={`ml-${level * 4} pl-2 my-1 cursor-pointer ${
              selectedCategory === fullPath ? 'text-veriperi' : 'text-black'
            }`}
            onClick={(event) => handleCategoryClick(event, category)}
          >
            {category} ({sortedTree[category].count})
            {Object.keys(sortedTree[category].subcategories).length > 0 && (
              <CategoryTreeComponent
                tree={sortedTree[category].subcategories}
                level={level + 1}
                path={fullPath}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                updatePosts={updatePosts}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}
