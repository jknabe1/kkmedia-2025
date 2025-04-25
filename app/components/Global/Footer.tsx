export default function Footer() {
  return (
    <footer role="contentinfo" className="px-[--x-spacing] gap-gutter text-caption grid grid-flow-dense grid-cols-12 gap-y-10 pb-12 pt-20 md:pt-80" id="footer">
      <nav className="gap-gutter col-span-full flex flex-col justify-between gap-y-12 sm:flex-row md:col-span-6" aria-label="Sitemap">
        <ul className="flex flex-1 flex-col gap-6 text-center sm:gap-2 sm:text-start">
          <li>
            <a target="_self" className="hover:underline contrast-more:underline" href="/board-of-directors">Board of directors→</a>
          </li>
        </ul>
        <ul className="flex flex-1 flex-col gap-6 text-center sm:gap-2 sm:text-start">
          <li>
            <a target="_blank" className="hover:underline contrast-more:underline" href="https://www.linkedin.com/company/noa-the-north-alliance/">LinkedIn →</a>
          </li>
        </ul>
      </nav>
      <div className="gap-gutter col-span-full flex h-fit flex-col-reverse gap-y-10 sm:flex-row md:col-span-6">
        <p className="flex-1 text-center sm:text-start">
          <small>© 2025 The North Alliance</small>
        </p>
        <svg fill="currentColor" viewBox="0 0 67 24" className="w-full flex-1">
          <path d="M24.456 9.516c0-5.255 4.3-9.516 9.605-9.516s9.605 4.261 9.605 9.516-4.3 9.516-9.605 9.516-9.605-4.26-9.605-9.516m5.284.001c0 2.364 1.935 4.281 4.321 4.281s4.321-1.917 4.321-4.281-1.934-4.281-4.321-4.281-4.321 1.917-4.321 4.281m-13.794 5.984L6.281.332H0v23.666h5.452V9.085l9.504 14.913h6.442V.332h-5.452zM57.391.332h-6.879l-8.085 23.666h5.939l1.184-3.929h9.232l1.333 3.929h6.11zm-6.28 14.56 2.782-9.226 3.131 9.226z"></path>
        </svg>
      </div>
    </footer>
  );
}
