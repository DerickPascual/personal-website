import PortfolioCard from "./PortfolioCard";
import { PortfolioProject } from "@/types/portfolio";
import portfolioData from "@/data/portfolio.json";

export default function PortfolioFeed() {
    const projects: PortfolioProject[] = portfolioData;

    return (
        <div>
            <p className="text-sm text-primary font-medium text-pretty leading-relaxed mb-4">
                I develop full-stack with a focus on frontend. Here&apos;s some of my work:
            </p>
            <div className="flex flex-col gap-4">
                {projects.map((project) => (
                    <PortfolioCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        period={project.period}
                        organization={project.organization}
                        images={project.images}
                        videos={project.videos}
                        githubUrl={project.githubUrl}
                        websiteUrl={project.websiteUrl}
                        websiteInProgress={project.websiteInProgress}
                    />
                ))}
            </div>
        </div>
    )
}