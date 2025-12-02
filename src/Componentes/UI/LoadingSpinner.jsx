'use client';

import React, { useState } from 'react';
import { SyncLoader } from "react-spinners";
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ size = 12 }) => {
  const [loading] = useState(true);
  const [color] = useState("#d4af37"); // Gold color to match the theme

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className={styles.loadingContainer}>
      <SyncLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;