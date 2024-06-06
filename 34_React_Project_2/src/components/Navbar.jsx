
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import NavItems from './NavItems'
import { Button } from './ui/button'
import Cart from './Cart'

const Navbar = () => {
return (
<div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
<header className="relative bg-white">
<MaxWidthWrapper>
<div className='border-b border-gray-200'>
<div className='flex h-16 items-center'>

{/* logo */}
<div className="ml-4 flex lg:ml-0">
    <Icons.logo className="h-10 w-10" />
</div>

{/* navlinks */}
<div className="hidden  z-50 lg:ml-8 lg:block lg:self-center">
    <NavItems />
</div>

<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

    <Button variant="ghost">Sign In</Button>
    <span className="h-6 w-px bg-gray-200"/>

    <Button variant="ghost">Create Account</Button>
    <span className="h-6 w-px bg-gray-200"/>

    <div className='flex lg:ml-6'>
        <span className="h-6 w-px bg-gray-200">
        <div className="ml-4 flow-root lg:ml-6">
        <Cart/>
        </div>
        </span>

    </div>

</div>


</div>
</div>
</MaxWidthWrapper>
</header>
</div>
)
}

export default Navbar