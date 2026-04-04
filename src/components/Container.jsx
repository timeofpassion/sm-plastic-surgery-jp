export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-[1100px] mx-auto relative px-5 lg:px-[60px] ${className}`}>
      {children}
    </div>
  )
}
