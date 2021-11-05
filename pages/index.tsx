import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import tw, { styled } from "twin.macro";

interface ContainerProps {
  hasBg?: boolean;
}

const styles = {
  container: ({ hasBg }: ContainerProps) => [
    tw`flex w-full`, // Add base styles first
    hasBg && tw`bg-green-300`, // Then add conditional styles
  ],
  column: tw`w-1/2`,
};

const Component = ({ hasBg }: ContainerProps) => (
  <section css={styles.container({ hasBg })}>
    <div css={styles.column}>Column 1 </div>
    <div css={styles.column}> Column 2 </div>
  </section>
);

const StyledInput = styled.input`
  color: black;
  ${({ hasBorder }) => hasBorder && tw`border-purple-500`}
`;
const Input = () => <StyledInput hasBorder />;
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Main Page</title>
      </Head>
      <StyledInput tw="" />
      <Component hasBg={true} />

      <div tw="relative bg-indigo-800">
        <div tw="absolute inset-0">
          <img
            tw="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            tw="absolute inset-0 bg-indigo-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div tw="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 tw="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p tw="mt-6 text-xl text-indigo-100 max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
