import React from 'react'
import { Button  } from 'react-bootstrap';
import PropTypes from 'prop-types';


function Profile(props) {
    const handleName = FullName => alert(FullName) ;
    const AlertBtn = (props) =>{
       return(
           <Button variant="info" onClick={() => props.handleName(`User Name : ${props.FullName} `)}>
            Alert Name
           </Button>
           
       )
    }  
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:10,width:400,margin:"auto",background:"white" }}>
            <div style={{backgroundColor:"#C0C0C0",borderTopLeftRadius:"10px" ,borderTopRightRadius:"10px",width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            {props.children}
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p style={{fontSize:20}}>Name: </p>
            <h4> {props.FullName}</h4>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p style={{fontSize:20}} >Bio :</p>
            <h4>{props.Bio}</h4>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  
            <p style={{fontSize:20}} >Profession :</p>
            <h4>{props.Profession}</h4>
            </div>
            <div style={{marginBottom:15}}>
            <AlertBtn  handleName={handleName} FullName={props.FullName}/>
            </div>
            
             
            
        </div>
       
    )
}
Profile.defaultProps={
    FullName : "Malek Hammoudi",
    Bio : "Simplicity is the key to happiness",
    Profession  : "Full Stack JS Developer"
  };
  
  // props type
  Profile.propTypes  = {
    FullName : PropTypes.string,
    Bio : PropTypes.string,
    Profession  : PropTypes.string
  }
export default Profile
