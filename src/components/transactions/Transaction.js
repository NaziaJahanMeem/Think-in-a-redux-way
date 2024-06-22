import editImage from "../../assets/edit.svg";
import deleteImage from "../../assets/delete.svg";
import { useDispatch } from "react-redux";
import {
  editActive,
  removeTransaction,
} from "../../features/transaction/transactionSlice";

export const Transaction = ({ transaction }) => {
  const { name, amount, type, id } = transaction || {};
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link" onClick={handleEdit}>
          <img alt="edit" className="icon" src={editImage} />
        </button>
        <button className="link" onClick={handleDelete}>
          <img alt="delete" className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
};
