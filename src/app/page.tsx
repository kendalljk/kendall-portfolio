import Image from 'next/image'

export default function Home() {

  const handleScroll = () => {
    
  }

  return (
    <main className="home flex min-h-screen flex-col items-center p-24">
      <div className=" max-w-5xl w-full items-center flex flex-col align-middle font-oswald">
        <h1 className='text-6xl self-start my-10 text-slate-700'>Full Stack Web Developer</h1>
        <p className='w-1/2 self-start text-slate-500'>Full Stack Developer with a passion for blending front-end creativity with technical precision to create compelling digital experiences. My passion for innovation fuels my desire to explore new technologies and design trends, striving for excellence in both form and function.</p>
      </div>
    </main>
  )
}
