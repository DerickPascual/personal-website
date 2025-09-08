"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PortfolioCarouselProps {
  images?: string[];
  videos?: string[];
}

export default function PortfolioCarousel({ images = [], videos = [] }: PortfolioCarouselProps) {
  const mediaItems = [
    ...images.map(src => ({ type: 'image' as const, src })),
    ...videos.map(src => ({ type: 'video' as const, src }))
  ];

  // If no media provided, show placeholders for demo
  const itemsToShow = mediaItems.length > 0 ? mediaItems : [
    { type: 'image' as const, src: '', placeholder: true },
    { type: 'video' as const, src: '', placeholder: true },
    { type: 'image' as const, src: '', placeholder: true }
  ];

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {itemsToShow.map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-video items-center justify-center rounded-lg border bg-muted">
                {(item as any).placeholder ? (
                  // Placeholder content
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    {item.type === 'image' ? (
                      <>
                        <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg mb-2 flex items-center justify-center">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Image Placeholder</span>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg mb-2 flex items-center justify-center">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Video Placeholder</span>
                      </>
                    )}
                  </div>
                ) : (
                  // Actual content
                  item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={`Portfolio item ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      controls
                      className="w-full h-full rounded-lg"
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation buttons below the carousel content - only show if more than 1 item */}
        {itemsToShow.length > 1 && (
          <div className="flex justify-between gap-2 mt-4">
            <CarouselPrevious className="relative left-auto right-auto top-auto translate-x-0 translate-y-0" />
            <CarouselNext className="relative left-auto right-auto top-auto translate-x-0 translate-y-0" />
          </div>
        )}
      </Carousel>
    </div>
  );
}
