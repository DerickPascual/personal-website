import PortfolioCard from "./PortfolioCard";

export default function PortfolioFeed() {
    return (
        <div>
            <p className="text-md text-muted-foreground text-pretty leading-relaxed mb-4">
                I work full-stack with a frontend focus. Here are some of the projects I've worked on:
            </p>
            <div className="flex flex-col gap-4">
                <PortfolioCard 
                    title="Rice Menus"
                    description="A web app that allows you to view the menus for the different dining halls at Rice University."
                    technologies={["React", "TypeScript", "Tailwind CSS"]}
                    period="2023"
                />
            </div>
        </div>
    )
}