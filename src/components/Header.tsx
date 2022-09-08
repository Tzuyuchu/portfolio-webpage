import { FunctionComponent, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import leafGraphic from '../../public/leaf-graphic.webp';
import titleList from '../../public/titles.json';


const Header: FunctionComponent = () => {

  let titleSequence: (string|number)[] = [];

  titleList.forEach(([title, duration]) => {
    titleSequence.push(title, duration, '', 1000);
  });

  return (
    <header>
      <div className={styles.home}>
        <Image
          className={styles.leaf} 
          src={leafGraphic}
          alt="Leaf Graphic"
          width={170}
          height={170}
        />
        <h1 className={styles.title}>nicholas nguyen.</h1>
        <div className={styles.TypeAnimate}>
          <TypeAnimation 
            className={styles.typer}
            sequence={titleSequence}
            speed={40}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>
      </div>
    </header>
  );
}

export default Header