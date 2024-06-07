import { ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import EmptyCart from './EmptyCart';
import { Button } from './ui/button';
import { useContext } from 'react';

import { GlobalContext } from '@/context/GlobalContext';
import AddedProducts from './AddedProducts';

const Cart = () => {

  const { cart  , removeFromCart} = useContext(GlobalContext);

  const ITEMS_NUMBER = cart.length;
  const Cart_Length = cart.length;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart className='h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-500' />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          {ITEMS_NUMBER}
        </span>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart {`(${ITEMS_NUMBER})`}</SheetTitle>
          {
            // TODO: ADD ADDEDPRODUCT COMPONENT HERE 
            Cart_Length > 0 ? (

              <div className="flex flex-col justify-center items-start gap-5">
                <div className="flex flex-col items-cente justify-start gap-y-3 w-full mx-4">
                  {
                    cart.map((product, i) => (
                      <AddedProducts
                        key={i}
                        productImage={product.image}
                        productName={product.title}
                        features={["ui-kit", "landing page", "admin dashboard"]}
                        price={product.price}
                        onRemove={() =>  removeFromCart(product)}

                      />
                    ))
                  }
                </div>
              </div>

            ) : (
              <div className="flex h-full flex-col items-center justify-center space-y-1">
                <EmptyCart />
                <SheetTrigger asChild>
                  <Button variant="link" size="sm" className="text-sm text-muted-foreground">
                    Add items to Your Cart to Checkout
                  </Button>
                </SheetTrigger>
              </div>
            )
          }

        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Cart