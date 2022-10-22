import React, { useState } from "react";
import EditDialog from "./EditDialog";
import Modal from "react-modal";

const Tooltip = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };

  const modalAction = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  Modal.setAppElement("#root");

  

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <EditDialog closeModal={closeModal}  {...props} />
      </Modal>
      <div
        role="tooltip"
        className="z-20 -mt-20 w-64 absolute transition duration-10100 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded"
      >
        <svg
          className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
          width="9px"
          height="16px"
          viewBox="0 0 9 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Tooltips-"
              transform="translate(-874.000000, -1029.000000)"
              fill="#FFFFFF"
            >
              <g
                id="Group-3-Copy-16"
                transform="translate(850.000000, 975.000000)"
              >
                {/* <g id="Group-2" transform="translate(24.000000, 0.000000)">
                  <polygon
                    id="Triangle"
                    transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                    points="4.5 57.5 12.5 66.5 -3.5 66.5"
                  />
                </g> */}
              </g>
            </g>
          </g>
        </svg>
        <p className="text-sm font-bold text-gray-800 pb-1">{props.name}</p>
        <p className="text-xs leading-4 text-gray-600 pb-3">
          {`Status: ${props.status}`}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-indigo-50 cursor-pointer"></span>
          <button
            className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs"
            onClick={() => {
              modalAction();
            }}
          >
            Edit
          </button>
        </div>
        {/* <EditDialog
          isOpen={showEditDialog}
          setIsOpen={setShowEditDialog}
        ></EditDialog> */}
      </div>
    </>
  );
};

export default Tooltip;
