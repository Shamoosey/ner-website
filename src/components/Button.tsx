interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function Button({ children, disabled = false, className = "", ...props }: ButtonProps) {
  const baseClassName = "bg-dirt px-2 py-1 hover:underline cursor-pointer text-paler italic font-lato font-bold";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const combinedClassName = [baseClassName, disabledClasses, className].filter(Boolean).join(" ");

  return (
    <button className={combinedClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
