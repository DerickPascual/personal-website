"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface PortfolioTextProps {
  content: string;
}

export default function PortfolioText({ content }: PortfolioTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current && !isExpanded) {
        const { scrollHeight, clientHeight } = textRef.current;
        setIsTruncated(scrollHeight > clientHeight);
      }
    };

    checkTruncation();
    // Re-check on window resize in case layout changes
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [content, isExpanded]);

  const markdownComponents = {
    a: ({ href, children, ...props }: any) => (
      <a 
        href={href} 
        className={"text-blue-500 font-semibold hover:text-blue-600"}
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    p: ({ children }: any) => <p className="mb-3">{children}</p>,
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => <code className="bg-muted px-1 rounded text-xs">{children}</code>
  };

  return (
    <div className="text-primary text-sm">
      {isExpanded ? (
        <div className="flex flex-col gap-2">
          <ReactMarkdown components={markdownComponents}>
            {content}
          </ReactMarkdown>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground font-bold hover:text-blue-500 text-xs w-fit"
            >
              Show less
            </button>
        </div>
      ) : (
        <>
          <div ref={textRef} className="line-clamp-2">
            <ReactMarkdown components={markdownComponents}>
              {content}
            </ReactMarkdown>
          </div>
          {isTruncated && (
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-primary font-bold hover:text-blue-500 hover:pointer text-xs mt-1"
            >
              Read more
            </button>
          )}
        </>
      )}
    </div>
  );
}

