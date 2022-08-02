import React from 'react';
import Jokes from './jokes';


function App(props) {
  return (
    <div>
      <Jokes 
          setup ="Jerry Laruba Festus"
          punchline ="Artist"
      />
      <Jokes
          setup ="Noah Ndacyayisenga"
          punchline ="Coder"
      />
      <Jokes 
          setup ="Lumu Christopher"
          punchline ="Business guy"
      />
      <Jokes 
          setup ="Nsereko Josh"
          punchline ="Joker"
      />
      <Jokes 
          setup ="Agaba Derrick"
          punchline ="Short man"
      />
    </div>
  );
}

export default App;
