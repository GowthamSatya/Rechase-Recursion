import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function leaderboard() {
  return (
    <div className="bg-skeleton flex flex-col h-screen">
      <Head>
        <title>REChase</title>
        <link rel="icon" href="/favicon.ico" />
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
      <Navbar btnName="Home" btnName2="Rules" isSignedIn="true" />
      <div className="bg-black bg-opacity-75 text-white flex h-100 overflow-auto">
        <table className="p-10 flex flex-col items-center justify-between w-full ">
          <thead className=" flex justify-evenly w-full">
            <th>Rank</th>
            <th>Team Name</th>
            <th>Score</th>
          </thead>
          <tbody className="w-full flex flex-col items-center">
            <tr>
              <td>1</td>
              <td>Anuj Patel</td>
              <td>100</td>
            </tr>
            <tr>
              <td>2</td>
              <td>test_rechase</td>
              <td>60</td>
            </tr>
            <tr>
              <td>3</td>
              <td>level 11 testing</td>
              <td>10</td>
            </tr>
            <tr>
              <td>4</td>
              <td>POP</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>sasuke</td>
              <td>0</td>
            </tr>
            <tr>
              <td>6</td>
              <td>cyclone</td>
              <td>0</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Team Anuj</td>
              <td>0</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Team by Demol</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer className="bg-opacity-50" />
    </div>
  );
}
