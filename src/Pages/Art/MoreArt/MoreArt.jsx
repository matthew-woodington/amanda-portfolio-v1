import './moreart.css'
import React, { useState } from 'react'

import design2 from "../../../assets/images/amandaswebsite/design2.png"
import design3 from "../../../assets/images/amandaswebsite/design3.png"
import drawing1 from "../../../assets/images/amandaswebsite/drawing1.jpg"
import drawing2 from "../../../assets/images/amandaswebsite/drawing2.jpg"
import drawing3 from "../../../assets/images/amandaswebsite/drawing3.jpg"
import painting2 from "../../../assets/images/amandaswebsite/painting2.jpg"
import portraits1 from "../../../assets/images/amandaswebsite/portraits1.jpg"
import portraits2 from "../../../assets/images/amandaswebsite/portraits2.jpg"
import portraits3 from "../../../assets/images/amandaswebsite/portraits3.jpg"
import portraits4 from "../../../assets/images/amandaswebsite/portraits4.jpg"
import portraits5 from "../../../assets/images/amandaswebsite/portraits5.jpg"
import portraits7 from "../../../assets/images/amandaswebsite/portraits7.jpg"

const MOREART_CONTENT = [design2, drawing1, portraits7, painting2, portraits1, design3, drawing2, portraits2, portraits4, drawing3, portraits3, portraits5]

function MoreArt() {
  const [expand, setExpand] = useState(false)
  const cardList = MOREART_CONTENT

  return (
    <div className='moreart'>

      <div className="button-section">
        <button className={!expand ? "exp-btn see-more" : "exp-btn hide"} onClick={() => setExpand(!expand)}>
        </button>
      </div>

      <section className={!expand ? "art-grid" : "art-grid expand"}>
        <ul className="moreart-list">
          {cardList.map((card) => (
            <li className="card">
              <img className='card-img' src={card} alt="" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default MoreArt
