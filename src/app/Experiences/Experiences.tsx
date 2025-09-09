import ExperienceCard from "@/app/Experiences/ExperienceCard";

export function Experiences() {
    return (
        <div className="space-y-4">
            <p className="text-sm font-medium text-pretty leading-relaxed">
                I&apos;m currently a student at rice university studying computer science.
            </p>
            <p className="text-sm font-medium text-pretty leading-relaxed">
                I build web apps 🧑🏻‍💻! I&apos;ve previously been a:
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