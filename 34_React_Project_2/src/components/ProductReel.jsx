import React from 'react'
import { Button } from './ui/button'
import { products } from '@/config'
import ProductListing from './ProductListing'

const ProductReel = () => {

    const title = "New Arrivals"
    const subtitle = "Shop the latest Products From our Collection"


  return (
    <section className='py-12'>
          <div className="flex items-center justify-between mb-4">
            <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
                <h1 className="text-2xl font-bold text-gray-900 ">
                    {title}
                </h1>
                <p className='mt-2 text-sm text-muted-foreground'>
                    {subtitle}
                </p>
            </div> 

    <Button variant={"link"} className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block">
        Shop the Collection <span>&rarr;</span>
    </Button>


            </div>  


<div className="relative">
    <div className="mt-6 flex items-center w-full">
        <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>

    {
        products.map((product , i)=>(
            <ProductListing key={i} product={product} index={i} />
        ))
    }

        </div>
    </div>
</div>

    </section>
  )
}

export default ProductReel