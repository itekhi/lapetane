import Hero from '@/components/hero'

import greatDealBgImg from '@/assets/img/great-deal-bg.jpg'
import investmentVideoImg from '@/assets/img/investment-video.jpg'


export default function GreatDealPage() {
  return (
    <div className="flex tablet:flex-col flex-shrink-0 tablet:w-full">
      <Hero
        title="Great deal"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image={greatDealBgImg}
        imagePosition="bottom"
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
