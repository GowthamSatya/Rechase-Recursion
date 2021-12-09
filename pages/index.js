import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSession, signIn, signOut } from "next-auth/client";
import Form from "../components/Form";

export default function Home({ users }) {
  const router = useRouter();
  const [session, loading] = useSession();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const finduser =
    session && users && users.filter((u) => u.username === session.user.name);

  const handleClick = async () => {
    (!name || !mobile) && alert("Please fill all the fields");

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        mobile,
        email: session.user.email,
        username: session.user.name,
        score: 0,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-skeleton h-screen overflow-hidden bg-cover">
      <Head>
        <title>REChase</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-signin-scope" content="profile email"></meta>
        <meta
          name="google-signin-client_id"
          content="958168262361-491v7er5akoh97000chkte553386ec2d.apps.googleusercontent.com"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </Head>

      {session && !finduser.length > 0 && !isSubmitted && (
        <Form
          name={name}
          mobile={mobile}
          onNameChange={(e) => setName(e.target.value)}
          onNumberChange={(e) => setMobile(e.target.value)}
          handleClick={handleClick}
        />
      )}

      <Navbar btnName="Rules" btnName2="Leaderboard" isSignedIn="true" />

      <main className="flex flex-col items-center justify-between h-1/2">
        <p className="typewriter font-orbit text-sm lg:text-xl md:text-lg sm:text-lg text-white">
          TEAM AAVISHKAR PRESENTS
        </p>
        <h1 className="heading-jump tracking-widest font-orbit text-white my-6 md:my-16 text-4xl">
          <span className="r">R</span>
          <span className="E">E</span>
          <span className="c">C</span>
          <span className="h">h</span>
          <span className="a">a</span>
          <span className="s">s</span>
          <span className="e">e</span>
        </h1>

        {session ? (
          finduser && finduser[0] && finduser[0].score > 0 ? (
            <h1 className="font-orbit text-white text-center font-bold py-2 px-4 rounded">
              You have already taken the quiz
            </h1>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/questions/1");
              }}
              className="mx-4 font-archivo font-bold text-white rounded-lg bg-glow hover:text-white hover:shadow-glow p-2"
            >
              Take Quiz
            </button>
          )
        ) : (
          <h1 className="font-orbit text-white text-center font-bold py-2 px-4 rounded">
            Sign In to Take Quiz
          </h1>
        )}
      </main>

      <Footer className="absolute bottom-0 bg-opacity-60" />
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/users");
  const users = await res.json();

  if (!users) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      users,
    },
  };
}
