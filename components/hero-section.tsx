import { CircleXIcon as YinYang } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 rounded-3xl" />
      <div className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-purple-500/20 backdrop-blur">
        <div className="relative z-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            天才小布丁 生辰八字 紫微斗數 算命
          </h1>
          <div className="flex items-center gap-2 text-yellow-400">
            <YinYang className="w-6 h-6 animate-spin-slow" />
            <p className="text-xl">上天文下知地理</p>
          </div>
          <p className="text-xl text-yellow-400">看通古今五百年</p>
          <div className="space-y-2 text-gray-300">
            <p>揭示命運的奧秘</p>
            <p>指引人生的方向</p>
            <p>預測未來的轉機</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-lg blur opacity-25"></div>
          <img
            src="/pud.png"
            alt="Fortune Teller"
            className="relative rounded-lg w-full object-cover aspect-[3/4] border border-purple-500/20"
          />
        </div>
      </div>
    </div>
  )
}

