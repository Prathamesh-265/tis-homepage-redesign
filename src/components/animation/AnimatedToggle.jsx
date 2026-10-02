import { Moon, Sun } from 'lucide-react'

export default function AnimatedToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle dark mode"
      onClick={onToggle}
      className="relative flex h-10 w-[76px] shrink-0 items-center rounded-full border border-line bg-surface px-1.5"
    >
      <Sun size={16} className="absolute left-3 text-brand" aria-hidden="true" />
      <Moon size={16} className="absolute right-3 text-muted" aria-hidden="true" />
      <span
        className={`grid size-7 place-items-center rounded-full bg-brand transition-transform duration-500 ease-[cubic-bezier(.68,-.4,.27,1.4)] ${dark ? 'translate-x-9' : 'translate-x-0'}`}
      >
        {dark ? <Moon size={14} className="text-navy" /> : <Sun size={14} className="text-navy" />}
      </span>
    </button>
  )
}
