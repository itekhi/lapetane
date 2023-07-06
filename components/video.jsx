'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image'

import PlaySvg from '@/assets/svg/play.svg'


export default function Video({ image, text, className='' }) {
  const container = useRef(null);
  const video = useRef(null);

  const play = () => {
    video.current.currentTime = 0;
    video.current?.play();

    if (video.current?.requestFullScreen) {
      video.current.requestFullScreen();
    } else if (video.current?.webkitEnterFullScreen) {
      video.current.webkitEnterFullScreen();
    } else if (video.current?.webkitRequestFullScreen) {
      video.current.webkitRequestFullScreen();
    } else if (video.current?.mozRequestFullScreen) {
      video.current.mozRequestFullScreen();
    }
  }

  useEffect(() => {
    if (container.current) {
      const updateWidth = () => {
        let width = container.current.childNodes[0].offsetWidth;
        container.current.style.width = `${width}px`;
      }
  
      updateWidth()
      window.addEventListener('resize', updateWidth)
      return () => window.removeEventListener('resize', updateWidth)
    }
  }, [container])

  return (
    <div ref={container} className={`h-full flex-shrink-0 ${className}`}>
      <button className="flex-centered h-full aspect-video relative" onClick={play}>
        <Image
          src={image}
          alt=""
          fill={true}
          className="object-cover"
        />

        <div className="flex items-center relative z-10">
          <PlaySvg className="w-16" />
          {text && <h4 className="subheading ml-4">{text}</h4>}
        </div>

        <video ref={video} controls className="h-0 w-0 absolute overflow-hidden">
          <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
        </video>
      </button>
    </div>
  )
}
