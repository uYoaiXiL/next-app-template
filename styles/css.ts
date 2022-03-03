import { css } from 'styled-components';

export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const posCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const posCenterX = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const posCenterY = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const bigFont = css`
  font-weight: bold;
  font-size: 40px;
`;
