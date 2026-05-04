const LINE_URL = "https://line.me/R/ti/p/@952nqpbr";

export default function LineFloat() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-track-location="line-float"
      aria-label="LINEで相談する"
      className="hidden lg:flex fixed bottom-6 right-6 z-[300] w-[60px] h-[60px] rounded-full items-center justify-center text-white transition-transform hover:scale-105"
      style={{
        background: "#06C755",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738C5.384.566 0 4.935 0 10.304c0 4.811 4.27 8.843 10.035 9.608.39.084.922.258 1.057.592.122.302.079.775.038 1.085l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.54 6.957-4.098 9.489-7.016 1.749-1.918 2.496-3.862 2.496-5.942zM7.591 13.078H5.206a.515.515 0 01-.515-.514V7.788a.515.515 0 111.03 0v4.264h1.87a.515.515 0 110 1.026zm2.02-.514a.515.515 0 11-1.03 0V7.788a.515.515 0 111.03 0v4.776zm5.761 0a.515.515 0 01-.927.307l-2.44-3.321v2.999a.515.515 0 11-1.03 0V7.788a.515.515 0 01.928-.307l2.44 3.322v-3a.515.515 0 111.029 0v4.776zm3.889-2.903a.515.515 0 110 1.03h-1.871v1.187h1.871a.515.515 0 110 1.03h-2.386a.515.515 0 01-.514-.514V7.788a.515.515 0 01.514-.515h2.386a.515.515 0 110 1.03h-1.871v1.358z" />
      </svg>
    </a>
  );
}
