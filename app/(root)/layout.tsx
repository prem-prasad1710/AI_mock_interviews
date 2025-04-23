import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import Link from 'next/link'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation';
const Rootlayout = async({children}:{children:ReactNode}) => {
  const isuserAuthenticated = await isAuthenticated();
  if(!isuserAuthenticated) {
    redirect('/sign-in');
  }
  return (
   <div className='root-layout'>
    <nav>
      <Link href="/" className='flex items-center gap-2' />
      <Image src="logo.svg" alt='logo' height={32} width={38} />
      <h2 className='text-primary-100'>PrepWise</h2>
    </nav>
    {children}
    <Toaster /> 
   </div>
  )
}

export default Rootlayout
