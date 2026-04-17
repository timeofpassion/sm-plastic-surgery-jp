export default function PageFrame() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[999] hidden lg:flex justify-center">
      <div className="w-full max-w-content-frame h-full border-l border-r border-border-default" />
    </div>
  );
}
