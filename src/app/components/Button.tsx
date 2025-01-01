import clsx from 'clsx';
import React from 'react'

type Props = {
    className?: string;
    buttonLink: string;
    buttonTxt: string | null;
}

const Button = ({className,buttonLink,buttonTxt  }: Props) => {
  return (
    <div className={ clsx(" text-xl text-white font-bold md:text-2xl tracking-wide uppercase bg-orange-600 hover:bg-orange-700 rounded-xl px-5 py-3 text-center transition-colors cursor-pointer  duration-150 ",className)}>{buttonTxt}</div>
  )
}

export default Button