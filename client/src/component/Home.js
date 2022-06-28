import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
export default function Home () {
  
  // déclaration du state toys
  const [toys, setToys] = useState([]);

  async function getToys() {
    try {
      const response = await fetch(`http://localhost:5000/toys/`);
      setToys(response)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getToys()
  }, [])
  
  return( 
    <Link to="/">
      <table>
       <tbody>
      <tr>
        <td>{toys.id}</td>
        <td>{toys.category_id}</td>
        <td>{toys.description}</td>
        <td>{toys.price}</td>
      </tr>
      </tbody>
      </table>
    </Link>
  ) 
};
 
// export default function RecordList() {
 
//  // This method fetches the toys from the database.

 
//      if (!response.ok) {
//        const message = `An error occurred: ${response.statusText}`;
//        window.alert(message);
//        return;
//      }
 
//      const toys = await response.json();
//      setToys(toys);
//    }
 
//    getRecords();
 
//    return;
//  }, [toys.length]);
 
//  // This method will delete a record
//  async function deleteRecord(id) {
//    await fetch(`http://localhost:5000/${id}`, {
//      method: "DELETE"
//    });
 
//    const newRecords = toys.filter((el) => el._id !== id);
//    setToys(newRecords);
//  }
 
//  // This method will map out the toys on the table
//  function recordList() {
//    return toys.map((record) => {
//      return (
//        <Record
//          record={record}
//          deleteRecord={() => deleteRecord(record._id)}
//          key={record._id}
//        />
//      );
//    });
//  }
 
//  // This following section will display the table with the toys of individuals.
//  return (
//    <div>
//      <h3>Record List</h3>
//      <table className="table table-striped" style={{ marginTop: 20 }}>
//        <thead>
//          <tr>
//            <th>Name</th>
//            <th>Position</th>
//            <th>Level</th>
//            <th>Action</th>
//          </tr>
//        </thead>
//        <tbody>{recordList()}</tbody>
//      </table>
//    </div>
//  );
// }