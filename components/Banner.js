import React from "react"

import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"

const Banner = () => {
  return (
    <>
     <section className='banner'>
        <div className='container'>
          
          <div className='brand-content grid-6 py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='100%' height='100%' />
              </div>
            ))}
          </div>
        </div>
      </section> 
    </>
  )
}

export default Banner
