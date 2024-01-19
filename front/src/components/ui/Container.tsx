import { cn } from "../../lib/utils";
import { ComponentProps } from "react";

export type ContainerProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <section className="after:bg-zigzag after:absolute top-0 right-0 after:border-[#e5e7eb] after:w-full after:h-8">
      <div className={cn("mx-auto w-[1280px] py-6 sm:py-8", className)}>
        {children}
      </div>
    </section>
  );
}
