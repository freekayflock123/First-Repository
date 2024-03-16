
function Card(props){
return(
    <div className='MainCardDiv'>
        <img src={props.Image} alt="Profile Picture"  className='pfp'/>
        <h1 className='Name'>Name: {props.Name}</h1>
        <p className='Description'>Description: {props.Desc}</p>
    </div>
);
}

export default Card