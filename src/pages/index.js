import React, { useEffect } from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import SectionHeading from '../components/SectionHeading'
import SectionSubheading from '../components/SectionSubheading'
import SectionDetails from '../components/SectionDetails'

const IndexPage = () => {
  useEffect(() => {
    const ScrollReveal =
      typeof window !== 'undefined' ? require('scrollreveal') : null

    ScrollReveal.reveal('.content', {
      duration: 1500
    })
  })
  return (
    <Layout>
      <SEO title='Home' />
      <div className='my-24 font-body text-main'>
        <h1 className='spotlight hero font-extrabold text-4xl w-full md:w-11/12 mb-6 leading-snug md:text-6xl'>
          <span className='line'>
            How iterations in UI / UX implementation impact
          </span>
          <span className='line' id='hero-gradient-text'>
            {' '}
            metrics and behavior.
          </span>
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

        <div className='content md:my-48 my-24 md:w-1/2'>
          <SectionSubheading>PURPOSE</SectionSubheading>
          <SectionHeading>
            Quantitative, objective, and statistically supported research.
          </SectionHeading>
          <SectionDetails>
            The aim of this study is to provide the field of UI/UX design and
            front-end engineering with quantative metrics supported by
            statistical methods and objective data.
          </SectionDetails>
        </div>
        <div className='content md:my-48 my-24 md:w-1/2 md:ml-auto'>
          <SectionSubheading>VALUE</SectionSubheading>
          <SectionHeading>Driven by design and feel</SectionHeading>
          <SectionDetails>
            Daily life and product interaction heavily relies on the effective
            use of UI and UX principles to provide high-quality services and
            experiences – the establishment of influence on metrics¹ due to
            specific elements and iteration can serve as a fundamental guide in
            improving design and interaction.
          </SectionDetails>
        </div>
        <div className='content md:my-48 my-24 w-2/3 '>
          <SectionSubheading>PROCESS</SectionSubheading>
          <SectionHeading>Method - mixed</SectionHeading>
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
            Effective UI and UX practices have a significant impact success, and
            psychological response.
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

      <div className='my-64'>
        <h1 className='md:text-5xl text-3xl tracking-tight my-6 md:my-24 leading-none font-bold'>
          Lenses, Perspectives, Terms
        </h1>
        <div className='cards flex flex-row justify-between flex-wrap'>
          <div className='card w-1/3 px-4'>
            <div
              style={{ transition: '0.2s' }}
              className='w-full rounded-lg h-full hover:shadow-lg px-12 pb-32 py-12 shadow-md mb-5'
            >
              <h6 className='md:text-2xl underline text-accent tracking-wide font-bold uppercase mb-3'>
                lenses
              </h6>
              <ul
                className='md:text-xl list-disc font-light list-inside leading-tight text-gray-600
'
              >
                <li className='py-3'>Economic</li>
                <li className='py-3'>Technological / futuristic</li>
                <li className='py-3'>Ethical</li>
              </ul>
            </div>
          </div>
          <div className='card w-1/3 px-4'>
            <div
              style={{ transition: '0.2s' }}
              className='w-full rounded-lg h-full hover:shadow-lg px-12 pb-32 py-12 shadow-md mb-5'
            >
              <h6 className='md:text-2xl underline text-accent tracking-wide font-bold uppercase mb-3'>
                perspectives
              </h6>
              <ul
                className='md:text-xl list-disc font-light list-inside leading-tight text-gray-600
'
              >
                <li className='py-3'>Business / agencies</li>
                <li className='py-3'>Consumers</li>
                <li className='py-3'>Designers, developers, analysts</li>
              </ul>
            </div>
          </div>
          <div className='card w-1/3 px-4'>
            <div
              style={{ transition: '0.2s' }}
              className='w-full rounded-lg h-full hover:shadow-lg px-12 pb-32 py-12 shadow-md mb-5'
            >
              <h6 className='md:text-2xl underline text-accent tracking-wide font-bold uppercase mb-3'>
                terms
              </h6>
              <ul
                className='md:text-xl list-disc font-light list-inside leading-tight text-gray-600
'
              >
                <li className='py-3'>UI / UX Design</li>
                <li className='py-3'>A/B Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-32'>
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
        <ul className='mt-6 md:text-lg tracking-wider font-light opacity-75 text-inactive'>
          <li>
            ¹ Perspectives on iteration in design and development; David C.
            Wynn, Claudia M. Eckert
          </li>
          <li>
            ² Agile Development Iterations and UI Design; Nobble, Wellington,
            Biddle
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
