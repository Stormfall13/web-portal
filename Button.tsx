type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean
};

export default function Button({
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`primary` disabled? : 'disabled' : ''}
      onClick={onClick}
      disabled
    >
      {children}
    </button>
  );
}