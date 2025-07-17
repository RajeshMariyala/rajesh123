// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Components/New folder/try';

 const App = () => {
//   const [buses, setBuses] = useState([]);
//   const [filters, setFilters] = useState({ ac: false, sleeper: false });

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/buses')
//       .then(response => {
//         setBuses(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const handleFilterChange = (filterName, value) => {
//     setFilters({ ...filters, [filterName]: value });
//   };

//   const filteredBuses = buses.filter((bus) => {
//     if (filters.ac && !bus.ac) return false;
//     if (filters.sleeper && !bus.sleeper) return false;
//     return true;
//   });

//   return (
//     <div>
//       <Filters onChange={handleFilterChange} />
//       <SampleBuses buses={filteredBuses} />
//     </div>
//   );
// };

// const Filters = ({ onChange }) => {
//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     onChange(name, checked);
//   };

//   return (
//     <div>
//       <h2>Filters</h2>
//       <label>
//         <input type="checkbox" name="ac" onChange={handleChange} />
//         AC
//       </label>
//       <br />
//       <label>
//         <input type="checkbox" name="sleeper" onChange={handleChange} />
//         Sleeper
//       </label>
//     </div>
//   );
// };

// const SampleBuses = ({ buses }) => {
//   return (
//     <div>
//       <h2>Available Buses</h2>
//       <ul>
//         {buses.map((bus) => (
//           <li key={bus.id}>
//             {bus.name} - {bus.type} {bus.ac && '(AC)'} {bus.sleeper && '(Sleeper)'}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
<>
<Dashboard/>
</>
 };
export default App;
