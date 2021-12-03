import React, { useState } from 'react';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

import { addRescue } from './api';
import * as SC from './styled';

const Community = () => {
  const [boatName, setBoatName] = useState('');
  const [boatMatricule, setBoatMatricule] = useState('');
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [rescuer, setRescuer] = useState('');
  const [deads, setDeads] = useState('');
  const [saved, setSaved] = useState('');
  const [date, setDate] = useState(new Date());
  const [errors, setErrors] = useState('');


  const handleBoatName = (e) => {
    setBoatName(e.target.value);
  };

  const handleBoatMatricule = (e) => {
    setBoatMatricule(e.target.value);
  };

  const handleStory = (e) => {
    setStory(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  
  const handleRescuer = (e) => {
    setRescuer(e.target.value);
  };

  const handleDeads = (e) => {
    setDeads(e.target.value);
  };

  const handleSaved = (e) => {
    setSaved(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (boatName === '' || boatMatricule === '' || title === '' || story === '' || rescuer === '' || deads === '' || saved === '') {
      setErrors('Veuillez remplir tous les champs');
    } else {
      addRescue({ boatName, boatMatricule, title, story, rescuer, deads, saved, date: parseInt(moment(date).format('X')) })
    }
  };

  return (
    <SC.Container>
      <SC.Wrapper>
        <SC.Card>
          <SC.Title>{"Soumettre un nouveau sauvetage"}</SC.Title>
          <SC.Inputs>
            <SC.Input placeholder={'Nom du bateau'} value={boatName} onChange={handleBoatName}/>
            <SC.Input placeholder={'Matricule du bateau'} value={boatMatricule} onChange={handleBoatMatricule}/>
            <SC.Input placeholder={'Titre'} value={title} onChange={handleTitle}/>
            <SC.Input placeholder={"L'histoire"} value={story} onChange={handleStory}/>
            <SC.DateInput selected={date} onChange={(date) => setDate(date)} />
            <SC.Input placeholder={'Nom des sauveteurs'} value={rescuer} onChange={handleRescuer} />
            <SC.Input placeholder={'Noms des personnes décédés'} value={deads} onChange={handleDeads}/>
            <SC.Input placeholder={'Noms des personnes sauvées'} value={saved} onChange={handleSaved}/>
          </SC.Inputs>
          {errors && (
            <SC.Errors>{errors}</SC.Errors>
          )}
          <SC.SubmitButton onClick={handleSubmit}>Soumettre</SC.SubmitButton>
        </SC.Card>
      </SC.Wrapper>
    </SC.Container>
  );
}

export default Community;