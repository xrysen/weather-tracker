import "./ConfirmModal.css";

const ConfirmModal = (props: any) => {
  if (props.success) {
    return (
      <div className = "modal-container">
        <div className = "modal-content">
          Added to favourites!
          <br />
          <button onClick = {props.onClick}>Okay</button>
        </div>
      </div>
    )
  }

  return (
    <div className = "modal-container">
      <div className = "modal-content">
        City is already favourited
        <br />
        <button onClick = {props.onClick}>Okay</button>
      </div>
    </div>
  )
}

export default ConfirmModal;