
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CardList } from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import styles from "/app/page.module.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // title: 'Create Next App',
  // description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.SideBar}>
          <Sidebar />
        </div>
        {children}

        </body>
      <title></title>
    
    </html>
  )
}