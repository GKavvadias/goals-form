import Goal from "./Goal";
import { type Goal as GoalProps } from "../App";

type GoalListProps = {
  goals: GoalProps[];
};

export default function GoalList({ goals }: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal title={goal.title}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
}
