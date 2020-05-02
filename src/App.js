import React from 'react';
import {Cards,Chart,CountryPicker} from './Components';
import styles from './App.module.css';
import {fetchData} from './api/index';
import caronaImage from './images/image.png';
class App extends React.Component
{
  state = {
    data: {},
    country:''
  };
  handleCountryChange = async(country)=>
  {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country}); 
    console.log(fetchedData);
    console.log(country);
  }
  async componentDidMount()
  {
    const fetcheddata = await fetchData();
    this.setState({data:fetcheddata});
    console.log("nithin");
    console.log(fetcheddata);
  }
   render()
   {
      return(
        <div className={styles.container}>
          <img className={styles.image} src={caronaImage} alt="COVID-19" />
          <Cards data={this.state.data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={this.state.data} country={this.state.country}/>
        </div>
      );   
   }
}
export default App;