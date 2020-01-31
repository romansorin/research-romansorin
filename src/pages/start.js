import { Layout, SEO } from 'Components'
import React, { useState } from 'react'

import { Input, Label } from 'Components/Input'
import { Mail } from 'react-feather'
import { PrimaryButton } from 'Components/Button/index'
import { Checkbox } from 'Components/Checkbox'
import { Link } from 'gatsby'
const commonStyles =
  'text-theme-5-.8 absolute right-0 top-0 mt-2 pt-px -mb-px leading-none uppercase mr-4 font-medium'
const strokeWidth = 2
const size = 24

const StartPage = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Layout>
      <SEO title='Home' />
      <div className='flex flex-col px-3 my-24'>
        <h1 className='mb-3 text-text-2 text-3xl md:text-4xl leading-snug font-medium'>
          Welcome to my research study.
        </h1>
        <p>
          A little bit of info on what this is about, how long it will take,
          etc. Directions:
        </p>
        <div className='my-40 flex flex-col'>
          <Label for='email' className='mb-2'>
            Email address
          </Label>
          <div className='relative mb-8'>
            <Input
              autocomplete='email'
              name='email'
              id='email'
              placeholder='Email address'
            />
            <Mail
              strokeWidth={strokeWidth}
              size={size}
              className={commonStyles}
            />
          </div>
          <Checkbox
            labelClasses='w-1/2'
            checkboxClasses='shadow'
            checked={checked}
            onClick={() => setChecked(!checked)}
            id='consent'
            width={24}
            height={24}
          >
            By checking this box, you acknowledge that you have read the{' '}
            <Link className='text-theme-2' to=''>
              data usage
            </Link>{' '}
            and{' '}
            <Link className='text-theme-2' to=''>
              privacy policy
            </Link>{' '}
            clauses, and agree to the{' '}
            <Link className='text-theme-2' to=''>
              terms of service
            </Link>
            .
          </Checkbox>

          <PrimaryButton className='mt-10 w-1/6' variant={1}>
            Start
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  )
}

export default StartPage
