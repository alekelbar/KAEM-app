import { LockClockOutlined } from "@mui/icons-material";
import { Box, Container, Grid, Paper } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

const Login: NextPage = () => {

  const containerStyles = {
    widht: '100vw',
    height: '100vh',
    bgcolor: 'red'
  }

  return (
    <div>
      <Grid container sx={containerStyles} >
        <Container component={Paper} elevation={5} maxWidth='xs' >
          <Box>
            <LockClockOutlined />
          </Box>
        </Container>
      </Grid>
    </div >
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) return {
    redirect: {
      destination: '/',
      permanent: false,
    }
  }

  return {
    props: {
      status: 'unauthenticated',
    }
  }
}


export default Login;