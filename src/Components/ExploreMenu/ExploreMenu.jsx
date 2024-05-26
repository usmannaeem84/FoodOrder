import React from 'react'
import { menu_list } from '../../assets/assets'
import "./exploreMenu.css"

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='exploreMenu'>
            <div className="exploreMenuTitle">
                <h2>Explore Our Menu</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, tempore sequi vel ea tenetur quos laudantium unde, aliquam error repellendus, et fugit molestiae enim sunt id.</p>
            </div>
            <div className="MenuItem">

                {menu_list.map((item, index) => {

                    return (
                        <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
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
