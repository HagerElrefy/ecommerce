import React from 'react'
import ContactsForm from '../components/ContactsForm'

function Contacts() {
  return (
    <div className='flex justify-between items-center my-20 mx-2 md:mx-20 lg:mx-32 lg:border rounded-md '>
      <div className='w-1/2 lg:flex self-start h-full bg-PrimaryBlue hidden'>
        <img src={'images/call.webp'} className='h-full aspect-square object-cover -mx-20' alt="" />
        <div className='text-gray-200 flex flex-col justify-evenly'>
          <h3 className='font-bold text-lg'>Get in touch</h3>
          <ul>
            <li>Contact@ecomm.ng</li>
            <li>+233 522 995 1</li>
            <li>20 Prince Hakerem Lekki
              Phase 1, Lagos.</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col justify-center gap-5 w-full lg:w-1/2'>
        <ContactsForm />
      </div>

    </div>
  )
}

export default Contacts