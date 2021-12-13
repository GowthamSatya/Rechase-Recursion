import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { questionsData } from "../../helpers/questions";
import { QuestionBox } from "../../components/Question";
import { useSession } from "next-auth/client";

const QuestionPage = ({ users }) => {
  const [session, loading] = useSession();
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState({});
  const [clicked, setClicked] = useState(false);
  const [questionId, setQuestionId] = useState(1);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!router.isReady) return;
    const questionId = router.query.questionId;
    questionsData.map((question) => {
      if (question.id == questionId) {
        setQuestion(question);
      }
    });
  }, [router.isReady]);

  const currentUser =
    session && users.filter((user) => user.username == session.user?.name);

  useEffect(() => {
    if (!currentUser) return;
    setUser(currentUser[0]);
  }, [currentUser]);

  if (user && (user.score < question.id - 1 || user.score > question.id - 1)) {
    if (user.score == 3) {
      redirectTo("/");
    } else {
      redirectTo(`/questions/${user.score + 1}`);
    }
  }

  return (
    <Auth>
      <div>
        <QuestionBox
          id={question.id}
          question={question.question}
          value={answer}
          onAnswerChange={(e) => {
            e.preventDefault();
            setAnswer(e.target.value);
          }}
          onSubmit={async () => {
            if (answer === question.answer) {
              await user.score++;
              const response = await fetch(
                `https://stormy-plateau-60436.herokuapp.com/users/${user.id}`,
                {
                  method: "PATCH",
                  body: JSON.stringify({
                    score: question.id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              setClicked(true);

              const body = await response.json();
            } else {
              alert("Wrong answer");
              redirectTo(`/questions/${question.id}`);
            }
          }}
        />
      </div>
    </Auth>
  );
};

function redirectTo(href) {
  window.location.href = href;
}

function Auth({ children, users }) {
  const [session, loading] = useSession();
  const router = useRouter();
  const isUser = !!session?.user;
  useEffect(() => {
    if (loading) return;
    if (!isUser) {
      alert("Please login to answer the question");
      router.push("/");
    }
  }, [isUser, loading]);

  if (isUser) {
    return children;
  }
  return <div>Loading...</div>;
}

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
    revalidate: 1,
  };
}

export default QuestionPage;
