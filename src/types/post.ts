export interface Post {
  id: string,
  author: string,
  title: string,
  post: string,
  tag: {
    title: string, 
    color: string
  },
  // createdAt: Date,
  // updatedAt: Date,
  cover: string,
  createdAt: {
    day: string,
    mounth: string,
    year: string,
  },
  updatedAt: {
    day: string,
    mounth: string,
    year: string,
  }
  trend_topics?: boolean
}