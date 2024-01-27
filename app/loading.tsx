
export default function Component() {
  return (
    <div
      key="1"
      className="w-screen h-screen flex flex-col items-center justify-center space-y-4"
    >
      <div className="flex items-center justify-center space-x-4 animate-bounce">
        <MusicIcon className="h-8 w-8 text-gray-200" />
        <MusicIcon className="h-6 w-6 text-gray-300" />
        <MusicIcon className="h-24 w-24 text-gray-100" />
        <MusicIcon className="h-8 w-8 text-gray-200" />
        <MusicIcon className="h-6 w-6 text-gray-300" />
      </div>
    </div>
  )
}

function MusicIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#DE7F11"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}
