import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'hi hi',
    },
    {
      label: 'hi hello',
    },
    {
      label: 'hello hello',
    },
    {
      label: 'Error',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}/Quizz1.jpg`,
  },
  input: {
    text: 'Your Email',
  },
  postUrl: `https://test-frames-peach.vercel.app/api/advanced`,
});

export const metadata: Metadata = {
  title: 'Advanced Frame',
  description: 'Another, more advanced frame example',
  openGraph: {
    title: 'Advanced Frame',
    description: 'Another, more advanced frame example',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/Quizz1.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Advanced Frame</h1>
    </>
  );
}
