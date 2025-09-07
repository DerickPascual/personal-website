import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
    return (
        <header>
            <div className="flex justify-between items-center">
                <h1>
                    <span className="text-primary text-4xl font-bold">derick pascual</span>
                </h1>
                <div className="flex gap-8">
                    <Github className="w-4 h-4" />
                    <Linkedin className="w-4 h-4" />
                    <Mail className="w-4 h-4" />
                </div>
            </div>
        </header>
    );
}


