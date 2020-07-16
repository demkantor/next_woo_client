const Alert = ({ text, secondary, action }) => {

    const closeMe = () => {
        document.getElementById("modal").style.display = "none";
    }

    return (
        <div id="modal" className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title"> { text }</h5>
                    <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal" 
                        aria-label="Close"
                        onClick={closeMe}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>{ secondary }</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-dismiss="modal"
                        onClick={closeMe}>
                            Close
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Alert;
