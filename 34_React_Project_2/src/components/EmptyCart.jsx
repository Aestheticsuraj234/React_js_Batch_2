

const EmptyCart = () => {
  return (
    <>
    <div className="relative mb-4 h-60 w-60 text-muted-foreground">
    <img
    src="/hippo-empty-cart.png"
    alt="Empty Cart"
    className="absolute inset-0 w-full h-full object-container"    
    />

    </div>

<div className="text-xl font-semibold">
    Your Cart is Empty
</div>

    </>
  )
}

export default EmptyCart