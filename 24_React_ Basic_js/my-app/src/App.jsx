import GoogleMeetCard from "./GoogleMeetCard";
import Heading from "./Heading";

const App = ()=>{

    return(
        <>

<h1 className="text-5xl text-red-500">Hello</h1>

{/* 
        <Heading title="Hlloo" />
        <Heading title="beadasnkl" />
        <Heading title="lkadlks" />
        <Heading title="lajdlsk" />
     */}

     <GoogleMeetCard avatar="https://avatar.iran.liara.run/public/1" username="jhon doe" />
     <GoogleMeetCard avatar="https://avatar.iran.liara.run/public/3" username="jhon kumar" />
     <GoogleMeetCard avatar="https://avatar.iran.liara.run/public/4" username="sigma" />

        </>
    )
}


export default App;