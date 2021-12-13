import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamBox from "../components/teamBox";
import Stats from "../components/Stats";
import Request from "../components/JoinTeam";
import JoinTeam from "../components/JoinTeam";
import { useSession } from "next-auth/client";
import Form from "../components/Form";

export default function Home({ users }) {
  const router = useRouter();
  const [session, loading] = useSession();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState({});
  const [teamMate, setTeamMate] = useState({});
  const [teamCode, setTeamCode] = useState(0);
  const finduser =
    session && users.filter((u) => u.username === session.user.name);

  useEffect(() => {
    if (!finduser) return;
    setUser(finduser[0]);
  }, [finduser]);

  useEffect(() => {
    sessionStorage.getItem("teamcode");
  });

  const handleClick = async () => {
    if (!name || !mobile) alert("Please fill all the fields");

    if (mobile.length !== 10) alert("Please enter a valid mobile number");
    else {
      const response = await fetch(
        "https://stormy-plateau-60436.herokuapp.com/users",
        {
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
        }
      );

      const data = await response.json();
      redirectTo("/");
    }
  };

  const handleCreateClick = async (e) => {
    e.preventDefault();
    const code = Math.floor(Math.random() * 10000);
    const response = await fetch(
      `https://stormy-plateau-60436.herokuapp.com/users/${finduser[0].id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamcode: code,
        }),
      }
    );
    redirectTo("/");
    setTeamCode(code);
  };

  const handleJoinClick = (e) => {
    e.preventDefault();
  };

  const handleTeamJoinClick = () => {
    const checkUser =
      session &&
      users.find((u) => {
        if (u.teamcode && u.teamcode.toString() === teamCode) {
          console.log("in if");
          setTeamMate(u);
          console.log(teamMate);
        }
      });
    if (teamMate) {
      alert("Team Request Successfully Sent");
      return;
    }

    alert("Invalid Team Code");
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

      {session && finduser && !finduser[0] && (
        <Form
          onNameChange={(e) => setName(e.target.value)}
          onNumberChange={(e) => setMobile(e.target.value)}
          handleClick={handleClick}
        />
      )}

      {session && user && user.teamcode === undefined && (
        <TeamBox
          onCreateClick={handleCreateClick}
          onJoinClick={handleJoinClick}
        />
      )}
      {/* 
      <JoinTeam
        teamCode={teamCode}
        handleTeamCode={(e) => setTeamCode(e.target.value)}
        handleJoinTeam={handleTeamJoinClick}
      /> */}

      <Navbar btnName="Rules" btnName2="Leaderboard" isSignedIn="true" />

      {finduser && finduser[0] && user && user.teamcode !== undefined ? (
        <Stats
          code={user.teamcode}
          score={user.score}
          continueClick={() => redirectTo(`/questions/${user.score + 1}`)}
        />
      ) : (
        <main className="flex flex-col items-center justify-between h-1/2">
          <p className="typewriter font-orbit mt-10 text-sm lg:text-xl md:text-lg sm:text-lg text-white">
            TEAM AAVISHKAR PRESENTS
          </p>
          <h1 className="heading-jump tracking-widest text-white my-6 md:my-16 text-4xl">
            <span className="up">R</span>
            <span className="down">E</span>
            <span className="up">C</span>
            <span className="down">h</span>
            <span className="up">a</span>
            <span className="down">s</span>
            <span className="up">e</span>
          </h1>

          {session ? (
            finduser && finduser[0] && finduser[0].score >= 3 ? (
              <h1 className="font-orbit text-white text-center font-bold py-2 px-4 rounded">
                You have already taken the quiz
              </h1>
            ) : (
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    redirectTo(
                      `/questions/${finduser && finduser[0].score + 1}`
                    );
                  }}
                  className="mx-4 font-archivo font-bold text-white rounded-lg bg-glow hover:text-white hover:shadow-glow p-2"
                >
                  Take Quiz
                </button>
              </div>
            )
          ) : (
            <h1 className="font-orbit text-white text-center font-bold py-2 px-4 rounded">
              Sign In to Take Quiz
            </h1>
          )}
        </main>
      )}

      <Footer className="absolute bottom-0 bg-opacity-60" />
    </div>
  );
}

function redirectTo(href) {
  window.location.href = href;
}

export async function getServerSideProps(context) {
  const res = await fetch("https://stormy-plateau-60436.herokuapp.com/users");
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
