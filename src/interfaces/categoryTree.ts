type CategoryNode = {
  count: number
  subcategories: CategoryTree
}

export type CategoryTree = {
  [key: string]: CategoryNode
}
