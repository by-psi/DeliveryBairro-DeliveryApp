import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './rotas';
import { Amplify } from 'aws-amplify';
import './style/global.css';

import awsconfig from "../src/aws-exports";
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <Rotas />
  </>
);