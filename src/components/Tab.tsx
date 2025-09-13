import { NavLink } from 'react-router-dom';

import './Tab.css';

interface Tab {
  label: string;
  link: string;
}

interface TabsProps {
  tabs: Tab[];
  children?: React.ReactNode;
}

const Tab = ({children, tabs}: TabsProps) => {
  return (
  <>
   <ul className="tab-list">
      {tabs.map((tab, idx) => (
        <li key={idx}><NavLink className="tab-link" to={tab.link}>{tab.label}</NavLink></li>
      ))}
    </ul>
    
    {children && (
      <div className="tab-contents">
        {children}
      </div>
    )}
  </>
  )
}

export default Tab;