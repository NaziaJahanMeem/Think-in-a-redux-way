import editImage from "../../assets/edit.svg";
import deleteImage from "../../assets/delete.svg";

export const Transaction = ({ transaction }) => {
  const { name, amount, type } = transaction || {};
  console.log(transaction);
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
          <img alt="edit" className="icon" src={editImage} />
        </button>
        <button className="link">
          <img alt="delete" className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
};
