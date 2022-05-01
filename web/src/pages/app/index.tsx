import { getSession, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export default function App() {
  const { user } = useUser();

  return (
    <h1>
      {" "}
      Home <pre>{JSON.stringify(user, null, 2)}</pre>{" "}
      <a href="/api/auth/logout">Logout</a>
    </h1>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
