'use client'
import React, { useState } from 'react'
import { IconBrandGoogle } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/config'

export default function SignupFormDemo() {
  const [loginStatus, setLoginStatus] = useState<string>('')
  const router = useRouter()

  async function handleGoogleSignIn(e) {
    e.preventDefault()
    const provider = new GoogleAuthProvider()

    try {
      // Using popup for sign-in
      const result = await signInWithPopup(auth, provider)

      // The signed-in user info
      const user = result.user
      console.log('Successfully signed in:', user)
      setLoginStatus('Login successful')
      router.push('/')
    } catch (error) {
      console.log(error.report)
      setLoginStatus('You are not an admin, get outta here')
    }
  }

  return (
    <div className="flex justify-center relative my-20 z-0">
      <div className="z-50 shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <form className="my-8" onSubmit={handleGoogleSignIn}>
          <div className="text-2xl font-bold text-center relative block h-10 w-full rounded-md">
            Admin Login &rarr;
          </div>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          <div className="flex flex-col space-y-4">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="submit"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Google
              </span>
            </button>
          </div>
        </form>
        {/* Show login status message */}
        {loginStatus && (
          <div className={`mt-4 text-center font-semibold`}>{loginStatus}</div>
        )}
      </div>
    </div>
  )
}
