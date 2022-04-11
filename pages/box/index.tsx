import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@store/index';

const Box = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  line-height: 300px;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;

function Index() {
  const { count } = useAppSelector((state) => state.count);
  const box = useRef<any>(null);
  useEffect(() => {
    if (box && box.current && process.browser) {
      box.current.addEventListener('mousedown', function (e) {
        const lx = box.current.offsetLeft;
        const ly = box.current.offsetTop;
        const x = e.pageX - lx;
        const y = e.pageY - ly;
        document.addEventListener('mousemove', move);

        function move(e) {
          box.current.style.top = e.pageY - y + 'px';
          box.current.style.left = e.pageX - x + 'px';
        }

        document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', move);
        });
      });
    }
  }, [box]);
  return <Box ref={box}>{count}</Box>;
}

export default Index;
