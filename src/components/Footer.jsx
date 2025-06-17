import { Theme } from '../context/Theme'
export default function Footer() {
  return (
    <footer
      className={`${Theme.backgroundColors.extra} text-center py-6 border-t ${Theme.borderStyle.border}`}
    >
      <div className="text-sm text-slate-400">
        © {new Date().getFullYear()} Michael Enoch. Built with React, TailwindCSS & ❤️.
      </div>
      <div className="mt-2 text-slate-500 text-xs">
        Available for freelance or remote opportunities.
      </div>
    </footer>
  )
}
