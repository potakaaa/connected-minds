export function Spotlight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="spotlight-wash absolute -left-[20%] -top-[28%] h-[85%] w-[76%] rounded-full opacity-80" />
    </div>
  )
}
