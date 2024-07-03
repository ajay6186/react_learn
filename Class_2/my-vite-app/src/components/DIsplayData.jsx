// const DisplayData = ({fruits, person}) => {

//     console.log("fruits :", fruits);
//     console.log("person :", person);
//     return (
//         <div>
//             <h2>Fruit List</h2>
//             <h2>Person Info:</h2>
//             <p>Name: {person.name}</p>
//             <p>Age: {person.age}</p>
//         </div>
//     )
// }

const DisplayData = (props) => {

    const {fruits, person} = props;

    console.log("fruits :", fruits);
    console.log("person :", person);
    return (
        <div>
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    console.log('test index', index),
                    <li key={index}>{fruit}</li>))               
                    }
            </ul>
            <h2>Person Info:</h2>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
        </div>
    )
}
export default DisplayData