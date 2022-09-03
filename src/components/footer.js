import React from 'react';


export default function Footer() {

  let currentYear = new Date().getFullYear();

  return (
    <div style={{ backgroundColor: 'lightgray', textAlign: 'center', padding: '2px', position: 'fixed', bottom: '0', width: '96vw'}}>
      <h2>&copy; {currentYear}  Shams Alsaraireh</h2>
    </div>
  )
}