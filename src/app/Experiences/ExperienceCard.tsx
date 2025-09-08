import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { BadgeGroup } from "./BadgeGroup";

export default function ExperienceCard(
    {
        title,
        company,
        period,
        description,
        badges,
        img,
    }: {
        title: string;
        company: string;
        period: string;
        description: string;
        badges: string[];
        img: string;
    }
) {
    return (
        <Card className="gap-1 pt-4 pb-4">
            <CardHeader className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center gap-2">
                    <span className="text-primary font-semibold">{title} at <img src={img} alt={company} className="inline-block w-4 h-4 align-text-bottom rounded-full border border-border mr-1" />{company}</span>
                </div>
                <Badge variant="secondary" className="py-1 px-2 self-start sm:self-center mb-4 sm:mb-0">{period}</Badge>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm flex flex-col gap-2">
                <p>{description}</p>
                
                <div className="flex flex-wrap gap-2">
                    <BadgeGroup badges={badges} />
                </div>
            </CardContent>
        </Card>
    )
}