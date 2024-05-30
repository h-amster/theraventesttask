import { ReactNode, useEffect } from 'react';
import './Modal.scss';
import { lockBody } from '../../utils/lockBody';
import { unlockBody } from '../../utils/unlockBody';

type Props = {
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    lockBody();

    return () => {
      unlockBody();
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal__content">{children}</div>
    </div>
  );
};
