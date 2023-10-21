"use client"; 
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import TableCarburant from '@/components/table_carburant';
import styles from '/app/page.module.css';
import { useCuveURL } from '@/context/idCuveURL';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { IdCuveURL } = useCuveURL(); // Note the parentheses () here

  return (
    <>
      <TableCarburant idCuve={IdCuveURL.num} titleCuve={IdCuveURL.title} />
      <div className={styles.ventContent}>
        {children}
      </div>
    </>
  );
}
