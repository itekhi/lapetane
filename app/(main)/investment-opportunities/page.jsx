import Image from "next/image"

import Hero from "@/components/hero"
import Video from "@/components/video"

import investmentBgImg from '@/assets/img/investment-bg.jpg'
import investmentVideoImg from '@/assets/img/investment-video.jpg'


export default function InvestmentOpportunitiesPage() {
  return (
    <div className="flex tablet:flex-col flex-shrink-0 tablet:w-full">
      <Hero
        title="Investment opportunities"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua."
        image={investmentBgImg}
        videoImage={investmentVideoImg}
        videoText="Watch 5 min video"
      />

      <div className="flex py-6 pl-16">
        <div className="w-full max-w-xs">
          <h3 className="subheading">Something</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua.</p>
        </div>

        <div className="w-full max-w-xs mx-6">
          <h3 className="subheading">Something</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua.</p>
        </div>

        <div className="w-full max-w-xs">
          <h3 className="subheading">Something</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  )
}
