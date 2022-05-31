import type { Markdown, MDX } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export type ArticleType = {
    _id: string
    _raw: Local.RawDocumentData
    type: 'Article'
    title: string
    publishedAt: string
    isPublished: string
    description: string
    image?: string | undefined
    tags?: string[] | undefined
    body: MDX
    readingTime: JSON
    wordCount: number
    slug: string
  }