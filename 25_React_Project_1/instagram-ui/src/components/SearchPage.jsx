

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 p-2 rounded"
        />
        <button
          type="button"
          className="rounded-full p-2 bg-transparent border-none hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <SearchIcon className="w-5 h-5" />
          <span className="sr-only">Search</span>
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-10" >
              <span className="sr-only">View</span>
            </div>
            <img
              src="https://placehold.co/400"
              alt="Search Result"
              width={400}
              height={400}
              className="aspect-square object-cover w-full group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex items-center gap-2 text-white">
                <HeartIcon className="w-4 h-4" />
                <span>{Math.floor(Math.random() * 3000) + 1}K</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MessageCircleIcon className="w-4 h-4" />
                <span>{Math.floor(Math.random() * 500) + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
