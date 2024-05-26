import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Foodlist from '../../Components/FoodList/Foodlist'
import Download from '../../Components/Download/Download'


const Home = () => {

  const [ category , setCategory] = useState("All")

  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory} ></ExploreMenu>
      <Foodlist category={category} setCategory={setCategory} ></Foodlist>
      <Download></Download>
      
      
    </div>
  )
}

export default Home
