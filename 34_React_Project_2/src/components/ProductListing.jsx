import { HeartIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext'
const ProductListing = ({ product }) => {
  const { addToCart } = useContext(GlobalContext)

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="group rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-950 transition-all hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <img
          alt="Digital Asset"
          className="w-full aspect-video object-cover group-hover:opacity-80 transition-opacity"
          height={300}
          src={product.image}
          width={400}
        />
        <div className="absolute top-3 right-3 flex items-center gap-2">

          <div className="flex items-center gap-1 bg-gray-900 text-gray-50 px-2 py-1 rounded-md text-xs font-medium dark:bg-gray-50 dark:text-gray-900">
            <HeartIcon className="w-4 h-4" />
            <span>{product.likes}</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>
          <Button size="sm" variant="outline" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductListing