import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  useReducedMotion,
} from 'motion/react'
import { div as MotionDiv, img as MotionImg } from 'motion/react-m'
import { approachStages } from '#/content/site'

function LineMotif() {
  return (
    <div className="line-motif-dark relative h-full w-full" aria-hidden="true">
      <span className="motif-node motif-node-a" />
      <span className="motif-node motif-node-b" />
      <span className="motif-node motif-node-c" />
      <span className="motif-node motif-node-d" />
      <i className="motif-segment motif-segment-a" />
      <i className="motif-segment motif-segment-b" />
      <i className="motif-segment motif-segment-c" />
    </div>
  )
}

export function StickyScrollReveal() {
  const [active, setActive] = useState(0)
  const reducedMotion = useReducedMotion()
  const itemRefs = useRef<Array<HTMLElement | null>>([])
  const activeStage = approachStages[active]

  useEffect(() => {
    const observers = itemRefs.current.map((element, index) => {
      if (!element) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index)
        },
        { rootMargin: '-38% 0px -42% 0px', threshold: 0.05 },
      )
      observer.observe(element)
      return observer
    })
    return () => observers.forEach((observer) => observer?.disconnect())
  }, [])

  return (
    <LazyMotion features={domAnimation} strict>
      <div>
        <div className="hidden gap-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.78fr)]">
          <div>
            {approachStages.map((stage, index) => (
              <article
                key={stage.number}
                ref={(node) => {
                  itemRefs.current[index] = node
                }}
                className="flex min-h-[52vh] max-w-2xl flex-col justify-center border-t border-charcoal/15 py-16"
              >
                <span className="mb-5 text-xs font-bold tracking-[0.2em] text-terracotta">
                  {stage.number}
                </span>
                <h3 className="max-w-xl font-serif text-[clamp(2rem,3.4vw,3.55rem)] leading-[1.02] tracking-[-0.025em] text-charcoal">
                  {stage.title}
                </h3>
                <p className="mt-6 max-w-[62ch] text-base leading-8 text-charcoal/72">
                  {stage.body}
                </p>
              </article>
            ))}
          </div>
          <div className="sticky top-28 h-[calc(100vh-8rem)] py-10">
            <div className="relative h-full overflow-hidden rounded-[2px] bg-brown">
              <AnimatePresence mode="wait">
                {activeStage.image ? (
                  <MotionImg
                    key={activeStage.number}
                    src={activeStage.image}
                    alt={activeStage.alt}
                    className="absolute inset-0 size-full object-cover"
                    initial={
                      reducedMotion ? false : { opacity: 0, scale: 1.015 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reducedMotion ? undefined : { opacity: 0 }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.7,
                      ease: 'easeOut',
                    }}
                  />
                ) : (
                  <MotionDiv
                    key="motif"
                    className="absolute inset-0 p-12"
                    initial={reducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: reducedMotion ? 0 : 0.7 }}
                  >
                    <LineMotif />
                  </MotionDiv>
                )}
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/28 via-transparent to-ivory/5" />
              <p className="absolute bottom-5 left-6 text-xs tracking-[0.18em] text-ivory/80">
                A way of understanding the work — not a fixed sequence
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-14 lg:hidden">
          {approachStages.map((stage) => (
            <article
              key={stage.number}
              className="border-t border-charcoal/15 pt-8"
            >
              <div className="mb-6 flex items-start gap-5">
                <span className="pt-1 text-xs font-bold tracking-[0.2em] text-terracotta">
                  {stage.number}
                </span>
                <div>
                  <h3 className="font-serif text-[clamp(1.9rem,8vw,2.8rem)] leading-[1.04] tracking-[-0.02em]">
                    {stage.title}
                  </h3>
                  <p className="mt-4 leading-7 text-charcoal/72">
                    {stage.body}
                  </p>
                </div>
              </div>
              <div className="ml-9 aspect-[4/3] overflow-hidden bg-brown">
                {stage.image ? (
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                ) : (
                  <div className="h-full p-8">
                    <LineMotif />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </LazyMotion>
  )
}
