import React from 'react'


export default function SwipeHand({ className='' }) {
  return (
    <div className={`w-20 ${className}`}>
      <div className="flex items-center animate-wiggle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" fill="white" />
        </svg>

        <svg width="36" height="36" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M9.50391 21.9805L2.12891 12.9055L3.90391 11.2055L7.97891 14.0555V2.98047H9.97891V17.9055L7.20391 15.9555L10.4539 19.9805H19.9789V9.98047H21.9789V21.9805H9.50391ZM11.9789 13.9805V6.98047H13.9789V13.9805H11.9789ZM15.9789 13.9805V7.98047H17.9789V13.9805H15.9789Z" />
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12L9.4 18Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}
