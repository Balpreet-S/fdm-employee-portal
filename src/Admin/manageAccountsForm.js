import React, { useState } from 'react';
import ViewAccountForm from './viewAccountForm';
import CreateAccountForm from './createAccountForm';
import NavigationBar from '../NavBar';
import "./Admin.css";
function ManageAccountsForm() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <NavigationBar/>
      <h2>Account Management</h2>
      <br/>
      <div className={"button-box"}>
        <button onClick={() => handleOptionChange('create')}>Add Account</button>
        <button onClick={() => handleOptionChange('view')}>Edit/Delete Account</button>
      
      </div>
      <div>
        {selectedOption === 'create' && <CreateAccountForm/>}
        {selectedOption === 'view' && <ViewAccountForm />}
      
      </div>
    </div>
  );
}

export default ManageAccountsForm;

