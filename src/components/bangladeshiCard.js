 
 
 const officialName="People's Republic of Bangladesh";

 const generalName="Bangladesh";

 const born="16/12/1971";

 const founder="sheikh mujibur rahman";

 const primeMinister="sheikh hasina";

 const continentName="South Asia,Asia";

 const area="148,460 km²";

 const division="Eight Division";

 const district="64 District";

 const mainEconomy="Agriculture";

 const famousFor="cricket,germents,leather,population";

 


     function bangladeshiCard(){
     return <div className="fullCard" >
                <h2 className='officialName'>{officialName}</h2>
                <p className='generalName'>{generalName}</p>
                <p className='born'>{born}</p>
                <p className='founder'>{founder}</p>
                <p className='primeMinister'>{primeMinister}</p>
                <p className='continentName'>{continentName}</p>
                <p className='area'>{area}</p>
                <p className='division'>{division}</p>
                <p className='district'>{district}</p>
                <p className='mainEconomy'>{mainEconomy}</p>
                <p className='famousFor'>{famousFor}</p>
                
          </div>}


     export default bangladeshiCard;