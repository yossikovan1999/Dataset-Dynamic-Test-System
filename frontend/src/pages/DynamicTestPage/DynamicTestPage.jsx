import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:3000/api/data";

function DynamicTestPage({ data }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    function setRandom() {
      const randomIndex = Math.floor(Math.random() * data.length);

      const row = data[randomIndex];

      if (!row) {
        return;
      }

      const q = `When Country = ${row["country_txt"]} and year = ${row.iyear} → what is attack type?`;
      const a = row["attacktype1_txt"];

      setQuestion(() => q);
      setAnswer(() => a);
    }

    setRandom();
  }, [data]);

  async function addPoints() {
    try {
      const result = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ score : 10 }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await result.json();
    
      if(!result.ok){       
        return navigate("/admin/login")
      }

    } catch (error) {
      log.error(error);
    }
  }

  async function validateAnswer(e) {
    e.preventDefault();

    if (answer === userAnswer) {
       await addPoints();
    }
  }

  return (
    <main>
      <h1>Terror Data Quiz</h1>
      <section className="question-section">
        <h2>{question}</h2>
        <form onSubmit={validateAnswer}>
          <div className="input-container">
            <label>Your answer:</label>
            <input
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          </div>
          <button>Submit Answer</button>
        </form>
      </section>
      <section>
        <Link to="/">Data</Link>
      </section>
    </main>
  );
}

export default DynamicTestPage;
