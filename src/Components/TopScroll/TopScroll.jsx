import "./topscroll.css"
import React, { useEffect, useState } from 'react'
import {RxCaretUp} from 'react-icons/rx'

function TopScroll() {
  const [show, setShow] = useState(false)

  const showBtn = () => {
    if (window.scrollY >= 200) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll')
  })

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className='scroll-button' onClick={() => goToTop()}>
      <RxCaretUp className="scroll-up" />
    </div>
  )
}

export default TopScroll
