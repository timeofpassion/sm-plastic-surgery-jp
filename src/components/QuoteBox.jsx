export default function QuoteBox({ text, author }) {
  return (
    <div className="bg-light-blue rounded-xl p-6 lg:p-8 border border-[#D4E0ED]">
      <span
        className="text-4xl leading-none text-primary block mb-3"
        style={{ fontFamily: 'var(--font-serif-en)' }}
      >
        &ldquo;
      </span>
      <p
        className="text-text-dark text-[15px] leading-relaxed keep-all mb-4"
        style={{ fontFamily: 'var(--font-serif-kr)' }}
      >
        {text}
      </p>
      {author && (
        <p className="text-text-gray text-sm">
          &mdash; {author}
        </p>
      )}
    </div>
  )
}
