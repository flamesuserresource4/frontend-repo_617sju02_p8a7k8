import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Users, Globe2, Star } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative pointer-events-none">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
            <div className="max-w-2xl py-28">
              <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                Learn Languages. Unlock Global Opportunities.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }} className="mt-6 text-lg text-slate-700">
                Premium coaching for IELTS, PTE and world languages with a modern, international approach.
              </motion.p>
              <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors">
                  Enroll Now <ArrowRight className="ml-2" size={16} />
                </Link>
                <Link to="/courses" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 px-6 py-3 text-sm font-semibold hover:border-slate-400 transition-colors">
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="text-teal-600" />, title: 'Trusted & Accredited', desc: 'Expert trainers, transparent outcomes and accredited methods.' },
              { icon: <Users className="text-teal-600" />, title: 'Personalized Learning', desc: 'Small batches, feedback loops and mentorship.' },
              { icon: <Globe2 className="text-teal-600" />, title: 'Global Outlook', desc: 'International curriculum and real-world application.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-teal-50">{item.icon}</div>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <CoursesPreview />

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

function CoursesPreview() {
  const courses = [
    {
      slug: 'ielts-coaching',
      title: 'IELTS Coaching',
      image: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=1200&auto=format&fit=crop',
      desc: 'Master IELTS with expert trainers and personalized feedback.'
    },
    {
      slug: 'pte-preparation',
      title: 'PTE Preparation',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
      desc: 'Ace PTE with strategy-driven sessions and practice labs.'
    },
    {
      slug: 'foreign-languages',
      title: 'Foreign Languages',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop',
      desc: 'Learn German, French, Spanish, Japanese and more.'
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Featured Courses</h2>
          <Link to="/courses" className="text-teal-700 hover:text-teal-800 font-semibold">View all</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.div key={c.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <Link to={`/courses/${c.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-teal-700 hover:text-teal-800">Learn more <ArrowRight size={14} className="ml-1" /></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Aarav S.', text: 'Scored an overall 8.0! The mocks and feedback were game-changers.', score: 'IELTS 8.0' },
    { name: 'Meera T.', text: 'I loved the labs. Cracked PTE in the first attempt.', score: 'PTE 79+' },
    { name: 'Rohit K.', text: 'The speaking rooms and mentors boosted my confidence.', score: 'IELTS 7.5' },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Student Success</h2>
          <div className="flex items-center text-amber-500"><Star className="fill-amber-400 mr-1" size={18} /> 4.9/5 from 500+ reviews</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{t.text}”</p>
              <div className="mt-4 text-sm font-semibold text-slate-900">{t.name} • <span className="text-teal-700">{t.score}</span></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors">Book a Free Consultation</Link>
        </div>
      </div>
    </section>
  )
}
