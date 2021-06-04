import React, {useState} from 'react';
const GifExpertApp = () => {
// const categorys = ['Naruto', 'One Punch', 'Yugioh'];
const [categories, setCategories] = useState(['Naruto', 'One Punch', 'Yugioh']);
const hamdleAdd = () => {
    setCategories([...categories, 'Dr.Stone']);
}
    return (
        <>
            <h2>Gif Expert App</h2>
            <hr/>
            <button onClick={hamdleAdd}>Agregar</button>
            <ol>
               {categories.map((category, i )=>{
                   return <li key={category}> {category} </li>
               })}
            </ol>
        </>

    );
}


export default GifExpertApp
