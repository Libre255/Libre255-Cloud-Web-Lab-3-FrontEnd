import React, { useState } from "react";
import styles from "@/styles/Store/Store.module.css";
import { IClothes } from "./IClothes";
import Items from "@/Components/Store/Items";
import axios from "axios";
import StoreNavBar from "@/Components/Store/storeNavBar";
import { useSession } from "next-auth/react";

interface Props  {
  Clothes:IClothes[];
}

const StoreIndex:React.FC<Props> = ({Clothes}) => {
  const [clothesData, setClothesData] = useState(Clothes);
  const {data:session} = useSession()
  
  return (
    <>
      {session ? <StoreNavBar setClothesData={setClothesData} /> : "" }
      <main id={styles.Main} className="">
          {clothesData.map((item)=> <Items session={session} key={item.Id} data={item} setClothesData={setClothesData}/>)}
      </main>
    </>
  )
};

export const getStaticProps = async()=>{
    const url = "http://localhost:3000/api/clothesapi";
    const data = await axios.get(url);
    return {
        props:{Clothes:data.data}
    }
}
//create layout for box of items
//create Layout for item itself
//show DELETE, ADD only when user login
//Add Search bar
//Display all items
export default StoreIndex;
