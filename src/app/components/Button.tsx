import { ReactNode } from 'react';

type StyleOption = 'success' | 'danger';

function getStyleClasses(style: StyleOption): string {
  switch (style) {
    case 'danger':
      return 'text-neutral-100 bg-red-500 hover:bg-red-700';
    case 'success':
      return 'text-neutral-100 bg-lime-500 hover:bg-lime-700';
  }
}

function ButtonInternal({ icon, children, style }: Props & { style: StyleOption }) {
  const styleClasses = getStyleClasses(style);

  return (
    <button className={`${styleClasses} flex px-4 py-2 border rounded`}>
      {icon}
      {children}
    </button>
  );
}

interface Props {
  children: ReactNode;
  onClick: () => void;
  icon?: ReactNode;
}

export const SuccessButton = (props: Props) => <ButtonInternal {...props} style="success" />;
export const DangerButton = (props: Props) => <ButtonInternal {...props} style="danger" />;
