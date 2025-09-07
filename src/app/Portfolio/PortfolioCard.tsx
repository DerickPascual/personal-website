import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BadgeGroup } from "../Experiences/BadgeGroup";

export default function PortfolioCard(
    {
        title,
        description,
        technologies,
        period
    }: {
        title: string;
        description: string;
        technologies: string[];
        period: string;
    }
) {
    return (
        <Card>
            <CardHeader className="flex justify-between items-center mb-[-16px]">
                <CardTitle>{title}</CardTitle>
                <Badge variant="secondary" className="py-1 px-2">{period}</Badge>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-sm">{description}</p>
                <BadgeGroup badges={technologies} />
            </CardContent>
        </Card>
    )
}