import Goal from "./Goal";
import { Goal as GoalProps } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type GoalListProps = {
  goals: GoalProps[];
  onDelete: (id: number) => void;
};

export default function GoalList({ goals, onDelete }: GoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have set no goals yet!</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = <InfoBox mode="warning">You have set too many goals...</InfoBox>;
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal id={goal.id} title={goal.title} onDelete={onDelete}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </>
  );
}
