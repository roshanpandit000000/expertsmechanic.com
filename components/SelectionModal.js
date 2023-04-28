import { Store } from "@/utils/Store";
import Link from "next/link";
import { useRouter } from "next/router";
import { React, useContext, useEffect } from "react";
import ReactPortal from "./ReactPortal";

const SelectionModal = ({ children, isOpen, handleClose }) => {
  const { setModalOpen, modalOpen, setSearchInfo } = useContext(Store);
  const { asPath, query } = useRouter();

  useEffect(() => {
    const closeOnEscKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscKey);
    };
  }, [handleClose]);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  // console.log(query)
  if (!isOpen) return null;
  
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen z-999 bg-gray-700 bg-opacity-60">
          <div
            className=" bg-white flex flex-col box-border h-4/6  max-w-fit  rounded shadow-xl relative sm:w-5/6 lg:min-w-fit w-5/6"
            // onBlur={()=>setModalOpen(!modalOpen)}
          >
            <div className="w-full px-6  py-2 flex  justify-between">
              { query.carModel ? <Link
                href={`${asPath}/`}
                as={`${asPath}`}
                className=" m-3 px-2 self-end font-bold text-md active:scale-75 "
                onClick={() => {
                  setSearchInfo("");
                }}
              >
                {"<"}
              </Link>: <span></span>}
              <button
                className=" m-3 px-2 self-end text-md active:scale-75
                "
                onClick={handleClose}
              >
                X
              </button>
            </div>
            {children}
          </div>{" "}
        </div>
      </>
    </ReactPortal>
  );
};

export default SelectionModal;
