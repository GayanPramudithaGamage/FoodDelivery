import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets"

// eslint-disable-next-line react/prop-types, no-unused-vars
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
    <h1>Explore Our Menu</h1>
    <p className="explore-menu-text"> Discover a variety of delicious dishes crafted with the finest ingredients. Whether you are in the mood for a hearty meal or a light snack, our menu has something to satisfy every craving. Explore our offerings and find your new favorite dish today!</p>
    <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            return (
                <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                    <p>{item.menu_name}</p>
                    </div>
            )
        })}

    </div>
    <hr />
</div>
  )
}

export default ExploreMenu