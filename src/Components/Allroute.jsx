import { Route, Routes } from 'react-router-dom';
import RegistrationForm from "./RegistrationForm"
import Allguest from './Allguest';
import Caution from './Caution';
const Allroute = () => {
  return (
    <Routes>
     <Route path='/' element={<RegistrationForm />}  /> 
     <Route path='/guest' element={<Allguest />}  /> 
     <Route path='/caution' element={<Caution />}  /> 

    </Routes>
  );
}

export default Allroute;
