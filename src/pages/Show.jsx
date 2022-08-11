import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { apiGet } from '../misc/config';

function Show() {
    // to get value of url
    const { id } = useParams();
    // to fetch data from api only when navigate page therefore we will destructure url and then use useEffect 
  
// to store result we create a useState hook

const [show, setShow] = useState(null);

    useEffect( () =>{
   
      apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>{
                setShow(results);
      })

    }, [id])

    console.log('show',show);


  return (
    <div>this is show page</div>
  )
}

export default Show