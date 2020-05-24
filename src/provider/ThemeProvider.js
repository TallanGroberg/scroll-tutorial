import React, {useState} from 'react';

// context variable goes here

const {Provider,  Consumer } = React.createContext()

const ThemeProvider = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  document.addEventListener('scroll', () => {
    console.log(window.scrollY)
    setScrollPosition(window.scrollY)
  })

  return (
    <Provider value={{
      scrollPosition,
    }}>
      {props.children}
    </Provider>
  );
};

//higher order component goes here.
export const withTheme = C => props => (
  <Consumer>
    {value => <C {...value} {...props} /> }
  </Consumer>
)


export default ThemeProvider;