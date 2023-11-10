import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import './App.css';
import { Card } from 'react-bootstrap';
import AndhraPradesh from './components/AndhraPradesh';
import ArunachalPradesh from './components/ArunachalPradesh';
import Bihar from './components/Bihar';
import Westbengal from './components/Westbengal';
import Admin from './components/admin';
import User from './components/user';
import Coardinator from './components/Coardinator';
import Lead from './components/Lead';
import Otplogin from './components/Otplogin';
import UploadContent from './components/UploadContent';
import Upload from './components/Upload';
import Userhandle from './components/Userhandle'
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';
import Telangana from './components/Telangana'
import Maharashtra from './components/Maharashtra';
import Up from './components/Up';
import Tn from './components/Tn';
import Rajasthan from './components/Rajasthan'
import Karnataka from './components/Karnataka';
import Gujarath from './components/Gujarath';
import Odissa from './components/Odissa';
import Kerala from './components/Kerala'
import Assam from './components/Assam'
import Punjab from './components/Punjab'
import Chattisgarh from './components/Chattisgarh'
import Haryana from './components/Haryana'
import Delhi from './components/Delhi'
import Jk from './components/Jk'
import Uttharakand from './components/Uttharakand'
import Hp from './components/Hp'
import Tripura from './components/Tripura'
import Meghalaya from './components/Meghalaya'
import Manipur from './components/Manipur'
import Nagaland from './components/Nagaland'
import Goa from './components/Goa'
import Pandicherry from './components/Goa'
import Mizoram from './components/Mizoram'
import Chandigarh from './components/Chandigarh'
import Sikkim from './components/Sikkim'
import ANI from './components/ANI'
import Lakshadweep from './components/Lakshadweep'
import Ladakh from './components/Ladakh'
import Adminlogin from './components/Adminlogin';
import Userlogin from './components/Userlogin';
import Leadlogin from './components/Leadlogin';
function App() {


  return (
    <Router>
      
      <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Andhra" element={<AndhraPradesh />} />
          <Route path="/Aruna" element={<ArunachalPradesh />} />
          <Route path="/Bihar" element={<Bihar />} />
          <Route path="/Westbengal" element={<Westbengal />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/Lead" element={<Lead />} />
          <Route path="/Coardinator" element={<Coardinator />} />
          <Route path="/UploadContent" element={<UploadContent />} />
          <Route path="/Otplogin" element={<Otplogin />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Userhandle" element={<Userhandle />} />
          <Route path="/EditableRow" element={<EditableRow />} />
          <Route path="/ReadOnlyRow" element={<ReadOnlyRow />} />
          <Route path="/Telangana" element={<Telangana />} />
          <Route path="/Maharashtra" element={<Maharashtra />} />
          <Route path="/rajastan" element={<Rajasthan />} />
          <Route path="/tamil" element={<Tn />} />
          <Route path="/up" element={<Up />} />
          <Route path="/karnataka" element={<Karnataka />} />
          <Route path="/gujarat" element={<Gujarath />} />
          <Route path="/odisa" element={<Odissa />} />
          <Route path="/kerala" element={<Kerala />} />
          <Route path="/assam" element={<Assam />} />
          <Route path="/punjab" element={<Punjab />} />
          <Route path="/Chat" element={<Chattisgarh />} />
          <Route path="/haryana" element={<Haryana />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/jhk" element={<Jk />} />
          <Route path="/uk" element={<Uttharakand />} />
          <Route path="/hp" element={<Hp />} />
          <Route path="/tripura" element={<Tripura />} />
          <Route path="/megalaya" element={<Meghalaya />} />
          <Route path="/manipur" element={<Manipur />} />
          <Route path="/nagaland" element={<Nagaland />} />
          <Route path="/goa" element={<Goa />} />
          <Route path="/pandichery" element={<Pandicherry />} />
          <Route path="/mizoram" element={<Mizoram />} />
          <Route path="/chandigarh" element={<Chandigarh />} />
          <Route path="/sikkim" element={<Sikkim />} />
          <Route path="/Andaman" element={<ANI />} />
          <Route path="/ladak" element={<Ladakh />} />
          <Route path="/lakshdweep" element={<Lakshadweep />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/leadlogin" element={<Leadlogin />} />
          </Routes>
          
       
      </Router>
  );
};

export default App;
