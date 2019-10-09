import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export function useDarkMode(){
  const [someValue, setSomeValue] = useLocalStorage('darkMode', true);
  useEffect(()=>{
      let bodyClass = document.querySelector('body');
      if(someValue === true){
          bodyClass.classList.add('dark-mode');
      }
      else{
          bodyClass.classList.remove('dark-mode');
      }
  },[someValue])
  return [someValue, setSomeValue]
 
}