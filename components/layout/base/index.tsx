import { Footer, Navbar } from '@components/common';

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </>
  );
}
