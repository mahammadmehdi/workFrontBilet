import React, { useEffect, useState } from 'react'

function UseLocalStorage(key, initialVal="") {
    const [value, setValue] = useState(localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):initialVal)

    useEffect(() => {
      localStorage.setItem(key,JSON.stringify(value))
    }, [value,key])
    
  return [value,setValue]
}

export default UseLocalStorage