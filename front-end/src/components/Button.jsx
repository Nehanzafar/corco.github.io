import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({ className, children, path, color, onclick }) => {
  return (
    <button
      className={`${className || ""} 
        button
        ${color ? color : "bg-secondary-1 hover:bg-secondary-2"}  
       ${
         color
           ? "text-backgroundColors-1 hover:text-backgroundColors-1"
           : "text-textColors-1 hover:text-textColors-1 "
       }
           
           
      `}
      onClick={onclick && onclick}
    >
      {path ? <Link to={path}>{children}</Link> : children}
    </button>
  );
};

export default Button;
