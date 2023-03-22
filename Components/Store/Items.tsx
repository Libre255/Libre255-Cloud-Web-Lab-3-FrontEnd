import { IClothes } from "@/pages/store/IClothes";
import React from "react";
import styles from "@/styles/Store/Store.module.css";
import { Session } from "next-auth";

interface Props {
  data: IClothes;
  session: Session | null;
  setClothesData: React.Dispatch<React.SetStateAction<IClothes[]>>;
}
const Items: React.FC<Props> = ({ data, session, setClothesData }) => {
  const DeletItem = async () => {
    setClothesData((clothes) =>
      clothes.filter((clothe) => clothe.Id !== data.Id)
    );
  };
  return (
    <article className={styles.ItemArticle}>
      <h1>{data.Name}</h1>
      <img src="furrysuit.jpg" alt="" />
      <p>{data.Price}Kr</p>
      {session ? (
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => DeletItem()}
          >
            Delet
          </button>
          <button type="button" className="btn btn-success">
            Buy
          </button>
        </div>
      ) : (
        ""
      )}
    </article>
  );
};

export default Items;
