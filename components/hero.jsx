import Image from "next/image";

import Video from "./video";
import SwipeHand from "./swipe-hand";

import DoubleArrowSvg from '@/assets/svg/double-arrow.svg'


export default function Hero({ title, text, image, imagePosition = 'center', videoImage, videoText }) {
  return (
    <div className="flex flex-shrink-0 h-full tablet:w-full relative">
      <div className="absolute inset-y-0 !left-[-300px] tablet:inset-0 right-0 -z-1">
        <Image
          src={image}
          alt=""
          fill={true}
          sizes="140vw"
          className="min-w-none object-cover blur-sm opacity-80 tablet:opacity-100 tablet:blur-0"
          style={{ objectPosition: imagePosition }}
        />
      </div>

      <div className="flex flex-shrink-0 tablet:justify-between tablet:h-[400px] tablet:w-full tablet:bg-main py-6 px-main tablet:mt-auto">
        <div className="flex flex-col items-start flex-shrink-0 tablet:flex-shrink max-w-sm tablet:max-w-3xl">
          <h1 className="heading">{title}</h1>
          <h2 className="paragraph mt-2">{text}</h2>

          <div className="tablet:hidden mt-10">
            <p className="subheading">Swipe for more info</p>
            <SwipeHand className="mx-auto" />
          </div>

          <div className="hidden tablet:flex items-center mt-auto">
            <DoubleArrowSvg className="w-12 mr-2 animate-bounce" />
            <p className="subheading">Scroll for more info</p>
          </div>
        </div>

        <Video image={videoImage} text={videoText} className="ml-6" />
      </div>
    </div>
  )
}
