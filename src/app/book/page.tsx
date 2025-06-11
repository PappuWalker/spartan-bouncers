'use client'

import { useState } from 'react'
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function BookPage() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    location: '',
    numberOfGuests: '',
    numberOfBouncers: '',
    additionalInfo: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-black py-12 sm:py-16 md:py-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">Book Your Security</h2>
          <p className="mt-2 text-base sm:text-lg md:text-xl leading-8 text-red-200">
            Fill out the form below to request bouncers for your event.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-14 bg-black rounded-xl shadow-lg ring-1 ring-red-900/40 p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="eventName" className="block text-sm font-semibold leading-6 text-white">
                Event Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="eventName"
                  id="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-zinc-900 text-white shadow-sm ring-1 ring-inset ring-red-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="eventDate" className="block text-sm font-semibold leading-6 text-white">
                Event Date
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="eventDate"
                  id="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-zinc-900 text-white shadow-sm ring-1 ring-inset ring-red-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="eventTime" className="block text-sm font-semibold leading-6 text-white">
                Event Time
              </label>
              <div className="mt-2.5">
                <input
                  type="time"
                  name="eventTime"
                  id="eventTime"
                  value={formData.eventTime}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-zinc-900 text-white shadow-sm ring-1 ring-inset ring-red-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="location" className="block text-sm font-semibold leading-6 text-white">
                Event Location
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-zinc-900 text-white shadow-sm ring-1 ring-inset ring-red-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="numberOfGuests" className="block text-sm font-semibold leading-6 text-white">
                Expected Number of Guests
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="numberOfGuests"
                  id="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-zinc-900 text-white shadow-sm ring-1 ring-inset ring-red-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="numberOfBouncers" className="block text-sm font-semibold leading-6 text-white">
                Number of Bouncers Needed
              </label>
              <div className="mt-2.5">
                <select
                  name="numberOfBouncers"
                  id="numberOfBouncers"
                  value={formData.numberOfBouncers}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-zinc-900 text-white shadow-sm ring-1 ring-inset ring-red-900 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  required
                >
                  <option value="">Select number</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="additionalInfo" className="block text-sm font-semibold leading-6 text-white">
                Additional Information
              </label>
              <div className="mt-2.5">
                <textarea
                  name="additionalInfo"
                  id="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 bg-zinc-900 text-white shadow-sm ring-1 ring-inset ring-red-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="block w-full rounded-md bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 