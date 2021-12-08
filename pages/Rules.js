import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useWindowWidth from "../hooks/useWidth";

const Rules = () => {
  return (
    <div className={`${"bg-skeleton"} bg-cover h-screen overflow-auto `}>
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
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </Head>
      <Navbar btnName="Home" btnName2="Leaderboard" isSignedIn="false" />
      <div
        className={`flex flex-col items-center justify-center p-10 sm:p-4 bg-black bg-opacity-75`}
      >
        <div className="flex flex-col items-center justify-center  text-white  ">
          <h1 className="mb-2 font-archivo text-2xl">RULES</h1>
          <ul className="flex flex-col font-sm md:font-xl font-orbit">
            <li className="my-1 font-md">
              There will be several levels with increasing difficulty.
            </li>
            <li className="my-1">A player can only be in one team.</li>
            <li className="my-1">
              One player will create the team and another member can join by
              entering the team code.
            </li>
            <li className="my-1">
              Once you join/create a team you cannot leave
            </li>
            <li className="my-1">
              Answers can be multiword. You need to gives spaces between them.
            </li>
            <li className="my-1">Answers aren't case-sensitive.</li>
            <li className="my-1">
              You cannot proceed to the next level without completing the
              current level.
            </li>
            <li className="my-1">
              Hints will be released as per the number of teams stuck on a
              particular question.
            </li>
            <li className="my-1">Refresh the page to see hints.</li>
            <li className="my-1">Seeing a hint won't cost any penalty.</li>
            <li className="my-1">
              Leaderboard will be decided according to the time taken by teams
              to complete levels.
            </li>
          </ul>
        </div>
      </div>
      <Footer className="bg-opacity-50" />
    </div>
  );
};

export default Rules;
