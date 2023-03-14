import './moreart.css'
import React, { useState } from 'react'

function MoreArt() {
  const [expand, setExpand] = useState(false)

  return (
    <div className='moreart'>

      <div className="button-section">
        <button className="see-more" onClick={() => setExpand(!expand)}>
          {!expand ? ("See More") : ("Hide")}
        </button>
      </div>

      <section className={!expand ? "art-grid" : "art-grid expand"}>

      </section>
    </div>
  )
}

export default MoreArt
