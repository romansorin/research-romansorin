import React from 'react'

import Heading from './Heading'
import Aside from './Aside'
import Main from './Main'

const Reference = () => {
  return (
    <section>
      <Heading
        className='md:mb-24'
        title='Research paper title'
        authors='Authors of paper'
      />
      <div className='flex flex-col md:flex-row'>
        <Aside className='md:pr-16 md:mb-0 mb-10' date='NOV 1, 2019' />
        <Main>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc
          nunc posuere faucibus pulvinar amet neque donec in. Commodo, sed sed
          consequat tempor quis varius. Massa vulputate nisl dignissim massa
          scelerisque risus ultricies aliquam. Elementum faucibus habitant
          integer ipsum. Condimentum nunc ultricies diam suspendisse ornare.
          Vivamus diam potenti consectetur arcu adipiscing dis. Dolor dui quam
          ac lacus, tortor congue eget et mattis. Etiam euismod praesent
          fermentum, sed gravida sapien lorem. Venenatis fusce egestas
          suspendisse ullamcorper lectus molestie ullamcorper eleifend. Sit
          venenatis, lorem enim turpis. Cras et sed porttitor sit sit sit
          posuere. Sed fusce sagittis amet eget sem sit pulvinar hendrerit
          adipiscing. Amet, at risus mauris augue pellentesque vitae
          pellentesque vitae. Massa ultrices eget vel et pulvinar adipiscing
          curabitur viverra. Aliquet commodo leo, quis in viverra tincidunt sed
          et. Ac, urna, consequat, dolor nisl ornare ipsum. Viverra magna magna
          odio quam libero. Et habitant quam sit ultrices. Id sed urna proin
          varius massa diam in laoreet. Consequat convallis sagittis molestie
          quisque augue quam amet pellentesque tincidunt. Id id consectetur
          fermentum augue et in gravida augue. Sollicitudin maecenas tortor
          placerat eleifend orci, in purus sagittis ut. Blandit est nullam eget
          urna cursus. Accumsan facilisis nascetur at lacus.
        </Main>
      </div>
    </section>
  )
}

export default Reference
