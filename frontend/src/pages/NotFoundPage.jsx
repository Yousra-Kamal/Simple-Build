import logo from "../../public/images/logo.png"

export default function NotFoundPage() {
  return (
    <>
      <div className="flex min-h-full   justify-center px-6 py-12 lg:px-8">
        <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-gray-50 lg:grid-cols-[max(50%,36rem),1fr]">
          <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 w-auto sm:h-12"
                src={logo}
                alt="logo"
              />
               <h1 className=" font-serif font-extrabold text-xl drop-shadow-xl text-blue-800 tracking-tight">
                    SimpleBuild
                  </h1>
            </a>
          </header>
          <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
            <div className="max-w-lg">
              <p className="text-base font-semibold leading-8 text-indigo-600">
                404
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10">
                <a
                  href="#"
                  className="text-sm font-semibold leading-7 text-indigo-600"
                >
                  <span aria-hidden="true">&larr;</span> Back to home
                </a>
              </div>
            </div>
          </main>
      
        </div>
      </div>
    </>
  );
}
