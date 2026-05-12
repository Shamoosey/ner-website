interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function Button({ children, disabled = false, className = "", ...props }: ButtonProps) {
  const baseClassName = "bg-dirt p-2 hover:underline cursor-pointer text-paler text-xl font-lato font-bold";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const combinedClassName = [baseClassName, disabledClasses, className].filter(Boolean).join(" ");

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
