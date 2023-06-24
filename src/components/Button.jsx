import React from "react";
import classNames from "classnames";

function Button({onClick, className,outline, children}) {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
}

// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className={classNames(
//           "button",
//           {
//             "button--outline": this.props.outline,
//           },
//           {
//             "button--filled": this.props.children,
//           }
//         )}
//       >
//         {this.props.children}
//       </button>
//     );
//   }
// }

export default Button;
