import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Globe2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
      <NavLink to="/courses" className={({isActive})=>`px-3 py-2 rounded-md transition-colors ${isActive ? 'text-teal-600' : 'hover:text-teal-600'}`}>Courses</NavLink>
      <NavLink to="/study-abroad" className={({isActive})=>`px-3 py-2 rounded-md transition-colors ${isActive ? 'text-teal-600' : 'hover:text-teal-600'}`}>Study Abroad</NavLink>
      <NavLink to="/about" className={({isActive})=>`px-3 py-2 rounded-md transition-colors ${isActive ? 'text-teal-600' : 'hover:text-teal-600'}`}>About</NavLink>
      <NavLink to="/blog" className={({isActive})=>`px-3 py-2 rounded-md transition-colors ${isActive ? 'text-teal-600' : 'hover:text-teal-600'}`}>Resources</NavLink>
      <NavLink to="/contact" className={({isActive})=>`px-3 py-2 rounded-md transition-colors ${isActive ? 'text-teal-600' : 'hover:text-teal-600'}`}>Contact</NavLink>
      <Link to="/contact" className="md:ml-4 inline-flex items-center justify-center rounded-full bg-teal-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-teal-700 transition-colors">Free Consultation</Link>
    </div>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm"><Globe2 size={18} /></span>
            <span className="tracking-tight">International Institute of Languages</span>
          </Link>
          <div className="hidden md:block">
            {navItem}
          </div>
          <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-slate-200">
            {navItem}
          </div>
        )}
      </div>
    </header>
  )
}
