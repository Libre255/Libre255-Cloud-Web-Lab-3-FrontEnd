import React, { useState } from 'react'
import styles from "@/styles/Store/Store.module.css";
import { IClothes } from '@/pages/store/IClothes';
import axios from 'axios';

interface Props{
  setClothesData:React.Dispatch<React.SetStateAction<IClothes[]>>;
}
const StoreNavBar :React.FC<Props> = ({setClothesData}) => {
  const [SearchName, setSearchName] = useState<string>();

  const fetchData = async ()=>{
    const url = "http://localhost:3000/api/clothesapi";
    const data = await axios.get(url);
    setClothesData(data.data)
  }
  //Todo Filter by search and Add new furry part 
  const onClick = ()=>{
      //filter and a
    // setClothesData(Arr => Arr.)
  }
  return(
    <div id={styles.storeNavBar}>
        <div className="input-group">
            <input type="text" className="form-control" 
                   placeholder="Input group example"
                   aria-label="Input group example" aria-describedby="btnGroupAddon"
                   onChange={e => setSearchName(e.target.value)}/>
            <button type="button" className="btn btn-info" onClick={onClick}>Search</button>
            <button type="button" className="btn btn-primary" onClick={()=>fetchData()}>Show All</button>
            <button type="button" className="btn btn-warning">Add</button>
        </div>
    </div>
  )
}

export default StoreNavBar 