import { MAKE_SERIVE_CALL } from '../../Utils/types';
import { DATABASE_URL } from '../../Utils/url';
import axios from 'axios';


export const fetchData = () => {
    const resultGet = axios(`${DATABASE_URL}/todoList.json`).then(
        response => {
           
            let post = [];
            for (let key in response.data){
                post.push({
                    ...response.data[key],
                    id:[key]
                   
                })
            }
           
            return post;
        }
    );
    return{
        type:MAKE_SERIVE_CALL,
        payload:resultGet
    }
} 

export const postData = (data) =>{
    let resultPost = axios({
        method: 'post',
        url: `${DATABASE_URL}/todoList.json`,
        data: data
    }).then(
        response => response.data
    );
    return {
        type:MAKE_SERIVE_CALL,
        
    };
}

export const deleteData = (id) => {
    const request = axios({
        method:'delete',
        url:`${DATABASE_URL}/todoList/${id}.json`
    }).then (
        response => response.data
    )

    return {
        type:MAKE_SERIVE_CALL
    }
}