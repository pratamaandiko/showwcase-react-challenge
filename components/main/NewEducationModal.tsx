import React, { FC } from "react";
import ReactModal from "react-modal";

interface NewEducationModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

const NewEducationModal: FC<NewEducationModalProps> = ({
	isOpen,
	onRequestClose,
}) => {
	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			width: "300px", // Set width
			height: "300px", // Set height
			background: "#fff",
			borderRadius: "10px",
			padding: "20px",
			boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
			animation: "modalFade 0.5s ease",
			position: "relative", // Needed to position the close button absolutely within the modal
		},
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.75)",
			transition: "opacity 0.5s ease",
		},
	};

	// Style for the close button
	const closeButtonStyle = {
		position: "absolute",
		top: "10px",
		right: "10px",
		background: "transparent",
		border: "none",
		fontSize: "16px",
		cursor: "pointer",
	};

	return (
		<>
			<style>{`
@keyframes modalFade {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
`}</style>
			<ReactModal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				contentLabel="Example Modal"
				style={customStyles}
			>
				<button onClick={onRequestClose} style={closeButtonStyle}>
					&times;
				</button>
				<p>This is content</p>
			</ReactModal>
		</>
	);
};

export default NewEducationModal;
