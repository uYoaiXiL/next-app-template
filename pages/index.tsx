import type { NextPage } from 'next';
import Head from 'next/head';
import { incrementByAmount } from '@store/reducers/count';
import { wrapper } from '@store/index';
import styled from 'styled-components';
import Count from '@components/Count';

const Hello = styled.h2`
  text-align: center;
  padding-top: 50px;
`;
const Home: NextPage<{ name: string }> = (props) => {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Hello>{`hello ${props.name}!`.toUpperCase()}</Hello>
      <Count />
    </>
  );
};
export const getStaticProps = wrapper.getStaticProps((store): any => async () => {
  await store.dispatch(incrementByAmount(100));
  return {
    props: {
      name: 'world',
    },
  };
});
export default Home;
