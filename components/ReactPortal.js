import { react, useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

const createWrapperAndAppendToBody = (wrapperId) => {
  if (!document) return null;
  const next = document.getElementById("__next")
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  wrapperElement.setAttribute("class", "fixed p-50 w-50vw h-100vh");
  next.appendChild(wrapperElement);
  return wrapperElement;
};

const ReactPortal = ({ children, wrapperId }) => {
  const [wrapperElement, setWrapperElement] = useState();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
