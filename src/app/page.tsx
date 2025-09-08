import Header from "./Header/Header"
import { Experiences } from "./Experiences/Experiences"
import PortfolioFeed from "./Portfolio/PortfolioFeed"

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header Section */}
        <Header />
        <hr className="mb-6 mt-2" />
        {/* Experiences Section */}
        <Experiences />

        <hr className="my-8" />
        {/* Portfolio Section */}
        <PortfolioFeed />
      </div>
    </div>
  )
}
