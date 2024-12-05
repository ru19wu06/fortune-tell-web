import FortuneTellingForm from '@/components/fortune-telling-form'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/chinese-pattern.svg')] bg-repeat text-white">
      <div className="bg-gradient-to-b from-purple-900/95 to-indigo-900/95 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <FortuneTellingForm />
        </main>
        <Footer />
      </div>
    </div>
  )
}

