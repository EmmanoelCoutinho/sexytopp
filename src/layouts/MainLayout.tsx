import { ReactNode } from 'react';

import AsideContainers from '../components/AsideContainers';
import AsideMenu from '../components/AsideMenu';
import FooterMenu from '../components/FooterMenu';

interface Iprops {
  mainContent: ReactNode;
  title: string;
}

function MainLayout({ mainContent, title }: Iprops) {
  return (
    <>
      <div className="main_container">
        <div className="left_container">
          <AsideMenu />
        </div>
        <div className="middle_container">
          <span className="page_title">{title}</span>
          {mainContent}
        </div>
        <div className="right_container">
          <AsideContainers />
        </div>
      </div>
      <FooterMenu />
    </>
  );
}

export default MainLayout;
