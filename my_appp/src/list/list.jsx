// function ListsPoints2()
// {
//  const myvalue  = [300,400,500]
//  const rl = myvalue.map((listvalues) =>{
//     // console.log("done")
//     // console.log(listvalues)
//     return <li>{listvalues}</li>

//  });

//  return <div className="container">
//      <ul>{rl}</ul>

//  </div>}

// export default ListsPoints2




// function ListsPoints2(props)
// {
//  const myvalue  = props.myvalue;
//  const rl = myvalue.map((listvalues) =>{
//     console.log("done")
//     console.log(listvalues)
//     return <li>{listvalues}</li>

//  });

//  return <div className="container">
//      <ul>{rl}</ul>

//  </div>}

// export default 

const mydata = [100,200,500,400,300];
function ListKey (props) {
    const item = props.item;
    const key = props.keys;
    return (
        <li> {key} {item}</li>
    );
}


function MyList(props){
    const listItem = props.myvalue.map((listvalue,index) =>
    <ListKey keys = {index} item = {listvalue} />
    );
return (
    <div>
        <h2>Correct Key Usage Example</h2>
        <ul>
            {listItem}
        </ul>
    </div>
);
}
export default MyList;