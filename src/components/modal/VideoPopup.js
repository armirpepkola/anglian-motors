"use client";

import Modal from "react-modal";
import {useEffect, useState} from "react";

export default function VideoPopup() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement("#modal-root"); // Attach modal to a div
    }, []);

    return (
        <div className="video__btn-wrp">
            <div className="video-btn video-pulse">
                <a className="video-popup secondary-bg"
                   role="button"
                   onClick={() => setModalIsOpen(true)}
                >
                    <i className="fa-solid fa-play"></i>
                </a>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                    content: {
                        width: "80%",
                        height: "60%",
                        margin: "auto",
                        padding: "0",
                        border: "none",
                        borderRadius: "10px",
                        overflow: "hidden",
                    },
                }}
            >
                <button
                    onClick={() => setModalIsOpen(false)}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        fontSize: "20px",
                        cursor: "pointer",
                    }}
                >
                    ✖
                </button>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Cn4G2lZ_g2I?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Modal>
        </div>
    )
}