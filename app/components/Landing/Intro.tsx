import React from 'react'

const Intro = () => {
  return (
    <div>
        <section className="gap-[--gutter] px-[--x-spacing] grid grid-cols-12 gap-y-28 py-20 md:gap-y-24 md:py-36 bg-white text-black">
            <hgroup className="[--gap-gutter] col-span-full grid grid-cols-12">
                <h2 className="text-[3rem] md:top-header-sticky-offset col-span-full h-fit md:sticky md:col-span-4">Välkommen</h2>
                <p className="lg:text-[2rem] md:text-[[1.5rem] col-span-full md:col-span-8">It’s quite simple. Through marketing, tech, and innovation, NoA secures customer-driven growth for your business. We strengthen and expand your customer base, make them more loyal, and make sure that they contribute to your success and profitability. All of which is accomplished through collaboration – with you and across our capabilities.</p>
            </hgroup>
        </section>
    </div>
  )
}

export default Intro