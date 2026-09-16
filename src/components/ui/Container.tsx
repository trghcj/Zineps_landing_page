import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`site-container ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Container;
