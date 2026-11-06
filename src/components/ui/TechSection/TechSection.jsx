export function TechSection({title, children}) {
    return (
        <article className="rounded-2xl bg-(--technology-background-color) p-8 pb-16 outline-1 outline-solid outline-(--border-color)">
            <h3 className="mb-10 text-center text-(length:--large-font-size) font-bold">{title}</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-6">
                {children}
            </div>
        </article>
    )
}
