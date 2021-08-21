import React from "react";

import Modal from "react-modal";

const LaunchDetails: React.FC<{ isModalOpen: boolean, hideModal: () => void, launch: LaunchProps }> = ({ isModalOpen, hideModal, launch }) => {
    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(50, 50, 50, 0.75)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '4px',
            backgroundColor: '#014461',
            minWidth: '30%',
        },
    };

    return (
        <Modal
            isOpen={isModalOpen}
            ariaHideApp={false}
            onRequestClose={hideModal}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
            parentSelector={() => document.querySelector('#app-wrapper')}
        >
            <article className="launch-details">
                <button
                    className="close-button"
                    onClick={hideModal}
                    title="Close me!"
                >
                    X
                </button>

                <div>
                    <span className="detail-label">Nom :</span> {launch.name}
                </div>

                <div>
                    <span className="detail-label">Date du lancement :</span> {launch.net.date.toLocaleString('fr')}
                </div>

                {launch.mission &&
                    <div>
                        <h3>Mission</h3>
                        <p>{launch.mission.name}</p>
                        <p>{launch.mission.description}</p>
                    </div>
                }

                <div>
                    <span className="detail-label">Fusée :</span> {launch.rocket}
                </div>

                <div>
                    <h3>Pad de lancement :</h3>

                    {launch.pad !== null &&
                        <div>
                            <p>{launch.pad.name}</p>

                            <figure>
                                <img width="300" src={launch.pad.mapImage} />

                                <figcaption>
                                    {launch.pad.location}<br />
                                    Latitude : {launch.pad.latitude} - Longitude : {launch.pad.longitude}
                                </figcaption>
                            </figure>
                        </div>
                    }
                </div>

                {launch.provider && <div>
                    <h3>Fournisseur des services de lancement :</h3>
                        <div>
                            {launch.provider.name} ({launch.provider.type})
                        </div>
                    </div>
                }
            </article>
        </Modal>
    );
}

export default LaunchDetails;