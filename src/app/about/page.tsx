import { ShieldCheckIcon, UserGroupIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Professional Training',
    description: 'All our bouncers undergo rigorous training in security protocols, conflict resolution, and customer service.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Experienced Team',
    description: 'Our team consists of experienced security professionals with backgrounds in law enforcement and private security.',
    icon: UserGroupIcon,
  },
  {
    name: '24/7 Availability',
    description: 'We provide security services around the clock, ensuring your event is protected at any time.',
    icon: ClockIcon,
  },
  {
    name: 'Quality Service',
    description: 'We pride ourselves on providing top-notch security services with a focus on professionalism and customer satisfaction.',
    icon: StarIcon,
  },
]

export default function AboutPage() {
  return (
    <div className="bg-black py-12 sm:py-16 md:py-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-400">About Us</h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Professional Event Security Services
          </p>
          <p className="mt-6 text-base sm:text-lg md:text-xl leading-8 text-red-200">
            Spartan Bouncers provides professional security services for events of all sizes. Our team of experienced security personnel ensures your event runs smoothly and safely.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 md:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col rounded-2xl bg-black p-8 shadow-lg ring-1 ring-red-900/40">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-red-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-red-200">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 