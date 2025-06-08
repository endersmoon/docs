
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';

import '@/app/globals.css';
import 'nextra-theme-docs/style.css';

export const metadata = {};

const navbar = <Navbar logo={<b>PhoenixDS</b>} />;
const footer = <Footer> © Infoedge.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          navbar={navbar}
          sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
          docsRepositoryBase='https://github.com/shuding/nextra/tree/main/docs'
          footer={footer}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
