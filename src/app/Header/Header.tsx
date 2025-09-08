import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
    return (
        <header>
            <div className="flex justify-between items-center">
                <h1>
                    <span className="text-primary text-4xl font-bold">derick pascual</span>
                </h1>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/derickpascual" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 text-blue-500" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/derick-pascual/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 text-blue-500" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a>
                        <Mail className="w-4 h-4 text-blue-500" />
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}


