import React from 'react'
import { getAll} from '../source' 
// import { Ispis } from './Ispis'

export const Odabir = ({kontinent, setKontinent, setIspis}) => {
        let regioni = ["Africa", "Americas", "Asia", "Europe", "Oceania"]



    const naKlik = (el) => {
        getAll().then(res => {
            setKontinent(res.data)
            console.log(res.data)
        })
            kontinent.map(element => {
            if(el === element.region){
                    return(
                        <>
                        {/* <p>{element.name}</p> */}
                        <p key={element.name}>{element.capital + ' | ' + element.population}
                         <img style={{ width: '100px' }} alt='' src={element.flag} /></p>
                        </>
                )
            }
            return (
                <>
                 {setIspis(kontinent)}
                </>
            )
            })
        }
        return(
            <>
            
            {regioni.map(el => <button value={el} onClick={(el) => naKlik(el)}>{el}</button>)}
            
            </>
        )
            
    }
    