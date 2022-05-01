import { getSession, UserProvider } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import { AppPropsType } from "next/dist/shared/lib/utils";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/login",
        permanent: false,
      },
    };
  } else {
    console.log(session);
    return {
      redirect: {
        destination: "/app",
        permanent: false,
      },
    };
  }
};
