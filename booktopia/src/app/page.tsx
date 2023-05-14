import Image from 'next/image'

export default function Home() {
  return (
    <main className="absolute inset-0 flex justify-center items-center">
         <div className='flex flex-col items-center justify-center gap-3'>
          <Image src='/booktopia-website-favicon-color.png' alt='logo' width={100} height={100}/>
          <div> Booktopia Chat</div>
          </div>
    </main>
  )
}
