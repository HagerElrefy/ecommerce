import { memo } from 'react'
import SignInForm from '../components/SignInForm';

function SignIn() {
  return (
    <div className='flex justify-between items-center'>
            <div className='flex flex-col justify-center gap-5 min-h-screen w-full lg:w-1/2'>
            <SignInForm/>
            </div>
            <div className='w-1/2 h-screen bg-PrimaryBlue lg:block hidden'>
                <img src={'images/sign.webp'} className='w-full h-full object-cover' alt="" />
            </div>
        </div>
  )
}

export default memo(SignIn);