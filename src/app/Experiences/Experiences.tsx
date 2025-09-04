import ExperienceCard from "@/app/Experiences/ExperienceCard";

export function Experiences() {
    return (
        <div className="space-y-4">
            <p className="text-md text-muted-foreground text-pretty leading-relaxed">
                I'm currently a student at rice university studying computer science.
            </p>
            <p className="text-md text-muted-foreground text-pretty leading-relaxed">
                I build full-stack web apps 🧑🏻‍💻! I've previously been a:
            </p>
            <div className="flex flex-col gap-4">
                <ExperienceCard 
                    title="software engineer intern"
                    company="yahoo"
                    period="summer 2025"
                    description="developing features for the frontend of the yahoo news web app"
                    badges={["TypeScript", "Next.js", "Tailwind CSS", "Apollo GraphQL"]}
                    img="/yahoo.png"
                />
                <ExperienceCard 
                    title="software engineer intern"
                    company="us renal care"
                    period="summer 2024"
                    description="building a patient-clinician scheduling app for home dialysis clinics"
                    badges={["TypeScript", "C#", "React", "Tailwind CSS", ".NET Core", "SQL Server"]}
                    img="/usrc.png"
                />
            </div>
        </div>
    )
}