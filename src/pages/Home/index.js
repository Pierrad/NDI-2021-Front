import React from "react";


import * as SC from './styled';

const Home = () => {
  return (
   
      <SC.Container>

        <SC.Titre>
          Bienvenue matelot !
        </SC.Titre>
          
        
        <SC.Slogan>
          Hommes, femmes et enfants<br/>
          Du courage, de l'abnégation et mépris du risque
        </SC.Slogan>
        
      
        <SC.Statistics> 
          + de 1100 sauvetages individuels <br/>
          + de 900 sauvetages en mer <br/>
          270 ans d'histoire <br/>
        </SC.Statistics>

        <SC.Quote>
        Les sauvetages? Mais tout le monde en fait… <br/>
        Si un homme tombe dans la « Baille » <br/>
        est ce qu’on ne va pas le chercher? <br/>
        Il n’y a à cela aucun mérite…
        </SC.Quote>

      </SC.Container>
    
  );
}

export default Home;