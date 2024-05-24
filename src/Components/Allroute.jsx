import { Route, Routes } from 'react-router-dom';
import RegistrationForm from "./RegistrationForm"
import Allguest from './Allguest';
import Caution from './Caution';
import ConfirmationPage from './ConfirmationPage';
const Allroute = () => {
  return (
    <Routes>
     <Route path='/' element={<RegistrationForm />}  /> 
     <Route path='/confirm' element={<ConfirmationPage />}  /> 

     <Route path='/guest' element={<Allguest />}  /> 
     <Route path='/caution' element={<Caution />}  /> 

    </Routes>
  );
}

export default Allroute;
