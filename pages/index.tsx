import { Box, Button, Typography } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'
import { signOut } from "next-auth/react";
import { useContext, useEffect } from 'react';
import ResponsiveAppBar from 'src/components/ResposiveAppBar';
import { UserContext } from 'src/context/UserContext';


type HomeProps = {
  session?: Session
}

const Home: NextPage = ({ session }: HomeProps) => {

  // Alojar el usuario en el context
  const userContext = useContext(UserContext);
  const { handleUser } = userContext;
  useEffect(() => {
    handleUser(session?.user ?? { id: '' });
  }, [])


  return (
    <Box>
      <ResponsiveAppBar image={userContext.user.image} />
      <Box>
        <Button onClick={() => { signOut() }} variant='contained'>
          <Typography variant='body1'>sign Out</Typography>
        </Button>
      </Box>
    </Box>
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
