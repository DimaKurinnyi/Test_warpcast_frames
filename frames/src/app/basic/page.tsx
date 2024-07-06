import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basic Frame',
  description: 'A Farcaster Frame Demo',
  openGraph: {
    title: 'Basic Frame',
    description: 'A Farcaster Frame Demo',
    images: ["https://test-frames-peach.vercel.app/Quizz1.jpg"],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': "https://test-frames-peach.vercel.app/Quizz1.jpg",
    'fc:frame:post_url': "https://test-frames-peach.vercel.app/api/basic?id=1",
    'fc:frame:button:1': 'Start',
  },
};

export default function Page() {
  return (
    <div>
      <h1>Basic Frame</h1>
    </div>
  );
}
