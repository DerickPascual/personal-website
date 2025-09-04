import { Badge } from "@/components/ui/badge"

const badgeColors = {
    "react": "text-emerald-700 border-emerald-700/20 bg-emerald-700/10",
    "typescript": "text-blue-700 border-blue-600/20 bg-blue-600/10",
    "c#": "text-indigo-700 border-indigo-600/20 bg-indigo-600/10",
    "tailwind css": "text-cyan-700 border-cyan-600/20 bg-cyan-600/10",
    ".net core": "text-purple-700 border-purple-600/20 bg-purple-600/10",
    "sql server": "text-red-700 border-red-700/20 bg-red-700/10",
    "apollo graphql": "text-orange-700 border-orange-600/20 bg-orange-600/10",
    "next.js": "text-teal-600 border-teal-600/20 bg-teal-600/10",
}

export function BadgeGroup({
    badges
}: {
    badges: string[]
}) {
    return (
        <div className="flex flex-wrap gap-2"> {
            badges.map((badge) => (
                <Badge key={badge} variant="outline" className={badgeColors[badge.toLowerCase() as keyof typeof badgeColors]}>
                    {badge}
                </Badge>
            ))
        } </div>
    )
}