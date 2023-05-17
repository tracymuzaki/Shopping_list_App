import React from "react";
import "./Item.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPen,faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const Item = ({
  id,
  item,
  list,
  setEdit,
  setEditId,
  setItem,
  setList,
  complete,
}) => {
  //Delete Item
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  //Mark Item completed
  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };

  //Edit Item
  const handleItem = (id) => {
    const editItem = list.find((el) => el.id === id);
    setItem(editItem.item);
    setEdit(true);
    setEditId(id);
  };

  return (
    <div className="item">
      <input
        type="text"
        value={item}
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          color: "rgb(173, 4, 4)",
          fontSize: "20px",
        }}
        className={complete ? "complete" : ""}
      />
      <FontAwesomeIcon icon={faPen} style={{color: "rgb(232, 39, 39)", cursor: "pointer"}} onClick={() => {
          const confirmBox = window.confirm("Do you want to edit this item?");
          if (confirmBox === true) {
            handleItem(id);
          }
        }}/>
      <FontAwesomeIcon icon={faSquareCheck} style={{color: "rgb(206, 12, 12)",cursor: "pointer",padding: "10px" }}
        onClick={() => handleComplete(id)} />
      <FontAwesomeIcon icon={faTrash} style={{color: "rgb(173, 4, 4)",cursor: "pointer"}}   onClick={() => {
        const confirmBox = window.confirm(
          "Are you sure you want to delete this item?"
        );
        if (confirmBox === true) {
          remove(id);
        }
      }}/>
      
    </div>
  );
};
export default Item;
