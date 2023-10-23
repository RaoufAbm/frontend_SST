"use client"; 
import type { Metadata } from 'next';
import TableCarburant from '@/components/table_carburant';
import styles from '/app/page.module.css';
import { useCuveURL } from '@/context/idCuveURL';
import AllPompistProvider from '@/context/dataPompist';
import VentURLProvider from '@/context/idVentURL';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { IdCuveURL } = useCuveURL();

  return (
    <>
      <TableCarburant idCuve={IdCuveURL.num} titleCuve={IdCuveURL.title} />
      <div className={styles.ventContent}>
        <VentURLProvider>
          {children}
        </VentURLProvider>
      </div>
    </>
  );
}
