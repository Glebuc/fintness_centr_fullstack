import React from 'react';
import './../../index.css';
import Logo from './Logo';
import Navigation from './Navigation';
import { StickyContainer, Sticky } from 'react-sticky';

const SiteHeader: React.FC = () => {
  return (
    <StickyContainer>
      <Sticky topOffset={0}>
        {({ style }) => (
          <div className="sticky-header" style={{ ...style, zIndex: 1000 }}>
            <header aria-label="Site Header" className="bg-gray-800">
              <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
                <Logo />
                <Navigation />
              </div>
            </header>
          </div>
        )}
      </Sticky>
    </StickyContainer>
  );
};

export default SiteHeader;
