export function TracingBeam({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pl-8 md:pl-14">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1 top-0 w-px bg-gradient-to-b from-amber via-amber/45 to-transparent md:left-3"
      />
      {children}
    </div>
  )
}
