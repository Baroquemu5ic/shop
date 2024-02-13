import { MusicIcon } from "@/components/music-icon";

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
  );
}
