'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Compass, ScrollText } from 'lucide-react'

export default function FortuneTellingForm() {
  const [result, setResult] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setResult('您的命盤顯示：金星入命，主外貌俊美，性格溫和。太陽在位，暗示事業有成，但需謹防小人。今年行運：事業運勢漸入佳境，切記把握機會，凡事以和為貴。建議在農曆七月前完成重要決策。')
  }

  return (
    <Card className="max-w-2xl mx-auto border-purple-500/20 bg-purple-900/20 backdrop-blur">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-2">
          <Compass className="w-8 h-8 text-yellow-400" />
        </div>
        <CardTitle className="text-2xl font-bold bg-clip-text text-transparent from-yellow-400 to-orange-600">
          輸入您的生辰八字
        </CardTitle>
        <p className="text-sm text-gray-400">讓天機指引您的人生方向</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year" className="text-gray-300">出生年</Label>
              <Select>
                <SelectTrigger id="year" className="bg-purple-950/50 border-purple-500/30">
                  <SelectValue placeholder="選擇年份" />
                </SelectTrigger>
                <SelectContent className='bg-gray-300'>
                  {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="month" className="text-gray-300">出生月</Label>
              <Select>
                <SelectTrigger id="month" className="bg-purple-950/50 border-purple-500/30">
                  <SelectValue placeholder="選擇月份" />
                </SelectTrigger>
                <SelectContent className='bg-gray-300'>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                    <SelectItem key={month} value={month.toString()}>{month}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="day" className="text-gray-300">出生日</Label>
              <Select>
                <SelectTrigger id="day" className="bg-purple-950/50 border-purple-500/30">
                  <SelectValue placeholder="選擇日期" />
                </SelectTrigger>
                <SelectContent className='bg-gray-300'>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="hour" className="text-gray-300">出生時辰</Label>
              <Select>
                <SelectTrigger id="hour" className="bg-purple-950/50 border-purple-500/30">
                  <SelectValue placeholder="選擇時辰" />
                </SelectTrigger>
                <SelectContent className='bg-gray-300'>
                  {['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'].map(hour => (
                    <SelectItem key={hour} value={hour}>{hour}時</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">姓名</Label>
            <Input
              id="name"
              placeholder="請輸入您的姓名"
              className="bg-purple-950/50 border-purple-500/30"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-gray-300">性別</Label>
            <Select>
              <SelectTrigger id="gender" className="bg-purple-950/50 border-purple-500/30">
                <SelectValue placeholder="選擇性別" />
              </SelectTrigger>
              <SelectContent className='bg-gray-300'>
                <SelectItem value="male">男</SelectItem>
                <SelectItem value="female">女</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500"
          >
            <ScrollText className="w-4 h-4 mr-2" />
            開始解命
          </Button>
        </form>
        {result && (
          <div className="mt-8 p-6 rounded-lg border border-yellow-500/20 bg-purple-950/50 backdrop-blur">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
              <Compass className="w-5 h-5" />
              命盤解析
            </h2>
            <p className="text-gray-300 leading-relaxed">{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

