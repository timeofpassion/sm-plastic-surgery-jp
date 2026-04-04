export default function SectionLabel({ children, centered = false }) {
  return (
    <div
      className={`flex ${centered ? 'flex-col items-center text-center section-label-center' : 'flex-col section-label-line'} gap-3 mb-4`}
    >
      <span
        className="text-[11px] tracking-[0.2em] uppercase text-primary font-medium"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {children}
      </span>
    </div>
  )
}
