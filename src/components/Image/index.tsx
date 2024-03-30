import { useState } from "react";

import { ImageContainer } from "./styled";

import fallbackImage from "../../assets/images/fallbackImage.png";

export default function Image({ icon, alt }: { icon: string; alt: string }) {
  const [image, setImage] = useState(
    `https://openweathermap.org/img/wn/${icon}@2x.png`
  );

  function handleImageError() {
    setImage(fallbackImage);
  }

  return <ImageContainer onError={handleImageError} src={image} alt={alt} />;
}
