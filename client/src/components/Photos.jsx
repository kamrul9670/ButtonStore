import React from 'react';

const Photos = () => {
  const profiles = [
    {
      name: "Sadruddin",
      phone: "+91 9876543210",
      facebook: "https://facebook.com/sadruddin",
      image: "https://via.placeholder.com/250", // Replace with actual photo URLs
    },
    {
      name: "Habibur Rahman",
      phone: "+91 8765432109",
      facebook: "https://facebook.com/habibur",
      image: "https://via.placeholder.com/250", // Replace with actual photo URLs
    },
    {
      name: "Ali Ahmed",
      phone: "+91 7654321098",
      facebook: "https://facebook.com/aliahmed",
      image: "https://via.placeholder.com/250", // Replace with actual photo URLs
    },
  ];

  return (
    <div style={styles.container}>
      {profiles.map((profile, index) => (
        <div key={index} style={styles.card}>
          <img src={profile.image} alt={profile.name} style={styles.photo} />
          <h3 style={styles.name}>{profile.name}</h3>
          <p style={styles.phone}>{profile.phone}</p>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Visit Facebook
          </a>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  card: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '30%',
  },
  photo: {
    width: '250px',   // Updated width
    height: '250px',  // Updated height
    borderRadius: '50%',
    marginBottom: '15px',
    objectFit: 'cover',
  },
  name: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '10px',
  },
  phone: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#3b5998',
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s',
  },
  linkHover: {
    backgroundColor: '#365492',
  },
};

export default Photos;
