import React from 'react'

const Offerings = () => {
  return (
    <div>
        <div className="content-block-container bg-yellow py-24 dark:text-black light mb-5xl">
          <div className="block-container flex flex-col gap-16 md:gap-36">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="basis-1/2">
                <h2 className="heading-2">Som digital byrå kan vi hjälpa er att nå era mål</h2>
              </div>
            <div className="basis-1/2 lg:justify-items-end">
              <div className="prose-sm lg:prose-lg dark:prose-invert min-w-full w-full">
                <p>Med enskilda expertkonsulter eller ett kompetent team kan vi hjälpa er att nå fantastiska resultat. Vi erbjuder innovativa lösningar för stora som små projekt.</p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            <a className="inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group btn-service text-xs md:text-sm justify-start w-full underline-offset-4 hover:underline [&amp; > span:first]:flex-1 py-8 border-b border-black dark:border-white dark:light:border-black first:border-t lg:[&amp;:nth-child(2)]:border-t relative" href="/vart-erbjudande/digital-marknadsforing-analys">
              <span className="realtive z-20">Digital Marknadsföring &amp; Analys</span>
              <span className="absolute transistion-all duration-300 right-4 -rotate-45 group-hover:right-2 group-hover:-mt-2 dark:invert dark:light:invert-0">
                <svg className="fill-black dark:fill-offwhite" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2889 8.99731L9.06969 1.77806L10.2599 0.587814L19.5114 9.83924L10.2599 19.0907L9.06969 17.9004L16.2895 10.6806H1.00879L1.00879 8.99732L16.2889 8.99731Z" fill="#121212"></path>
                </svg>
              </span>
            </a>
            <a className="inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group btn-service text-xs md:text-sm justify-start w-full underline-offset-4 hover:underline [&amp; > span:first]:flex-1 py-8 border-b border-black dark:border-white dark:light:border-black first:border-t lg:[&amp;:nth-child(2)]:border-t relative" href="/vart-erbjudande/design-ux">
              <span className="realtive z-20">Design &amp; UX</span>
              <span className="absolute transistion-all duration-300 right-4 -rotate-45 group-hover:right-2 group-hover:-mt-2 dark:invert dark:light:invert-0">
                <svg className="fill-black dark:fill-offwhite" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2889 8.99731L9.06969 1.77806L10.2599 0.587814L19.5114 9.83924L10.2599 19.0907L9.06969 17.9004L16.2895 10.6806H1.00879L1.00879 8.99732L16.2889 8.99731Z" fill="#121212"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offerings