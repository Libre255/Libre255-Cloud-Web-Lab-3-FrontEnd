import React, { useState } from "react";
import styles from "@/styles/Store/Store.module.css";
import { IClothes } from "@/pages/store/IClothes";
import axios from "axios";
import AddItemModal from "./AddItemModal";

interface Props {
  setClothesData: React.Dispatch<React.SetStateAction<IClothes[]>>;
}
const StoreNavBar: React.FC<Props> = ({ setClothesData }) => {
  const [SearchName, setSearchName] = useState<string>("");

  const fetchData = async () => {
    const url = "http://localhost:3000/api/clothesapi";
    const data = await axios.get(url);
    setClothesData(data.data);
  };
  const onSearchClick = () => {
    setClothesData((Arr) =>
      Arr.filter((clothe) =>
        clothe
          .Name!.toLocaleLowerCase()
          .startsWith(SearchName.toLocaleLowerCase())
      )
    );
  };
  return (
    <div id={styles.storeNavBar}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Input group example"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button type="button" className="btn btn-info" onClick={onSearchClick}>
          Search
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => fetchData()}
        >
          Show All
        </button>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add
        </button>
        <AddItemModal setClothesData={setClothesData} />
      </div>
    </div>
  );
};

export default StoreNavBar;
