import { PropsWithChildren } from "react";

// type GoalProps = {
//   title: string;
//   // description: string;
//   children: ReactNode;
// };

type GoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function Goal({ title, id, children, onDelete }: GoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// const Goal: FC<GoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default Goal;
