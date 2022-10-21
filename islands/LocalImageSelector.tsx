import { useState } from "preact/hooks";
import MultipleFileInput from "../components/MultipleFileInput.tsx";

const imageMimeTypes = "image/*";

export default function LocalImageSelector() {
  const [availableImages, setAvailableImages] = useState<FileList | null>();
  const [cursor, setCursor] = useState<number>(0);
  const selectedImage = availableImages ? availableImages[cursor] : null;
  const objectUrl = selectedImage ? URL.createObjectURL(selectedImage) : undefined;
  const availableCount = availableImages?.length ?? 0;

  function step(distance: number) {
    return (x: number) => {
      const min = 0;
      const max = availableCount - 1;
      let result = x + distance;
      if (min !== undefined) result = Math.max(result, min);
      if (max !== undefined) result = Math.min(result, max);
      return result;
    };
  }

  return (
    <div>
      <MultipleFileInput accessKey="s" accept={imageMimeTypes} onChange={(event) => setAvailableImages(event.currentTarget.files)}/>
      <button accessKey="p" onClick={() => setCursor(step(-1))}>Prev</button>
      <button accessKey="n" onClick={() => setCursor(step(+1))}>Next</button>
      <p>Current: {selectedImage?.name} ({cursor + 1} / {availableCount})</p>
      <img src={objectUrl} />
    </div>
  );
}