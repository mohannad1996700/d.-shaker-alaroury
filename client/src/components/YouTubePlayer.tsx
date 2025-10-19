import { useState } from "react";
import { X } from "lucide-react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  onClose?: () => void;
}

export default function YouTubePlayer({ videoId, title, onClose }: YouTubePlayerProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Extract video ID from various YouTube URL formats
  const extractVideoId = (url: string): string => {
    // Handle direct video IDs
    if (url.length === 11 && !url.includes("/")) {
      return url;
    }
    
    // Handle youtube.com/watch?v=ID
    const match1 = url.match(/[?&]v=([^&]+)/);
    if (match1) return match1[1];
    
    // Handle youtu.be/ID
    const match2 = url.match(/youtu\.be\/([^?&]+)/);
    if (match2) return match2[1];
    
    // Handle youtube.com/embed/ID
    const match3 = url.match(/embed\/([^?&]+)/);
    if (match3) return match3[1];
    
    return url;
  };

  const embedUrl = `https://www.youtube.com/embed/${extractVideoId(videoId)}?modestbranding=1&rel=0`;

  return (
    <div className="relative w-full bg-black rounded-lg overflow-hidden">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-12 h-12 border-4 border-gray-700 border-t-white rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm">جاري التحميل...</p>
          </div>
        </div>
      )}

      {/* Aspect ratio container */}
      <div className="aspect-video">
        <iframe
          src={embedUrl}
          title={title || "مشغل اليوتيوب"}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Title */}
      {title && (
        <div className="p-4 bg-background border-t border-border">
          <h3 className="font-semibold text-foreground line-clamp-2">{title}</h3>
        </div>
      )}
    </div>
  );
}

