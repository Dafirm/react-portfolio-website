import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className='.container testimonials__container'>
        <article className='testimonials'>
          <div className='client__avatar'>
            <img src="AVTR1" alt='Avatar One'/>
            <h5 className='client__name'>David Akinboyewa</h5>
            <small className='client__review'>
              He is such an intelligent individual, he is so passionate about his career and he aspires
              to continue learning new technolgies and ideas 
            </small>
          </div>
        </article>

        <article className='testimonials'>
          <div className='client__avatar'>
            <img src="AVTR1" alt='Avatar One'/>
            <h5 className='client__name'>David Akinboyewa</h5>
            <small className='client__review'>
              He is such an intelligent individual, he is so passionate about his career and he aspires
              to continue learning new technolgies and ideas 
            </small>
          </div>
        </article>

        <article className='testimonials'>
          <div className='client__avatar'>
            <img src="AVTR1" alt='Avatar One'/>
            <h5 className='client__name'>David Akinboyewa</h5>
            <small className='client__review'>
              He is such an intelligent individual, he is so passionate about his career and he aspires
              to continue learning new technolgies and ideas 
            </small>
          </div>
        </article>

        <article className='testimonials'>
          <div className='client__avatar'>
            <img src="AVTR1" alt='Avatar One'/>
            <h5 className='client__name'>David Akinboyewa</h5>
            <small className='client__review'>
              He is such an intelligent individual, he is so passionate about his career and he aspires
              to continue learning new technolgies and ideas 
            </small>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Testimonials