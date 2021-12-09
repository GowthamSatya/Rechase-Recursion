import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { questionsData } from "../../helpers/questions";
import { QuestionBox } from "../../components/Question";
import { useSession } from "next-auth/client";

const QuestionPage = ({ users }) => {
  const [session, loading] = useSession();
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState({});
  useEffect(() => {
    if (!router.isReady) return;
    const questionId = router.query.questionId;
    questionsData.map((question) => {
      if (question.id == questionId) {
        setQuestion(question);
      }
    });
  }, [router.isReady]);

  useEffect(() => {
    localStorage.getItem("score");
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  console.log(score);
  console.log(question);

  const finduser =
    session && users && users.filter((u) => u.username === session.user.name);

  return (
    <div>
      <QuestionBox
        id={question.id}
        question={question.question}
        value={answer}
        onAnswerChange={(e) => {
          e.preventDefault();
          setAnswer(e.target.value);
        }}
        href={
          answer === question.answer && question.id === questionsData.length
            ? "/"
            : `http://localhost:8000/questions/${question.id + 1}`
        }
        onSubmit={async (e) => {
          if (answer === question.answer) {
            setScore(score + 1);

            const response = await fetch(
              `http://localhost:3000/users/${finduser[0].id}`,
              {
                method: "PATCH",
                body: JSON.stringify({
                  score: finduser[0].score + 1,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            const body = await response.json();
          } else {
            alert("Wrong answer");
          }
        }}
      />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { questionId: "1" } },
      { params: { questionId: "2" } },
      { params: { questionId: "3" } },
    ],

    fallback: true,
  };
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
    revalidate: 1,
  };
}

export default QuestionPage;
