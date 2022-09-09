import { FunctionComponent, useState, RefObject } from "react";
import styles from "../../styles/Navigation.module.scss";
import Switch from "react-switch";

interface NavProp {
  headerRef: RefObject<HTMLDivElement>;
  navRef: RefObject<HTMLDivElement>;
}

const Navigation: FunctionComponent<NavProp> = ({ headerRef, navRef }) => {
  const [checked, setChecked] = useState(false);

  const changeColorMode = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  return (
    <div className={styles.navbar} ref={navRef}>
      <NavLink name="Home" refTo={headerRef} />
      <NavLink name="About" refTo={navRef} />
      <Switch
        className={styles.switch}
        onChange={changeColorMode}
        checked={checked}
        onColor="#0000"
        offColor="#F2F0B6"
        checkedIcon={false}
        uncheckedIcon={false}
        aria-label="Dark Mode Switch"
      />
    </div>
  );
};

interface NLProp {
  name: string;
  refTo: RefObject<HTMLDivElement>;
}

const NavLink: FunctionComponent<NLProp> = ({ name, refTo }) => {
  const moveToRef = () => {
    if (refTo.current != null) {
      refTo.current.scrollIntoView();
    }
  };

  return (
    <div className={styles.link}>
      <div onClick={moveToRef}>{name}</div>
    </div>
  );
};

export default Navigation;
