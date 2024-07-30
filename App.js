import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import TelaPdrao from './src/componentes/TelaPdrao';
import Rotas from './src/Rotas';

export default function App() {
  return <TelaPdrao><Rotas /></TelaPdrao>;
}