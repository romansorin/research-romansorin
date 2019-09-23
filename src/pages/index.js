import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div className='my-24 font-body text-main'>
      <h1 className='font-extrabold text-4xl w-full md:w-7/12 mb-6 leading-none md:text-6xl'>
        How iterations in UI / UX implementation impact
        <span id='hero-gradient-text'> metrics and behavior.</span>
      </h1>
      <div className='items-center flex flex-wrap flex-row'>
        <svg
          width='65'
          height='2'
          viewBox='0 0 65 2'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line y1='1' x2='65' y2='1' stroke='#1B1B1C' />
        </svg>

        <h2 className='md:ml-8 mt-4 md:mt-0 text-sm md:text-xl'>
          UI/UX Design . Business Metrics . Software Engineering
        </h2>
      </div>

      <div className='md:my-48 my-24 md:w-1/2'>
        <h3 className='text-accent tracking-wider md:text-lg mb-2 font-bold'>
          PURPOSE
        </h3>
        <h1 className='md:text-5xl text-3xl tracking-tight mb-4 leading-none font-bold'>
          Quantitative, objective, and statistically supported research.
        </h1>
        <p className='md:text-xl leading-snug'>
          The aim of this study is to provide the field of UI/UX design and
          front-end engineering with quantative metrics supported by statistical
          methods and objective data.
        </p>
      </div>
      <div className='md:my-48 my-24 md:w-1/2 md:ml-auto'>
        <h3 className='text-accent tracking-wider md:text-lg mb-2 font-bold'>
          VALUE
        </h3>
        <h1 className='md:text-5xl text-3xl tracking-tight mb-4 leading-none font-bold'>
          Driven by design and feel
        </h1>
        <p className='md:text-xl leading-snug'>
          Daily life and product interaction heavily relies on the effective use
          of UI and UX principles to provide high-quality services and
          experiences – the establishment of influence on metrics¹ due to
          specific elements and iteration can serve as a fundamental guide in
          improving design and interaction.
        </p>
      </div>
      <div className='md:my-48 my-24 w-2/3 '>
        <h3 className='text-accent tracking-wider md:text-lg mb-2 font-bold'>
          PROCESS
        </h3>
        <h1 className='md:text-5xl text-3xl tracking-tight mb-4 leading-none font-bold'>
          Methodology - mixed method
        </h1>
        <ol className='md:text-2xl md:pl-12 pl-6 list-decimal'>
          <li className='py-5'>Develop and implement A/B iterations</li>
          <li className='py-5'>
            Analyze associated user behavior and patterns²
          </li>
          <li className='py-5'>
            Iterate, redesign, and reimplement – iteration with objective
            success in mind
          </li>
        </ol>
      </div>
      <div>
        <svg
          className='mx-auto max-w-xs'
          width='757'
          height='1'
          viewBox='0 0 757 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            y1='0.5'
            x2='757'
            y2='0.5'
            stroke='black'
            stroke-opacity='0.13'
          />
        </svg>
        <h1 className='md:text-5xl text-4xl text-center tracking-tight my-4 md:my-24 leading-none font-semibold'>
          Effective UI and UX practices have a significant impact on quality,
          success, and psychological response.
        </h1>
        <svg
          className='mx-auto max-w-xs'
          width='757'
          height='1'
          viewBox='0 0 757 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            y1='0.5'
            x2='757'
            y2='0.5'
            stroke='black'
            stroke-opacity='0.13'
          />
        </svg>
      </div>
    </div>

    <div className='mb-16'>
      <h1 className='md:text-5xl text-3xl tracking-tight my-6 md:my-24 leading-none font-bold'>
        Lenses, Perspectives, Terms
      </h1>
      <div className='mb-5'>
        <h6 className='md:text-xl tracking-wide font-bold uppercase mb-2'>
          lenses
        </h6>
        <ul
          className='md:text-xl leading-tight text-gray-600
'
        >
          <li>Economic</li>
          <li>Technological / futuristic</li>
          <li>Ethical</li>
        </ul>
      </div>
      <div className='mb-5'>
        <h6 className='md:text-xl tracking-wide font-bold uppercase mb-2'>
          perspectives
        </h6>
        <ul className='md:text-xl leading-tight text-gray-600'>
          <li>Business / agencies</li>
          <li>Consumers</li>
          <li>Designers, developers, analysts</li>
        </ul>
      </div>
      <div className='mb-5'>
        <h6 className='md:text-xl tracking-wide font-bold uppercase mb-2'>
          terms
        </h6>
        <ul className='md:text-xl leading-tight text-gray-600'>
          <li>UI / UX Design</li>
          <li>A/B Testing</li>
        </ul>
      </div>
    </div>
    <div>
      <h1 className='md:text-4xl text-3xl tracking-tight mb-4 leading-none font-bold'>
        References
      </h1>

      <svg
        className='mb-2'
        width='35'
        height='1'
        viewBox='0 0 35 1'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='0.5' x2='35' y2='0.5' opacity='.6' stroke='black' />
      </svg>
      <ul className='md:text-lg text-inactive'>
        <li>
          ¹ Perspectives on iteration in design and development; David C. Wynn,
          Claudia M. Eckert
        </li>
        <li>
          ² Agile Development Iterations and UI Design; Nobble, Wellington,
          Biddle
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
