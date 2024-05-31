import React from 'react';
import Stories from './Stories';
import Posts from './Posts';

const Feed = () => {

// const [count , setCount] = useState(0)





  return (
    <section className='mx-4'>
      <main className="flex flex-col items-center gap-10 mx-4 my-2 overflow-x-scroll">
        <Stories />
      </main>
      <Posts />

      {/* <div className="flex flex-row justify-center items-center gap-x-6 mt-5">
        <button onClick={()=>setCount(count-1)}  className="px-4 py-4 bg-red-500 border-1 rounded-lg text-white">-</button>
        <span className="text-3xl font-extrabold text-white">{count}</span>
        <button onClick={()=>setCount(count+1)}  className='px-4 py-4 bg-green-500 border-1 rounded-lg text-white'>+</button>

      </div> */}

    </section>

  );
};

export default Feed;