import Alert from './Alert';
import Ionicons from '@expo/vector-icons/Ionicons';

const Inputs = () => {

 return (
  <div className="age-container">
   <form action="#">
    <ul>
     <li className='age'>
      <h3>Age</h3>
      <div className="fields">
       <Ionicons
        name="remove-circle"
        size={28}
        onClick={() => setAge(age - 1)}
       />
       <input
        type="number"
        placeholder='e.g 28'
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        min='1'
        required
       />
       <Ionicons
        name='add-circle'
        size={28}
        onClick={() => setAge(age + 1)}
       />
      </div>
     </li>
     <li className='weight'>
      <h3>Weight</h3>
      <div className="fields">
       <Ionicons
        name='remove-circle'
        size={28}
        onClick={() => setWeight(weight - 1)}
       />
       <input
        type="number"
        placeholder='e.g 68'
        value={weight}
        onChange={(e) => setWeight(parseInt(e.target.value))
        }
        required
       />
       <Ionicons
        name='add-circle'
        size={28}
        onClick={() => setWeight(weight + 1)}
       />
       <select
        className='units'
        value={selectedWeightUnit}
        onChange={(e) => setSelectedWeightUnit(e.target.value)}
       >
        <option value='Kgs'>Kgs</option>
        <option value='Ibs'>Ibs</option>
       </select>
      </div>
     </li>
     <li className='height'>
      <h3>Height</h3>
      <div className="fields">
       <Ionicons
        name='remove-circle'
        size={28}
        onClick={() => setHeight(Math.round((height - 0.1) * 10) / 10)}
        required
       />
       <input
        type="number"
        placeholder='e.g 1.8'
        value={height}
        onChange={(e) => setHeight(parseFloat(e.target.value))}
        step='0.1'
        required
       />
       <Ionicons
        name='add-circle'
        size={28}
        onClick={() => setHeight(Math.round((height + 0.1) * 10) / 10)}
       />
       <select
        className='units'
        value={selectedHeightUnit}
        onChange={(e) => setSelectedHeightUnit(e.target.value)}
       >
        <option value='m'>m</option>
        <option value='ft'>ft</option>
       </select>
      </div>
     </li>
    </ul>
   </form>
   {alert.show && <Alert />}
   <div className="button-container">
    <button className='calculate-btn' onClick={handleCalculation}>Calculate Your BMI</button>
   </div>
  </div>
 )
}

export default Inputs