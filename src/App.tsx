import Goal from "./components/Goal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.png";
import { useState } from "react";

type Goal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: "React + TypeScript",
        description: "What's your goal?",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals image" }}>
        <h1>Your Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal title={goal.title}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </main>
  );
}
