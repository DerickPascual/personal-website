import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ExperienceCard(
    {
        title,
        company,
        period,
        description,
    }: {
        title: string;
        company: string;
        period: string;
        description: string;
    }
) {
    return (
        <div>
            <Card className="gap-1 pt-4 pb-4">
                <CardHeader className="flex justify-between items-center">
                    <CardTitle>{title} @ {company}</CardTitle>
                    <Badge variant="secondary" className="py-1 px-2">{period}</Badge>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                    <p>{description}</p>
                </CardContent>
            </Card>
        </div>
    )
}