import React, { useEffect } from 'react';
import { getAll } from '../source';


export const Ispis = ({ispis,setIspis}) => {
     useEffect(() => {
        getAll().then(res => {
            console.log(res.data)
            setIspis(res.data)
        })

     },[])
     return (
         <>
         {ispis.map(el => <img style={{ width: '150px' }} alt='' src={el.flag}/>)}
         </>
     )    }