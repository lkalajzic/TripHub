'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '../../styles/globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
