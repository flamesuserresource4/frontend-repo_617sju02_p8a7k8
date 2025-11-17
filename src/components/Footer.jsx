export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-slate-900 font-semibold">International Institute of Languages</h3>
          <p className="mt-2 text-slate-600 text-sm">Learn Languages. Unlock Global Opportunities.</p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li><a href="/courses" className="hover:text-teal-600">Courses</a></li>
            <li><a href="/study-abroad" className="hover:text-teal-600">Study Abroad</a></li>
            <li><a href="/about" className="hover:text-teal-600">About</a></li>
            <li><a href="/blog" className="hover:text-teal-600">Resources</a></li>
            <li><a href="/contact" className="hover:text-teal-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold">Contact</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>info@iil.edu</li>
            <li>+91 98765 43210</li>
            <li>Multiple branches across India</li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold">Follow</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li><a href="#" className="hover:text-teal-600">Instagram</a></li>
            <li><a href="#" className="hover:text-teal-600">YouTube</a></li>
            <li><a href="#" className="hover:text-teal-600">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} International Institute of Languages. All rights reserved.</div>
    </footer>
  )
}
