import { useState } from "react";
import { ImageContainer } from "./styled";
import fallbackImage from "../../assets/images/fallbackImage.png";
import { ImageParams } from "../../utils/types";

export default function Image({ icon, alt }: ImageParams) {
  const [image, setImage] = useState(
    `https://openweathermap.org/img/wn/${icon}@2x.png`
  );

  function handleImageError() {
    setImage(fallbackImage);
  }

  return <ImageContainer onError={handleImageError} src={image} alt={alt} />;
}
