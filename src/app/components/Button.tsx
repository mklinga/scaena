import { ReactNode } from 'react';

type StyleOption = 'success' | 'danger' | 'neutral' | 'primary';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  type?: HTMLButtonElement['type'];
}

function getStyleClasses(style: StyleOption): string {
  switch (style) {
    case 'danger':
      return 'text-neutral-100 bg-red-500 hover:bg-red-700';
    case 'neutral':
      return 'text-neutral-900 bg-neutral-100 hover:bg-neutral-300';
    case 'primary':
      return 'text-neutral-100 bg-purple-500 hover:bg-purple-700';
    case 'success':
      return 'text-neutral-100 bg-lime-500 hover:bg-lime-700';
  }
}

export const defaultButtonClasses = 'inline-flex px-4 py-2 border rounded';
function ButtonInternal({ icon, children, className, style, ...rest }: Props & { style: StyleOption }) {
  const styleClasses = getStyleClasses(style);

  return (
    <button className={`${styleClasses} ${defaultButtonClasses} ${className || ''}`} {...rest}>
      {icon}
      {children}
    </button>
  );
}

export const NeutralButton = (props: Props) => <ButtonInternal {...props} style="neutral" />;
export const PrimaryButton = (props: Props) => <ButtonInternal {...props} style="primary" />;
export const SuccessButton = (props: Props) => <ButtonInternal {...props} style="success" />;
export const DangerButton = (props: Props) => <ButtonInternal {...props} style="danger" />;
