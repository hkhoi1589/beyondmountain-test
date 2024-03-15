export default function Newsletter({ className = "" }) {
  return (
    <section className="py-14">
      <div className={`max-w-screen-xl mx-auto px-4 md:px-8 ${className}`}>
        <div className="max-w-xl">
          <h3 className="text-3xl font-bold">Sign up for our newsletter.</h3>
          <p className="opacity-70 mt-3">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mt-6">
          <form className="flex items-center gap-x-3">
            <div className="relative">
              <svg
                className="w-6 h-6 opacity-50 absolute left-4 inset-y-0 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="input border-neutral-focus pl-12 rounded-full"
              />
            </div>
            <button className="btn btn-primary rounded-full">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
