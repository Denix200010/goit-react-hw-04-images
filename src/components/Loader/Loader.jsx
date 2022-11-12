import style from '../defStyles.module.css';

import { FallingLines } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loader = () => {
    return <span className={style.Loader}><FallingLines
  color="#3f51b5"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/></span>
}