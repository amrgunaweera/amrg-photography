import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '',
  imageClassName = '' 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Basic blur placeholder effect, can be enhanced with an actual thumbnail
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-gray-200 dark:bg-gray-800 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700" />
      )}
      <motion.img
        src={imgSrc}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full h-full object-cover ${imageClassName}`}
      />
    </div>
  );
};
