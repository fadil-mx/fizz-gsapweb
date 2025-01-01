import React from 'react'
import { FizziLogo } from './Fizzylogo'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="flex py-4 justify-center  -mb-24">
        <FizziLogo className="h-20 text-blue-800 z-10 cursor-pointer"/>
    </div>
  )
}

export default Header