const RemoveFave = (props: any) => {
  return (
    <div style = {{ textAlign: "center", paddingBottom: "10px"}}>
      <button onClick = {props.onClick}>Remove from Favourites</button>
    </div>
  )
}

export default RemoveFave;