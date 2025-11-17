export default function About() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight">About Us</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">We are a premier language institute focused on empowering students to communicate confidently and unlock global opportunities. Our mission is to blend pedagogy, technology and mentorship to deliver measurable outcomes across IELTS, PTE and world languages.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-semibold">Mission</h3><p className="mt-2 text-slate-600">Deliver world-class language education with empathy, data and design.</p></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-semibold">Vision</h3><p className="mt-2 text-slate-600">Shape global citizens who learn, travel and work without borders.</p></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-semibold">Values</h3><p className="mt-2 text-slate-600">Integrity, excellence, inclusivity and continuous improvement.</p></div>
        </div>
      </div>
    </section>
  )
}
