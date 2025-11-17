import { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course_interest: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${baseUrl}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) setStatus('success')
      else setStatus(data?.detail || 'error')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Contact / Enquiry</h1>
        <p className="mt-2 text-slate-600">We’ll reach out to you with course details and timelines.</p>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input required value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input value={form.phone} onChange={(e)=>setForm({...form, phone: e.target.value})} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Course Interest</label>
              <select value={form.course_interest} onChange={(e)=>setForm({...form, course_interest: e.target.value})} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500">
                <option value="">Select</option>
                <option>IELTS</option>
                <option>PTE</option>
                <option>German</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea rows="5" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors">Submit</button>
            {status === 'loading' && <p className="text-slate-600 text-sm">Submitting...</p>}
            {status === 'success' && <p className="text-teal-700 text-sm">Thanks! We will contact you soon.</p>}
            {status && status !== 'loading' && status !== 'success' && <p className="text-red-600 text-sm">{String(status)}</p>}
          </div>
        </form>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-slate-900">Our Locations</h2>
          <p className="mt-2 text-slate-600 text-sm">Find us across major cities. Map integration can be added here.</p>
        </div>
      </div>
    </section>
  )
}
