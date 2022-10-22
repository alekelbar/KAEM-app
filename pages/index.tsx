import type { GetServerSideProps, NextPage } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import { signOut } from "next-auth/react";


type HomeProps = {
  session?: Session
}

const Home: NextPage = ({ session }: HomeProps) => {

  // Definir aquí que el usuario estara en el context...
  console.log(session);
  return (
    <div>


      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>{session?.user?.name}</div>
      <div><p>{session?.user?.email}</p></div>
      <figure>
        <img src={session?.user?.image as string} alt="an image..." />
      </figure>
      <button onClick={() => { signOut() }}>Sign out</button>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      session,
    }
  }
}

export default Home
