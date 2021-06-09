import React,{useState, useEffect} from 'react';
import {List} from './List';
import {Button} from '@material-ui/core'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

export const Fav = () => {
    
    const [news, setNews] = useState({ 
        data:[],
        link: [],
    })
    useEffect(() =>{
        fetch('http://localhost:5000/getFav').then(response =>{
            if(response.ok){
                return response.json()
            }
        })
        .then(response =>setNews(response.result))
        .catch(err =>{
            console.log(err)
        })
    }, []);

    return (
        <>
        {/* {console.log(map(news[0].data)} */}
        <h3 className='list-item m-2 mt-3'> Favorite: </h3>
        <a href='/'><Button startIcon={<ArrowBackOutlinedIcon edge ='start'/>} className='btn btn-primary rounded'>Go back</Button></a>
        {news.length?news.map((d, i)=>{
            return <List data={d.data} link = {d.link} id={i} key = {i} />
        }):<Spinner/>}
        {/* {news.length?<Paginate length = {news[0].data.length/10} pag = {getPaginatedData} />:""} */}
        </>
    )
}


const Spinner = ()=>{
    return (
        <div class="d-flex justify-content-center m-5">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    )
}