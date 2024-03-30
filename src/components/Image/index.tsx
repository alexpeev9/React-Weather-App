import { useState } from "react";
import { ImageContainer } from "./styled";

export default function Image({ icon, alt }: { icon: string; alt: string }) {
  const [image, setImage] = useState(
    `https://openaaweathermap.org/img/wn/${icon}@2x.png`
  );

  function handleImageError() {
    const imagePath = `${window.location.origin}/public/fallbackImage.png`;
    setImage(imagePath);
  }

  return <ImageContainer onError={handleImageError} src={image} alt={alt} />;
}
