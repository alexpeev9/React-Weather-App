import { useState } from "react";
import { ImageContainer } from "./styled";

import { ImageParams } from "../../utils/types";
import Loader from "../Loader";

export default function Image({ icon, alt }: ImageParams) {
  const [loading, isLoading] = useState(true);
  const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // Function to handle image load event
  function handleImageLoad() {
    isLoading(false);
  }

  // Function to handle image error event
  function handleImageError() {
    isLoading(true);
  }

  return (
    <>
      {loading && <Loader />}
      <ImageContainer
        className={`${loading ? "d-none" : ""}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        src={imageURL}
        alt={alt}
      />
    </>
  );
}
