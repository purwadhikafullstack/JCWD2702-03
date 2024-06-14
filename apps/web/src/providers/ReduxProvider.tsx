<<<<<<< HEAD
'use client'

import { Provider } from 'react-redux';
import { store } from '@/redux/app/store'



const ReduxProvider = ({children}:any) => {
    return(
        <Provider store={store}>         
                {children}
        </Provider>
    )
}

export default ReduxProvider
=======
'use client';

import { Provider } from "react-redux";
import { store } from "../redux/store";

const ReduxProvider = ({children}: any) =>{
  return(
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;
>>>>>>> cd8008a6c4c38056e1c2139b97ff56298293824b
