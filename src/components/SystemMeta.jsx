export default function SystemMeta({ items = [] }) {
  return (
    <div className="hidden lg:flex flex-col items-center gap-6 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full mr-6">
      {items.map((item, i) => (
        <span
          key={i}
          className="meta-vertical text-[10px] tracking-[0.15em] text-text-gray uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}
