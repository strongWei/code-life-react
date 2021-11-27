import Aside from "./Aside";
import Section from './Section';

import './index.css';

export default function Layout(props){
    return (
      <div className='layout'>
        <Aside />
        <Section />
      </div>
    )
}