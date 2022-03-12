import React from 'react';
import Grid from '../../component/grid/Grid';
import Header from '../../component/header/Header';
import { Alignments } from '../../constant/Enum';
import { Labels } from '../../constant/Label';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header headerAlignment={Alignments.center}>{Labels.HEADER}</Header>
      <Grid></Grid>
    </div>
  );
}

export default App;