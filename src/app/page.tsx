import Link from 'next/link'
import { ShieldCheckIcon, UserGroupIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Full-screen background image with overlay */}
      <div className="fixed inset-0 z-0 bg-[url('/images/security-team.jpg')] bg-cover bg-center" />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/80 via-black/70 to-red-900/80" />

      {/* Hero section content aligned far left, bigger on desktop */}
      <div className="relative z-10 flex items-center min-h-[80vh] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-80 sm:pt-56 md:pt-0 justify-start">
        <div className="w-full max-w-3xl text-left lg:ml-0">
          <a href="#" className="inline-flex space-x-6">
            <span className="rounded-full bg-red-600/10 px-3 py-1 text-lg font-semibold leading-6 text-red-400 ring-1 ring-inset ring-red-600/10">
              What's new
            </span>
            <span className="inline-flex items-center space-x-2 text-lg font-medium leading-6 text-gray-300">
              <span>Just shipped v1.0</span>
            </span>
          </a>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Professional Event Security
          </h1>
          <p className="mt-6 text-lg sm:text-2xl md:text-3xl leading-9 text-gray-200 drop-shadow">
            Book experienced bouncers and security personnel for your events. We provide reliable, professional security services to ensure your event runs smoothly and safely.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
            <Link
              href="/book"
              className="rounded-md bg-red-600 px-7 py-4 text-lg font-bold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Book Now
            </Link>
            <Link href="/about" className="text-lg font-semibold leading-6 text-white hover:text-red-400">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-400">Why Choose Us</h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Everything you need for event security
          </p>
          <p className="mt-6 text-base sm:text-lg md:text-xl leading-8 text-gray-200">
            Our comprehensive security solutions are designed to meet your specific needs, ensuring a safe and successful event.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 md:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-2xl bg-black/80 p-8 shadow-lg ring-1 ring-red-900/40">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <ShieldCheckIcon className="h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                Professional Security
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-200">
                <p className="flex-auto">Our bouncers are highly trained professionals with extensive experience in event security.</p>
              </dd>
            </div>
            <div className="flex flex-col rounded-2xl bg-black/80 p-8 shadow-lg ring-1 ring-red-900/40">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <UserGroupIcon className="h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                Flexible Staffing
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-200">
                <p className="flex-auto">We provide the right number of security personnel based on your event size and requirements.</p>
              </dd>
            </div>
            <div className="flex flex-col rounded-2xl bg-black/80 p-8 shadow-lg ring-1 ring-red-900/40">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <ClockIcon className="h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                24/7 Availability
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-200">
                <p className="flex-auto">Book security personnel for any time of day or night, any day of the week.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative z-10 bg-gradient-to-r from-red-900/90 to-black/90">
        <div className="px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to secure your event?
              <br />
              Book your security team today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-8 text-red-200">
              Don't leave your event's security to chance. Our professional team is ready to ensure your event runs smoothly and safely.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                href="/book"
                className="rounded-md bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link href="/contact" className="text-base font-semibold leading-6 text-white hover:text-red-400">
                Contact us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="pb-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} pappuwalker. All rights reserved.
        </div>
      </div>
    </div>
  )
}
