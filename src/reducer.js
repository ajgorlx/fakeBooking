export const reducer = (state, action) => {
    switch (action.type) {
      case 'change-theme':
      const theme = state.theme === 'danger' ? 'primary' : 'danger'
        return {...state, theme};
        case 'login':
          return {...state, user: action.user};
        case 'logout':
          return {...state, user: null};
        default:
          throw new Error('Nie ma takiej akcji' + action.user)
    }
  }
  

  
  export const initialState = {
    theme: 'primary',
    user: JSON.parse(window.localStorage.getItem('token-data')) ? true : null
  }
  