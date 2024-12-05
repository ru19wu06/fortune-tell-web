import { Sparkles, CircleXIcon as YinYang, Moon, Sun } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-purple-900/90 backdrop-blur-sm border-b border-purple-800 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <YinYang className="text-yellow-400 animate-spin-slow" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-600">
            天才小布丁
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Sun className="w-4 h-4" />
                <span>陽宅風水</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Moon className="w-4 h-4" />
                <span>八字命理</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Sparkles className="w-4 h-4" />
                <span>紫微斗數</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

