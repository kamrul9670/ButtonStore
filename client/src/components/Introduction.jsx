import React, { useState } from 'react';

const Introduction = () => {
  const [showDetails, setShowDetails] = useState(false); // State to toggle visibility

  const handleToggle = () => {
    setShowDetails(!showDetails); // Toggle visibility on button click
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Shop


     

      </h1>
      <p style={styles.paragraph}>
        Established in 2023 by <strong>Sadruddin</strong>, son of Habibur Rahman, this shop aims to provide products at wholesale 
        rates in our area. 
      </p>
     
      <h2 style={styles.subheading}>
        Key Features of Sewing Machines
        <button 
          onClick={handleToggle} 
          style={styles.iconButton}
        >
          {showDetails ? '−' : '='}
        </button>
      </h2>
      {showDetails && (
  <div style={styles.container}>
    <p style={styles.paragraph}>
      A sewing machine is a device that uses thread to join pieces of fabric together. Invented during the Industrial Revolution 
      to reduce manual labor in clothing manufacturing, the first sewing machine was designed by <strong>Thomas Saint</strong> 
      in 1790. Later, in 1874, <strong>William Newton Wilson</strong> built the first hand-crank sewing machine using Saint's 
      patent drawings.
    </p>
    <ul style={styles.list}>
      <li><strong>Operation:</strong> A needle inserts into the fabric and rotates a hook, creating a stitch.</li>
      <li><strong>Early Use:</strong> Initially sold to clothing manufacturers, sewing machines gained popularity with the middle class in the 1860s.</li>
      <li><strong>Electric Machines:</strong> Electric sewing machines were introduced in the 1880s with motors later integrated into their casings.</li>
      <li><strong>Modern Features:</strong> Today, sewing machines offer various stitching patterns and advanced functionality.</li>
    </ul>
  </div>
)}

      <p style={styles.paragraph}>
        Our shop is committed to bringing high-quality sewing machines and accessories to our customers at affordable prices.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    fontFamily: "'Poppins', sans-serif",
    lineHeight: '1.8',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#2c3e50',
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  paragraph: {
    color: '#34495e',
    fontSize: '1rem',
    marginBottom: '15px',
  },
  subheading: {
    color: '#2980b9',
    fontSize: '1.5rem',
    marginBottom: '10px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  list: {
    listStyleType: 'circle',
    paddingLeft: '20px',
    marginBottom: '20px',
    color: '#34495e',
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '3.5rem',
    color: 'red',
    cursor: 'pointer',
  },
};

export default Introduction;
