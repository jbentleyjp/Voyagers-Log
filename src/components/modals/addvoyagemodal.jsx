import React from "react";
import ReactDOM from "react-dom";
import '../compstyles/modals.css'

const addVoyageModal = (
  <div id="AddVoyageModal" className="modal">
    <div className="add-voyage-modal-content">
      <h3>Add a New Voyage</h3>
      <form id="add-voyage-form" >
        {/* <div className="add-voyage-field"> */}
        <label for="voyage-title">Voyage Title</label>
        <input type="text" id="voyage-title" placeholder="Enter a voyage title"></input>
        <label for="voyage-description">Voyage Description</label>
        <input type="text" id="voyage-description" placeholder="Describe your recent voyage"></input>
        {/* </div> */}
        {/* <div className="add-voyage-field"> */}
        <label for="date-vistied">Date Visited</label>                        
        <input type="date" id="date-vistied" value="2020-02-20" min="1900-00-00" max="2099-00-00"></input> 
        {/* </div> */}
        <label for="latitude">Latitude</label>
        <input type="number" step="0.0001" id="latitude" placeholder="Input latitude"></input>
        <label for="longitude">Longitude</label>
        <input type="number" step="0.0001" id="longitude" placeholder="Input longitude"></input>
        <label for="date-posted">Today's Date</label>                        
        <input type="date" id="date-vistied" value="2020-02-20" min="1900-00-00" max="2099-00-00"></input> 
        <button type="button" className="modal-button">Sign up</button>
        {/* <label id="image"></label>
        <form></form> */}
      </form>
      </div> 
  </div> 
);

function AddVoyageModal(props) {
  return ReactDOM.createPortal(addVoyageModal, document.body);
}

export default AddVoyageModal;
