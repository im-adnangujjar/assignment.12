import React from 'react';
import {Row ,Col} from 'react-bootstrap'
import './FourthSection.css'


export default function FourthSection() {
  return(
    <div className='color'>
<div>
<Row> 
<Col lg={6}>
<p className='paragraph3'>Talk to a Redfin Agent</p>
<div><p className='paragraph4'>Start your search with an expert local agent—there’s no pressure or obligation.</p></div>
</Col>
<Col lg={6}>
    <p className='paragraph4'>Where are you searching for homes?</p>
   
       <input type="text" placeholder='search' className='input'/><img src="./assets/search.png"/>
         
</Col>
</Row>
   
</div>
    </div>
  
  )
}
