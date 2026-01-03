import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog/blog-post"
import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts.find(p => p.id === id)
  
  if (!post) {
    return {
      title: "Post Not Found | JuTech Blog",
    }
  }

  return {
    title: `${post.title} | JuTech Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <BlogPost post={post} />
      </div>
      <Footer />
    </main>
  )
}