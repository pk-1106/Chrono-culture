import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption: string;
  title: string;
}

interface MediaGalleryProps {
  media: MediaItem[];
  stateName: string;
}

const MediaGallery = ({ media, stateName }: MediaGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'Enter' || event.key === ' ') {
      if (media[currentIndex].type === 'video') {
        setIsPlaying(!isPlaying);
      }
    }
  };

  const currentMedia = media[currentIndex];

  return (
    <Card className="w-full max-w-4xl mx-auto bg-card/90 backdrop-blur-sm border-2 border-heritage-gold/20">
      <CardContent className="p-6">
        <div 
          className="relative w-full h-96 rounded-lg overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-heritage-saffron focus:ring-offset-2"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="region"
          aria-label={`Media gallery for ${stateName}`}
        >
          {currentMedia.type === 'image' ? (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="relative w-full h-full">
              <video
                src={currentMedia.src}
                className="w-full h-full object-cover"
                controls={isPlaying}
                aria-label={currentMedia.alt}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/40 text-white"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause size={48} /> : <Play size={48} />}
              </Button>
            </div>
          )}

          {/* Navigation Controls */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={handlePrevious}
            aria-label="Previous media"
          >
            <ChevronLeft size={24} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={handleNext}
            aria-label="Next media"
          >
            <ChevronRight size={24} />
          </Button>

          {/* Media Counter */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {media.length}
          </div>
        </div>

        {/* Media Info */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {currentMedia.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {currentMedia.caption}
          </p>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {media.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-heritage ${
                index === currentIndex 
                  ? 'border-heritage-saffron shadow-heritage' 
                  : 'border-border hover:border-heritage-gold/50'
              }`}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaGallery;