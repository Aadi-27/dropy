import { useEffect, useState } from "react";

export function useDropy() {
  const [dropzone, setDropzone] = useState();
  const [droparea, setDroparea] = useState();
  const [fileArr, setFilesArr] = useState();

  useEffect(() => {
    const dropZone = document.getElementById("drop-zone");
    const dropArea = document.getElementById("drop-area");
    if (dropZone && dropArea) {
      setDropzone(dropZone);
      setDroparea(dropArea);
    }
  }, []);

  const dropHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzone.contains(event.target)) {
      dropzone.style.visibility = "hidden";
      dropzone.style.border = "unset";
      dropzone.style.backgroundColor = "unset";
    }
    setFilesArr(event.dataTransfer.files);
  };

  if (droparea) {
    droparea.ondrop = dropHandler;
  }

  const dragOverHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzone) {
      dropzone.style.visibility = "visible";
      dropzone.style.border = "4px dashed #a9a9a9";
      dropzone.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }
  };

  if (droparea) {
    droparea.ondragover = dragOverHandler;
  }

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzone.contains(event.target)) {
      dropzone.style.visibility = "hidden";
      dropzone.style.border = "unset";
      dropzone.style.backgroundColor = "unset";
    }
  };

  if (droparea) {
    droparea.ondragleave = handleDragLeave;
  }
  return fileArr;
}
