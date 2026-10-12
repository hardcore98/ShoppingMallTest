import { cn } from '@/lib/utils'

export function SectionLabel({
  index,
  title,
  className,
}: {
  index: string
  title: string
  className?: string
}) {
  return (
    <p className={cn('flex items-center gap-4 text-xs tracking-[0.3em] uppercase', className)}>
      <span className="text-accent">{index}</span>
      <span className="h-px w-10 bg-current opacity-30" aria-hidden="true" />
      <span>{title}</span>
    </p>
  )
}
