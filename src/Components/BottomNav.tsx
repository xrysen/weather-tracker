import "./BottomNav.css";

const BottomNav = (props: any) => {
  return (
    <div className = "bottom-nav">
      <button onClick = {props.clickSearch}>Search</button>
      <button onClick = {props.clickFav}>Favourites</button>
    </div>
  )
}

export default BottomNav;