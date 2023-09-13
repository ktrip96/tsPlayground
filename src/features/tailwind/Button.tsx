import React, { ButtonHTMLAttributes, ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
	children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({ children, className, ...rest }: Props) => {
	return (
		<button
			{...rest}
			className={twMerge(`border border-white rounded-lg  px-4 py-2 w-[200px] bg-green-900`, className)}
		>
			{children}
		</button>
	)
}

export default Button
