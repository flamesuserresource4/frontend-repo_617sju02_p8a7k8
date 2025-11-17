import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CourseDetail() {
  const { slug } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/courses/${slug}`)
        if (!res.ok) throw new Error('Not found')
        const data = await res.json()
        setCourse(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [slug])

  if (loading) return <div className="py-20 text-center text-slate-600">Loading...</div>
  if (!course) return <div className="py-20 text-center text-slate-600">Course not found</div>

  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{course.title}</h1>
              <p className="mt-4 text-slate-700">{course.description || course.short_description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {course.highlights?.map((h, i) => (
                  <span key={i} className="inline-flex items-center rounded-full bg-teal-50 text-teal-800 px-3 py-1 text-xs font-semibold border border-teal-100">{h}</span>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors">Enroll Now</Link>
                <a href="#syllabus" className="text-teal-700 font-semibold">View Syllabus</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              {course.image_url ? (
                <img src={course.image_url} alt={course.title} className="w-full h-full object-cover" />
              ) : (
                <div className="aspect-[16/10]" />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="syllabus" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight">Syllabus</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-3">
            {course.syllabus?.map((s, i) => (
              <li key={i} className="rounded-xl border border-slate-200 bg-white p-4">{s}</li>
            )) || <li className="text-slate-600">Coming soon</li>}
          </ul>
        </div>
      </section>
    </div>
  )
}
