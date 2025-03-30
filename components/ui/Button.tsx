import React from 'react'
import ButtonProps from '../../models/models'

export const Button = ({ children, className = '', onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md bg-white text-black transition-colors ${className}`}
  >
    {children}
  </button>
)

export default Button
