export const toggleStyle = (myStyle, setMyStyle, btntext, setBtntext) => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtntext("Enable Light Mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtntext("Enable Dark Mode");
    }
  };
  