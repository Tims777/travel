import { JSX } from "preact";

export default function MultipleFileInput(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="file"
      multiple
    />
  );
}
