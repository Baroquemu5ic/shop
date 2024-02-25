import { Location } from "./location";

export function Footer() {
  return (
    <footer className="w-full border-t-[0.5px] border-slate-600 mt-12 px-6 md:px-12 pt-12 pb-8 flex">
      <nav className="flex flex-col lg:flex-row items-center align-middle justify-between text-sm w-full">
        <Location />

        <div className="flex items-center space-x-4 text-slate-400 mt-4 lg:mt-0">
          <p>
            &copy; Copyright Baroque Academy of Performing Arts & Production
          </p>
        </div>
      </nav>
    </footer>
  );
}
