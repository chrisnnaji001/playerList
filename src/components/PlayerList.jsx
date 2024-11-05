import React from 'react';
import PlayerCard from './PlayerCard';

import players from './mopData/players'

const PlayerList = () => {
  return (
      <div className='mx-[80px] mt-[50px] flex flex-wrap gap-8 justify-center'>
        {players.map((player, index) => (
          
            <PlayerCard
              key={index}
              name={player.name}
              team={player.team}
              jerseyNumber={player.jerseyNumber}
              age={player.age}
              imageUrl={player.imageUrl}
              nationality={player.nationality}
            />
          
        ))}
      </div>
  );
};

export default PlayerList;
