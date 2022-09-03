import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { MobileView, BrowserView } from 'react-device-detect';
import SideBar from './components/SideBar';

const Home: NextPage = () => {
return (<>
    <BrowserView>
      <SideBar />
    </BrowserView>
    <p>Hello</p>
  </>)
}

export default Home
