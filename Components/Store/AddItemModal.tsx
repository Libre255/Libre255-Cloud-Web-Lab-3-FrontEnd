import { ETypeOfClothe, IClothes } from "@/pages/store/IClothes";
import React, { useState } from "react";
interface Props {
  setClothesData: React.Dispatch<React.SetStateAction<IClothes[]>>;
}

const emptyClothe = { Name: "", Id: undefined, Type: "select type", Price: 0 };
const AddItemModal: React.FC<Props> = ({ setClothesData }) => {
  const [ItemUserData, setItemUserData] = useState<IClothes>(emptyClothe);

  const AddItemOnClick = () => {
    setClothesData((Arr) => {
      setItemUserData((Clothe) => ({ ...Clothe, Id: Arr.length + 1 }));
      return [...Arr, ItemUserData];
    });
    setItemUserData(emptyClothe);
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add new item
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Name
              </span>
              <input
                value={ItemUserData.Name}
                onChange={(e) =>
                  setItemUserData((Clothe) => ({
                    ...Clothe,
                    Name: e.target.value,
                  }))
                }
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Type
              </span>
              <select
                value={ItemUserData.Type}
                className="form-select"
                onChange={(e) =>
                  setItemUserData((Clothe) => ({
                    ...Clothe,
                    Type: parseInt(e.target.value),
                  }))
                }
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value={ETypeOfClothe.Mask}>Mask</option>
                <option value={ETypeOfClothe.Top}>Top</option>
                <option value={ETypeOfClothe.Pants}>Pants</option>
                <option value={ETypeOfClothe.Gloves}>Gloves</option>
                <option value={ETypeOfClothe.Shoes}>Shoes</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Price
              </span>
              <input
                value={ItemUserData.Price}
                onChange={(e) =>
                  setItemUserData((Clothe) => ({
                    ...Clothe,
                    Price: parseInt(e.target.value),
                  }))
                }
                type="number"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => AddItemOnClick()}
            >
              Add item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
