import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoaderOrChild({
  loading,
  children,
  className,
}: {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return loading ? (
    <div className={cn("flex items-center justify-center h-full")}>
      <Loader2 className={cn("h-4 w-4 animate-spin", className)} />
    </div>
  ) : (
    <>{children}</>
  );
}
