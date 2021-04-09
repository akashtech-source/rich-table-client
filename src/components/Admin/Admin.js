import React, { useState } from 'react';
import './Admin.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const [imageURL, setImageURL] = useState(null)
    
    const onSubmit = data => {
        const mealData = {
            name: data.name,
            price: data.price,
            detail: data.detail,
            category: data.category,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/mealData`

        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mealData)
        })
        .then(res => console.log('server side response', res));
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '57b905a03ccacc540eb3968827f84d35');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <input defaultValue="test" {...register("name")} />
        <br/>
        <input defaultValue="price" {...register("price")} />
        <br/>
        <input defaultValue="detail" {...register("detail")} />
        <br/>
        <input defaultValue="category" {...register("category")} />
        <br/>
        <input name="price" type="file" onChange={handleImageUpload} />
        <br/>
        <input type="submit" />
        </form>           
        </div>
    );
};

export default Admin;