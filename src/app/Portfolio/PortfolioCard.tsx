import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { BadgeGroup } from "../Experiences/BadgeGroup";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PortfolioText from "./PortfolioText";
import PortfolioCarousel from "./PortfolioCarousel";
import ReactMarkdown from "react-markdown";

// Markdown components for organization (more subtle styling)
const organizationMarkdownComponents = {
    a: ({ href, children, ...props }: any) => (
        <a
            href={href}
            className="text-blue-500 font-semibold hover:text-blue-500/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {children}
        </a>
    ),
    p: ({ children }: any) => <span>{children}</span>,
    strong: ({ children }: any) => <strong className="font-medium">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => <code className="bg-muted px-1 rounded text-xs">{children}</code>
};

export default function PortfolioCard(
    {
        title,
        description,
        technologies,
        period,
        images,
        videos,
        organization
    }: {
        title: string;
        description: string;
        technologies: string[];
        period: string;
        images?: string[];
        videos?: string[];
        organization?: string;
    }
) {
    return (
        <Card>
            <CardHeader className="flex justify-between items-start mb-[-4px]">
                <div className="flex flex-col gap-2">
                    <CardTitle>{title}</CardTitle>
                    {organization && (
                        <div className="text-muted-foreground font-semibold text-sm">
                            <ReactMarkdown components={organizationMarkdownComponents}>
                                {organization}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
                <Badge variant="secondary" className="py-1 px-2 mt-[-4px]">{period}</Badge>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <PortfolioText content={description} />
                <PortfolioCarousel images={images} videos={videos} />
                <BadgeGroup badges={technologies} />
            </CardContent>
            <hr className="mx-2" />
            <CardFooter className="my-[-8px]">
                <div className="w-full flex justify-between mt-[-8px]">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-500">
                        <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-500">
                        <Github className="w-4 h-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}