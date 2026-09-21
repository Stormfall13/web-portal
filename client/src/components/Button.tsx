type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button"
}: ButtonProps) {
  return (
    <button
      className={ disabled ? 'primary disabled' : 'primary' }
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}