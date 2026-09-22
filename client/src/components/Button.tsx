type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `${className} ${disabled ? "disabled" : ""}`.trim();

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}