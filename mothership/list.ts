export interface GenericListElement {
  id: number
  done: boolean
  owner: string
  date: string
  description: string
}

export interface DetailedListElement extends GenericListElement {
  expiry_date?: string
  needs_help?: boolean
  external?: boolean
  expired?: boolean
}