import Goal from "./components/Goal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.png";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals image" }}>
        <h1>Your Goals</h1>
      </Header>
      <Goal title="React + TypeScript">
        <p>Hello there</p>
      </Goal>
    </main>
  );
}
