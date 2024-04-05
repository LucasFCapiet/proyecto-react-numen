import React, { useState } from "react";

function Promotional() {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="grid-container" id="grid_container">
      <p>
        Envíos gratis a partir de $10000. Descuentos adicionales a partir de
        compras por $20000
      </p>
      <button
        className="close-button"
        id="close_promotional"
        onClick={handleClose}
      >
        X
      </button>
    </div>
  );
}

export default Promotional;
