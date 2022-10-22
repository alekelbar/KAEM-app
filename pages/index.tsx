import { Button, Typography } from '@mui/material';
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
      <Typography variant='h1'>Hello World</Typography>
      <div>{session?.user?.name}</div>
      <div><p>{session?.user?.email}</p></div>
      <figure>
        <img src={session?.user?.image as string} alt="an image..." />
      </figure>
      <Button onClick={() => { signOut() }} variant='contained'>
        <Typography variant='body1'>sign Out</Typography>
      </Button>
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
