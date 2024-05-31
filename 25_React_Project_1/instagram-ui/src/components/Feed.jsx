import React from 'react';
import Stories from './Stories';
import Posts from './Posts';

const Feed = () => {
  return (
    <section className='mx-4'>
      <main className="flex flex-col items-center gap-10 mx-4 my-2 overflow-x-scroll">
        <Stories />
      </main>
      <Posts />

    </section>

  );
};

export default Feed;