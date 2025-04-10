

import MeetingTypeList from '@/components/MeetingTypeList';
import { currentUser } from '@clerk/nextjs/server';

const Home = async () => {
const now = new Date ();
  
const time = now.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });
const date = (new Intl.DateTimeFormat('en-NG', { dateStyle: 'full' })).format(now);
const user = await currentUser()
console.log (user)

return (



 <section className=' flex size-full flex-col gap-10 text-white'> 
 <div className='h-[303px] w-full rounded-[20px] bg-hero bg-cover'>

<div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>

<h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal ">
    Hi  <span className='bg-purple-1 font-extrabold '> {user?.username} </span>any meeting today ?
  </h2>

<div className="flex flex-col gap-2">
<h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
<p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
</div>
</div>

 </div>

<MeetingTypeList/>
 </section>
  )
}

export default Home
