import { PropsWithChildren } from "react";

// type GoalProps = {
//   title: string;
//   // description: string;
//   children: ReactNode;
// };

type GoalProps = PropsWithChildren<{ title: string }>;

export default function Goal({ title, children }: GoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
