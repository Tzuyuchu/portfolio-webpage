import { FunctionComponent } from 'react'
import styles from '../../styles/Tab.module.scss';

type Prop = {
    name: string,
    active?: boolean
}

const Tab: FunctionComponent<Prop> = ({ name, active = false }: Prop) => {
    return <div className={styles.box} onClick={() => 0}>
        <div className={styles.innerText}>
            {name}
        </div>
    </div>
}

export default Tab;