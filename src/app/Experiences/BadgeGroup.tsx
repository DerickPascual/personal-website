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
    "django": "text-purple-600 border-purple-600/20 bg-purple-600/10",
    "redis": "text-red-600 border-red-600/20 bg-red-600/10",
    "celery": "text-orange-600 border-orange-600/20 bg-orange-600/10",
    "express.js": "text-violet-500 border-violet-500/20 bg-violet-500/10",
    "postgresql": "text-rose-600 border-rose-600/20 bg-rose-600/10",
    "twilio api": "text-green-600 border-green-600/20 bg-green-600/10",
    "firebase": "text-yellow-700 border-yellow-700/20 bg-yellow-700/10",
    "google places api": "text-emerald-600 border-emerald-600/20 bg-emerald-600/10",
    "javascript": "text-cyan-600 border-cyan-600/20 bg-cyan-600/10",
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