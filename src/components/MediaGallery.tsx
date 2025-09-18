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
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (media[currentIndex].type === 'video') {
        setIsPlaying(!isPlaying);
      }
    } else if (event.key === 'Escape') {
      setIsFullscreen(false);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const currentMedia = media[currentIndex];

  return (
    <>
      <Card className="w-full max-w-4xl mx-auto bg-card/90 backdrop-blur-sm border-2 border-heritage-gold/20">
        <CardContent className="p-6">
          <div 
            className="relative w-full h-96 rounded-lg overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-heritage-saffron focus:ring-offset-2"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            role="img"
            aria-label={`${currentMedia.title}. ${currentMedia.caption}. Media ${currentIndex + 1} of ${media.length} in ${stateName} gallery. Use arrow keys to navigate, Enter to play video, F for fullscreen.`}
          >
            {currentMedia.type === 'image' ? (
              <img
                src={currentMedia.src}
                alt={currentMedia.alt}
                className="w-full h-full object-cover cursor-pointer"
                loading="lazy"
                onClick={toggleFullscreen}
                onError={(e) => {
                  console.error('Image failed to load:', currentMedia.src);
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  src={currentMedia.src}
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  aria-label={currentMedia.alt}
                  onError={(e) => {
                    console.error('Video failed to load:', currentMedia.src);
                  }}
                />
                {!isPlaying && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/40 text-white focus:ring-2 focus:ring-heritage-saffron focus:ring-offset-2"
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    <Play size={48} />
                  </Button>
                )}
              </div>
            )}

            {/* Navigation Controls */}
            {media.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white focus:ring-2 focus:ring-heritage-saffron focus:ring-offset-2 z-10"
                  onClick={handlePrevious}
                  aria-label={`Previous media. Currently viewing ${currentIndex + 1} of ${media.length}`}
                >
                  <ChevronLeft size={24} />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white focus:ring-2 focus:ring-heritage-saffron focus:ring-offset-2 z-10"
                  onClick={handleNext}
                  aria-label={`Next media. Currently viewing ${currentIndex + 1} of ${media.length}`}
                >
                  <ChevronRight size={24} />
                </Button>
              </>
            )}

            {/* Media Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-10">
              <span aria-live="polite" aria-atomic="true">
                {currentIndex + 1} / {media.length}
              </span>
            </div>

            {/* Fullscreen Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white focus:ring-2 focus:ring-heritage-saffron focus:ring-offset-2 z-10"
              onClick={toggleFullscreen}
              aria-label="View in fullscreen"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
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
        {media.length > 1 && (
          <div 
            className="flex gap-2 mt-4 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Media thumbnails"
          >
            {media.map((item, index) => (
              <button
                key={item.id}
                role="tab"
                tabIndex={index === currentIndex ? 0 : -1}
                aria-selected={index === currentIndex}
                aria-controls={`media-panel-${index}`}
                onClick={() => setCurrentIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setCurrentIndex(index);
                  }
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-heritage focus:ring-2 focus:ring-heritage-saffron focus:ring-offset-2 ${
                  index === currentIndex 
                    ? 'border-heritage-saffron shadow-heritage' 
                    : 'border-border hover:border-heritage-gold/50'
                }`}
                aria-label={`View ${item.title}. ${item.type === 'video' ? 'Video' : 'Image'} ${index + 1} of ${media.length}`}
              >
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play size={12} className="text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>

    {/* Fullscreen Modal */}
    {isFullscreen && (
      <div 
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={() => setIsFullscreen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setIsFullscreen(false);
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Fullscreen media viewer"
      >
        <div className="relative max-w-full max-h-full">
          <img
            src={currentMedia.src}
            alt={currentMedia.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20 focus:ring-2 focus:ring-heritage-saffron"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen view"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m18 6-12 12M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
    )}
     </>
  );
};

export default MediaGallery;