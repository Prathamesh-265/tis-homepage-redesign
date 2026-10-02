export default function Marquee({ children, speed = 30, reverse = false, className = '' }) {
  return (
    <div className={`marquee overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee-track flex w-max" style={{ '--speed': `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  )
}
