type TTag = "Family" | "Friend" | "Colleague" | "Relative"

export interface IContacts {
  index: number
  firstName: string
  lastName: string
  phone: string
  mail?: string
  tag: TTag,
  fav: boolean
}
