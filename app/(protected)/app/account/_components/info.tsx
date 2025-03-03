/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Info({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between border-2 border-slate-600 rounded-md px-4 py-2 hover:bg-slate-800 hover:border-slate-500 transition-all duration-300",
        "hover:text-white",
        "hover:cursor-pointer"
      )}
    >
      <div className="text-lg font-thin text-muted-foreground">{label}</div>
      <ArrowRight className="w-4 h-4 text-muted-foreground ml-10" />
    </Link>
  );
}
