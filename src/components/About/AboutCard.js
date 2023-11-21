import React from 'react'

function AboutCard({title, description}) {
  return (
    <div className=' justify-self-center'>
        <h4 className='about-title'>{title}</h4>
        <h4 className=' text-about mt-3'>{description}</h4>

    </div>
  )
}



export default AboutCard