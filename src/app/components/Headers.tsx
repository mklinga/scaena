import { HTMLAttributes } from 'react';

export function H1(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className="text-4xl mb-5" {...props} />;
}
