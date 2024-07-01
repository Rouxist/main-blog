'use client'
import { MoreStories } from '@/app/_components_post/post-list'

import { useSearchParams } from 'next/navigation'

export default function QuriedPostList() {
  const searchParams = useSearchParams()
  const result = searchParams.get('category')
  // if (result) {
  //   var currentCategory = result
  // } else {
  //   var currentCategory = ''
  // }
  // const queriedPosts = getHi()

  return (
    <div>
      {/* {queriedPosts.length > 0 && (
        <MoreStories title="All posts" posts={queriedPosts} />
      )} */}
    </div>
  )
}
