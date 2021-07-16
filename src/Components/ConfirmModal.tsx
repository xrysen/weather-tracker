import "./ConfirmModal.css";

const ConfirmModal = (props: any) => {
    return (
      <div className = "modal-container">
        <div className = "modal-content">
          {props.success ? <span>Added to favourites!</span> : <span>City is already favourited</span> }
          <br />
          <button onClick = {props.onClick}>Okay</button>
        </div>
      </div>
    )
}

export default ConfirmModal;