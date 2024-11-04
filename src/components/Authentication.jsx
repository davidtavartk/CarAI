import Modal from "react-modal";
import cardImage from "/benefits/card-1.svg";
import { GradientLight } from "./design/Benefits";
import { useEffect, useState } from "react";
Modal.setAppElement("#root");

const Authentication = ({ modalIsOpen, closeModal, hasAccount }) => {
  const [hasAccountLocal, setHasAccountLocal] = useState(hasAccount);

  useEffect(() => {
    setHasAccountLocal(hasAccount);
  }, [hasAccount]);
  useEffect(() => {
    if (!modalIsOpen) {
      setHasAccountLocal(hasAccount);
    }
  }, [modalIsOpen, hasAccount]);

  const customStyles = {
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "none",
      padding: 0,
      overflow: "hidden",
        minWidth: "370px",
    },
  };

  const toggleHasAccount = () => {
    setHasAccountLocal((prev) => !prev);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <div
        className="notched-corner rounded-[45px] bg-black bg-[length:100%_100%] bg-no-repeat p-36 text-center max-lg:px-12 max-lg:rounded-[40px]"
        style={{
          backgroundImage: `url(${cardImage})`,
        }}
      >
        <div className="w-[100%] ">
          <h2 className="mb-4 text-4xl font-bold">{`${hasAccountLocal ? "Sign In" : "Sign Up"}`}</h2>
          <form className="space-y-4" id="Authentication">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="text-gray-100 w-full max-md:w-[100%] rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-100 focus:border-blue-500 focus:outline-none focus:ring"
                required
              />
            </div>
            {!hasAccountLocal && (
              <div>
                <input
                  type="password"
                  placeholder="Repeat Password"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-100 focus:border-blue-500 focus:outline-none focus:ring"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
              {`${hasAccountLocal ? "Sign In!" : "Sign Up!"}`}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-300">
            {`${!hasAccountLocal ? "Already" : "Dont "}`} have an account?
            {"   "}
            <a
              href="#signup"
              onClick={toggleHasAccount}
              className="pl-[2px] text-blue-500 hover:underline"
            >
              {`${!hasAccountLocal ? "Sign In!" : "Sign Up!"}`}
            </a>
          </p>
          <button
            onClick={closeModal}
            className="mt-4 text-sm text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      </div>
      <GradientLight />
    </Modal>
  );
};

export default Authentication;
