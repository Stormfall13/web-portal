type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean
};

export default function Button({
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={ disabled ? 'primary disabled' : 'primary' }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}