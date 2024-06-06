import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Cart = () => {
  return (
    <div className="group -m-2 flex items-center p-2">
        <ShoppingCart className='h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-500'/>
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 '>
            90

        </span>
    </div>
  )
}

export default Cart