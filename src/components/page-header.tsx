import { cn } from "@/lib/utils"

type PageHeaderProps = {
  title: string
  subtitle: string
  className?: string
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <section className={cn("bg-secondary py-16 md:py-20", className)}>
      <div className="container mx-auto text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
