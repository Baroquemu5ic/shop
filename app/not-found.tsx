import Link from 'next/link';
import Image from 'next/image';
 
export const metadata = {
  title: `Page not found`,
};
 
function NotFoundPage() {
  return (
    <div
      className={
        'm-auto flex flex-col w-full h-screen items-center justify-center gap-y-8'
      }
    >

      <Image
        src="/images/not-found.avif"
        alt="Not Found"
        className="object-cover"
        width={450}
        height={200}
        priority
      />

      <div className={'flex flex-col space-y-12 items-center rounded-xl px-8'}>
        <div className={'w-full flex space-x-8 divide-gray-100'}>

 
          <div className={'flex flex-col space-y-4 p-8 items-center'}>
            <div className={'flex flex-col space-y-2 items-center'}>
              <div className={'flex space-x-2 items-center'}>
                <span className='text-orange-600 text-3xl font-bold'>404</span>
                <span className='font-medium text-xl text-slate-200'>Page not found</span>
              </div>

              <p className={'text-gray-500 text-sm dark:text-gray-300'}>
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
            </div>
 
            <div className={'flex space-x-4'}>
                <Link href={'/'} className='bg-blue-600 text-slate-100 rounded-lg px-8 py-4'>
                  Back to Home Page
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default NotFoundPage;