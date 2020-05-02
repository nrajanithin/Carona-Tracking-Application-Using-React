import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api/index';
const CountryPicker = ({handleCountryChange})=>
{
    const [fetchedCountryies,setFetchedCountries] = useState([]);
    useEffect(()=>
    {
        const fetchAPI = async()=>
        {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[setFetchedCountries]);
    console.log(fetchedCountryies);
    return (
       <FormControl className = {styles.FormControl}>
           <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    fetchedCountryies.map((country,i)=><option key={i} value={country}>{country}</option>)
                }
           </NativeSelect>
       </FormControl>
    );
}
export default CountryPicker;