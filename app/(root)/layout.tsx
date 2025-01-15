import StreamVideoProvider from '@/providers/StreamClientProvider';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ReactNode } from 'react';


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
<main>
  <StreamVideoProvider>

    {children}
    </StreamVideoProvider>
</main>
  )
}

export default RootLayout