import {useState} from 'react';

export function useLocalStorage(key, initialValue){
    const [storedValue, setValue] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })
    const customSetter = (initialValue)=>{
        console.log(initialValue, ' new ')
        setValue(initialValue);
        window.localStorage.setItem(key, initialValue)
    }
    console.log(storedValue)
    return [storedValue, customSetter];
}
