import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center w-full h-screen">
        <h1 className="text-4xl text-yellow-600 font-extrabold">Hello world</h1>
      </div>
    </div>
  )
}
