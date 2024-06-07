import { Trash } from 'lucide-react'
import React from 'react'

const AddedProducts = ({
productImage,
productName,
features,
price,
onRemove
}) => {
return (
<div className=' flex justify-between items-center px-2 py-2 rounded-md hover:bg-gray-100 shadow-md w-full'>
{/* left div */}
<div className='flex justify-center items-center gap-3'>
<img
src={productImage}
alt="Product Image"
className="h-16 w-16 object-container rounded-md boder boder-gray-200 shadow-md"
/>

<div className="flex flex-col justify-center items-start">
<span className="text-xs text-muted-foreground font-semibold">
{productName}
</span>

<div className="flex items-center gap-2 flex-wrap">
{
features.map((feature,index)=>(
<React.Fragment key={index}>
    <span className='text-xs text-muted-foreground'>{feature}</span>
    {index < features.length - 1 && <div className="h-3 w-px bg-gray-300" />}
</React.Fragment>
))
}
</div>

</div>

</div>

{/* right div */}

<div className="flex justify-center items-center gap-5">
                <span className=" text-xs font-bold text-green-500">${price}</span>
                <Trash onClick={onRemove} className='h-8 w-8 text-red-500 rounded-full px-2 py-2 hover:bg-gray-200' />
      </div>
</div>  
)
}

export default AddedProducts