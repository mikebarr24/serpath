import "./MobileDropdown.scss";
interface MobileDropdownProps {
  items: string[];
  visible: boolean;
  className?: string;
}

function MobileDropdown({ items, visible, className }: MobileDropdownProps) {
  const menuItems = items.map((item: string, index) => (
    <a key={index}>
      <li className="font-large margin-tb-2">{item}</li>
    </a>
  ));

  return (
    <div className={`dropdown-container ${className} ${visible && "open"}`}>
      <ul className="dropdown-menu-list lst-no-bullets">{menuItems}</ul>
    </div>
  );
}

export default MobileDropdown;
