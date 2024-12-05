import { CircleXIcon as YinYang } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-900/90 border-t border-purple-800 mt-8">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <YinYang className="w-8 h-8 text-yellow-400" />
          <div className="text-center space-y-2">
            <p className="text-yellow-400">上天文下知地理 • 看通古今五百年</p>
            <p className="text-sm text-gray-400">&copy; 2024 天才小布丁 生辰八字 紫微斗數 算命</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

