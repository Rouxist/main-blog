'use client'
import { useState } from 'react'
import { Post } from '@/interfaces/posts'
import { CategoryTree } from '@/interfaces/categoryTree'
import { MoreStories } from './post-list'
import CategoryTreeComponent from './category-tree'
import { PostPreview } from './post-preview'
import Link from 'next/link'

type Props = {
  allPosts: Post[]
  categoryTree: CategoryTree
}

export function PostArea({ allPosts, categoryTree }: Props) {
  const [posts, setPosts] = useState<Post[]>(allPosts)
  const [selectedCategory, setSelectedCategory] = useState('')
  const updatePosts = (category: string) => {
    if (category.length == 0) {
      setPosts(allPosts)
    } else {
      setPosts(
        allPosts.filter((post: Post) => post.categories.includes(category)),
      )
    }
  }

  return (
    <div className="flex flex-row pt-4">
      <div className="w-[25vw]"></div>

      {posts.length > 0 && <MoreStories title="All posts" posts={posts} />}

      <div className="flex justify-center w-[25vw] pt-2 px-16">
        <CategoryTreeComponent
          tree={categoryTree}
          level={0}
          path=""
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          updatePosts={updatePosts}
        />
      </div>
    </div>
  )
}
