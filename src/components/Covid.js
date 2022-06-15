import React, { useEffect , useState} from 'react';
import './Covid.css';

const Covid = () => {
    const [data , setData] = useState([]);
    const covidDetail = async () => {
   try{
    
        const data = await fetch('https://data.covid19india.org/data.json');
        const jsonData =  await data.json();
        console.log(jsonData.statewise[0]);
        setData(jsonData.statewise[0]);

       
   } catch(err) {
    console.log(err);
   }
}

   useEffect(()=> {
    covidDetail();
   },[]);


  return (
    <section className='container'>

       <center>
        <h2>Task-2</h2>
         <h1  className='heading'>Track Covid Reports</h1></center>
    <div className='card_flex'>
    
    <div className='card one'>
       <h1 className='card__title'>OUR <strong>COUNTRY</strong></h1>
       <strong className='card__detail'>INDIA</strong>
    </div>

    <div className='card two'>
       <h1 className='card__title'>TOTAL <strong>RECOVERED</strong></h1>
       <strong className='card__detail'>{data.recovered}</strong>
    </div>

    <div className='card three'>
       <h1 className='card__title'>TOTAL <strong>CONFIRMED</strong></h1>
       <strong className='card__detail'>{data.confirmed}</strong>
    </div>

    <div className='card four'>
       <h1 className='card__title'>TOTAL <strong>DEATHS</strong></h1>
       <strong className='card__detail'>{data.deaths}</strong>
    </div>

    <div className='card five'>
       <h1 className='card__title'>TOTAL <strong>ACTIVE</strong></h1>
       <strong className='card__detail'>{data.active}</strong>
    </div>

    <div className='card six'>
       <h1 className='card__title'>LAST <strong> UPDATED</strong></h1>
       <strong className='card__detail'>{data.lastupdatedtime}</strong>
    </div>
    </div>
    </section>
  )
}

export default Covid