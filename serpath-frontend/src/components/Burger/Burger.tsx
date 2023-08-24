import "./Burger.scss";
import { AiOutlineClose } from "react-icons/ai";

interface BurgerProps {
  open?: boolean;
  color: string;
  className?: string;
  onClick: () => void;
}

function Burger({ open, color, className, onClick }: BurgerProps) {
  return (
    <>
      <div className={`burger-container ${className}`} onClick={onClick}>
        {!open ? (
          <>
            <div className={`burger-bar ${color}`}></div>
            <div className={`burger-bar ${color}`}></div>
            <div className={`burger-bar ${color}`}></div>
          </>
        ) : (
          <AiOutlineClose className="burger-close" />
        )}
      </div>
    </>
  );
}

export default Burger;
