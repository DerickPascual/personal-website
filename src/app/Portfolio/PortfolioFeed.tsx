import PortfolioCard from "./PortfolioCard";

export default function PortfolioFeed() {
    return (
        <div>
            <p className="text-md text-muted-foreground text-pretty leading-relaxed mb-4">
                I work full-stack with a frontend focus. Here are some of the projects I've worked on:
            </p>
            <div className="flex flex-col gap-4">
                <PortfolioCard 
                    title="andes web app"
                    description="I'm currently working with [ylab](https://ylab.rice.edu), a Rice University computational biology lab, to build a web app allowing researchers to run gene set comparisons on the web. I built this app with Next.js for the frontend, and Django for the backend. It uses Redis/Celery for the job scheduling."
                    technologies={["Next.js", "Tailwind CSS", "Django", "Redis", "Celery"]}
                    period="2024 - present"
                    organization="[ylab @ rice university](https://ylab.rice.edu)"
                />
                <PortfolioCard 
                    title="rice menus"
                    description="A web app that scrapes Rice University servery (dining hall) menus and texts them to users using [Twilio API](https://www.twilio.com)."
                    technologies={["React", "JavaScript", "Express.js", "PostgreSQL", "Twilio API"]}
                    period="2023"
                    organization="personal project"
                />
                <PortfolioCard 
                    title="diner"
                    description="A Tinder-for restaurants style web app that allows users and friends to swipe through restaurants in real-time."
                    technologies={["React", "JavaScript", "Express.js", "Google Places API"]}
                    period="2023"
                    organization="personal project"
                />
                <PortfolioCard 
                    title="pomodoros.me"
                    description="I developed a pixel-aesthetic pomodoro timer web app inspired by [countdowns.live](https://countdowns.live) and [buildspace.so](https://buildspace.so)."
                    technologies={["React", "JavaScript", "Firebase"]}
                    period="2023"
                    organization="personal project"
                />
            </div>
        </div>
    )
}