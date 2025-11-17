import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Placeholder UI – backend endpoints for blogs can be added later
    setPosts([
      { title: 'How to prepare for IELTS Speaking', excerpt: 'Simple frameworks and daily practice routines to improve quickly.' },
      { title: 'PTE Time Management Tips', excerpt: 'Maximize your score with smart allocation and templates.' },
      { title: 'Choosing a Foreign Language', excerpt: 'German, French, Japanese or Spanish? What aligns with your goals.' },
    ])
  }, [])

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Resources</h1>
        <p className="mt-2 text-slate-600">Guides and tips for language learning and exam prep.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
              <button className="mt-4 text-teal-700 font-semibold text-sm">Read more</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
