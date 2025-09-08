import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
    return (
        <header>
            <div className="flex flex-col gap-1 items-start">
                <h1>
                    <span className="text-primary text-4xl font-bold">derick pascual</span>
                </h1>
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" asChild>
                        <a 
                            href="https://github.com/derickpascual" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-500"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a 
                            href="https://www.linkedin.com/in/derick-pascual/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-500"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </Button>
                    <div className="px-2 flex items-center gap-1 hover:cursor-pointer text-muted-foreground hover:text-blue-500">
                        <Mail className="w-4 h-4" />
                        <p className="text-xs font-bold underline">derickpascual@rice.edu</p>
                    </div>
                </div>
            </div>
        </header>
    );
}


