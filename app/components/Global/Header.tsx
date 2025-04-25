import Link from "next/link";

export default function Header() {
  return (
    <header className="w-auto px-[--x-spacing] py-8 mx-auto flex justify-between fixed items-center md:pt-6 left-0 right-0 pointer-events-none z-50 mix-blend-difference text-white pb-24">
      <div className="flex">
        <Link className="mr-8 mix-blend-difference text-white" href="/">
        <div>
          <div className="inline-flex relative self-start transition-opacity duration-[2000ms] ease-out-expo max-w-full items-center whitespace-pre font-mono uppercase leading-[1.125] text-[1.2rem] tracking-[0.04em]">
            <div className="absolute w-[0.8em] h-[0.8em] bg-current mt-[-0.1em] pointer-events-none transition-colors"></div>
            <span className="pl-[1.8rem] truncate">019 MEDIA</span>
          </div>
        </div>
      </Link>
      </div>
      <div className="pointer-events-auto">
        <nav className=" top-8 right-8 flex gap-[1px] z-floating-menu md:top-6 md:right-6">
          <button className="font-mono uppercase leading-[1.125] text-[1.2rem] tracking-[0.04em] inline-flex justify-center cursor-pointer transition-colors ease-out-expo border border-foreground py-2 px-4 text-background bg-foreground hover:bg-background hover:text-foreground hover:border-foreground items-center px-3 relative expand-hitbox after:!right-0" aria-label="Search">
            <svg width="1rem" height="1rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.25023 7.50047C6.04529 7.50047 7.50047 6.04529 7.50047 4.25023C7.50047 2.45518 6.04529 1 4.25023 1C2.45518 1 1 2.45518 1 4.25023C1 6.04529 2.45518 7.50047 4.25023 7.50047Z" stroke="currentColor" strokeWidth="1.00007" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9.00133 9.00133L6.82617 6.82617" stroke="currentColor" strokeWidth="1.00007" strokeLinecap="square" strokeLinejoin="round"></path>
            </svg>
          </button>
        <button className="font-mono uppercase leading-[1.125] text-[1.2rem] tracking-[0.04em] inline-flex justify-center cursor-pointer transition-colors ease-out-expo border border-foreground py-2 px-4 text-background bg-foreground hover:bg-background hover:text-foreground hover:border-foreground md:px-5 relative expand-hitbox after:!left-0">Menu</button>
      </nav>
    </div>
  </header>
  );
}
