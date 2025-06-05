import  React, { useState }  from 'react';

export default function Accordion(props) {
     const appStyle = {
          backgroundColor: props.isDark ? '#121212' : '#f5f5f5',
          color: props.isDark ? '#ffffff' : '#000000',
          minHeight: '91.3vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
     };
     return (
          <div style={appStyle}>
               <h1>{props.isDark ? 'Dark Mode' : 'Light Mode'}</h1>
               <button onClick={props.toggleMode}>
                    Toggle Dark Mode
               </button>
          </div>
     );
}