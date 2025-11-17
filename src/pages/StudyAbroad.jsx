import { motion } from 'framer-motion'

export default function StudyAbroad() {
  const destinations = [
    { name: 'Canada', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop' },
    { name: 'UK', img: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Australia', img: 'https://images.unsplash.com/photo-1506976785307-8732e854ad75?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Germany', img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Study Abroad</h1>
        <p className="mt-2 text-slate-600">Pathways to global universities with language mastery.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d, i) => (
            <motion.div key={d.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover hover:scale-[1.03] transition-transform duration-300" />
              </div>
              <div className="p-4 font-semibold">{d.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-slate-900">How we help</h2>
          <ul className="mt-3 grid md:grid-cols-2 gap-3 text-slate-700">
            <li>Profile evaluation and university shortlisting</li>
            <li>Application and SOP guidance</li>
            <li>Interview prep and visa counseling</li>
            <li>Language coaching tied to admission timelines</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
