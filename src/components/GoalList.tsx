import Goal from "./Goal";
import { Goal as GoalProps } from "../App";

type GoalListProps = {
  goals: GoalProps[];
  onDelete: (id: number) => void;
};

export default function GoalList({ goals, onDelete }: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal id={goal.id} title={goal.title} onDelete={onDelete}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
}
