import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Courses() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/courses`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Courses</h1>
        <p className="mt-2 text-slate-600">Explore language programs and exam preparation tracks.</p>

        {loading ? (
          <p className="mt-10 text-slate-500">Loading...</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((c, i) => (
              <motion.div key={c._id || i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md">
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  {c.image_url ? (
                    <img src={c.image_url} alt={c.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-slate-400">No image</div>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wide text-teal-700/80">{c.category}</div>
                  <h3 className="mt-1 font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{c.short_description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link to={`/courses/${c.slug}`} className="text-sm font-semibold text-teal-700 hover:text-teal-800">Learn more</Link>
                    {typeof c.price === 'number' && <div className="text-sm text-slate-700">₹{(c.price * 83).toFixed(0)}</div>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
