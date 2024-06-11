// export const toggleStyle = (myStyle, setMyStyle, btntext, setBtntext) => {
//     if (myStyle.color === 'black') {
//       setMyStyle({
//         color: 'white',
//         backgroundColor: 'black'
//       });
//       setBtntext("Enable Light Mode");
//     } else {
//       setMyStyle({
//         color: 'black',
//         backgroundColor: 'white'
//       });
//       setBtntext("Enable Dark Mode");
//     }
//   };
  

export const toggleStyle = (component, myStyle, setMyStyle, btntext, setBtntext) => {
    const loginStyles = {
      dark: {
        color: 'white',
        backgroundColor: 'black',
        borderColor: 'white'
      },
      light: {
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black'
      }
    };
  
    const signupStyles = {
      dark: {
        color: 'yellow',
        backgroundColor: 'darkblue',
        borderColor: 'yellow'
      },
      light: {
        color: 'darkblue',
        backgroundColor: 'yellow',
        borderColor: 'darkblue'
      }
    };
  
    const styles = component === 'login' ? loginStyles : signupStyles;
  
    if (myStyle.color === styles.light.color) {
      setMyStyle(styles.dark);
      setBtntext("Enable Light Mode");
    } else {
      setMyStyle(styles.light);
      setBtntext("Enable Dark Mode");
    }
  };
  