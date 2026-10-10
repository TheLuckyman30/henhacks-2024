import "../css/Button.css";

export function Button({
  children,
  ...buttonParams
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button className="button" {...buttonParams}>
      {children}
    </button>
  );
}
