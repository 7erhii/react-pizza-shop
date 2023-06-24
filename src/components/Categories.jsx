import React from "react";

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);
  const [count, setCount] = React.useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    setCount((num) => ++num);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              //   className={this.state.activeItem === index ? "active" : ""}
              //   onClick={() => onClickItem(name)}
              // onClick={() => this.onSelectItem(index)}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

// function Categories({ items, onClickItem }) {
//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {items.map((name, index) => (
//           <li onClick={()=> onClickItem(name)} key={`${name}_${index}`}>{name}</li>
//         ))}
//         <li>Мясные</li>
//       </ul>
//     </div>
//   );
// }

export default Categories;
