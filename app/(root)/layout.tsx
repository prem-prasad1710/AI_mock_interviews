import { ReactNode } from 'react'
import { Toaster } from 'sonner'

const Rootlayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  )
}

export default Rootlayout
