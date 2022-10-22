import { GetServerSideProps, NextPage } from "next";
import { getSession, signIn } from "next-auth/react";

const Login: NextPage = () => {
  return (
    <div>
      <div>"Hello from login!!"</div>
      <button onClick={() => { signIn() }}>Sign in</button>
    </div>
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