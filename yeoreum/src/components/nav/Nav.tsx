import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ModalPortal from '../modalPortal/ModalPortal';
import { NavUsual } from './NavBar';
import Hamburger from '../userModal/Hamburger';
import useResize from '../../hooks/useResize';

function Nav() {
  const { pathname } = useRouter();
  // 고객센터 페이지인지 아닌지
  const isServicePage = pathname.slice(0, 8) === '/service';
  const isInErrorPage = pathname.slice(0, 7) === '/_error';
  const isInChatPage = pathname.slice(0, 9) === '/chatting';

  const [hamburger, setHamburger] = useState(false);

  useResize('above', 640, () => setHamburger(false));

  return (
    <>
      {isInErrorPage || (
        <>
          <NavUsual
            isInChatPage={isInChatPage}
            isServicePage={isServicePage}
            setHamburger={setHamburger}
          />
          {hamburger && (
            <ModalPortal>
              <Hamburger onClose={() => setHamburger(false)} />
            </ModalPortal>
          )}
        </>
      )}
    </>
  );
}

export default Nav;
