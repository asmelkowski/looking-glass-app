import { DragEvent, useState } from "react";
import styled from "styled-components";
import uploadImage from "../uploadImage";

const StyledImageInput = styled.div`
  width: 200px;
  height: 300px;
  border: 2px dotted white;
`;

export default function ImageInput() {
  const defaultDragMessage = "Drag one or more files to this Drop Zone ...";
  const [dragMessage, setDragMessage] = useState<string>(defaultDragMessage);
  const onDropHandler = (event: DragEvent) => {
    event.preventDefault();
    setDragMessage(defaultDragMessage);
    uploadImage(event.dataTransfer.files);
  };
  const onDragOverHandler = (event: DragEvent) => {
    event.preventDefault();
    setDragMessage("File incoming!!!");
  };
  const onDragLeaveHandler = (event: DragEvent) => {
    event.preventDefault();
    setDragMessage(defaultDragMessage);
  };

  return (
    <StyledImageInput
      id="drop_zone"
      onDrop={onDropHandler}
      onDragOver={onDragOverHandler}
      onDragLeave={onDragLeaveHandler}
    >
      <p>{dragMessage}</p>
    </StyledImageInput>
  );
}
