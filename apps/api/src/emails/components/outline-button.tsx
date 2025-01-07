import { Button } from "@react-email/components";

export function OutlineButton({
  children,
  className,
  variant = "default",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary";
  href?: string;
}) {
  const isDefault = variant === "default";
  const backgroundColor = isDefault ? "#000000" : "#FFFFFF";
  const textColor = isDefault ? "#FFFFFF" : "#000000";

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className="absolute left-[5px] top-[5px] h-full w-full"
        style={{ border: "1px solid #000000" }}
      />
      <Button
        href={href}
        className="font-mono font-medium px-4 py-4 relative z-10"
        style={{
          backgroundColor,
          color: textColor,
          border: variant === "secondary" ? "1px solid #000000" : "none",
        }}
      >
        {children}
      </Button>
    </div>
  );
}