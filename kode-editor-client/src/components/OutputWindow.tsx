import { useState } from "react";
export default function OutputWindow(props: { key: number }) {
  return (
    <iframe
      key={props.key}
      src="http://localhost:8000/"
      style={{ height: "100%", width: "100%", border: "none" }}
      title="output"
    ></iframe>
  );
}
