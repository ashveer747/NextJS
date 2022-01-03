import React, { useState, useContext } from "react";
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';


function Session({title, room })
{
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
);
}

function Sessions({sessions})
{
 
  const { eventYear } = useContext(SpeakerFilterContext);
return (
  <div className="sessionBox card h-250">
    {sessions
    .filter(function (session)
    {
      return session.eventYear === eventYear;
    }).map(function(session)
    {
      return (<div className="session w-100" key={session.id}>
         <Session {...session} />
         </div>);
    })}
  </div>
  );
}

function SpeakerImage({id, first, last})
{
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
    <img className="contain-fit" src={`/images/speaker-${id}.jpg`} width="300" alt={`${first} ${last}`}></img>
  </div>
  );
}

const SpeakerFavourite = ({favourite, onFavouriteToggle}) =>
{
  const [inTransition, setInTransition] = useState(false);
  function doneCallback()
  {
   setInTransition(false);
  }
  return (
    <div className="action padB1">
      <span onClick={function()
      {
        setInTransition(true);
        return onFavouriteToggle(doneCallback);
      }}>
        <i className={favourite === true ? "fa fa-star orange" : "fa fa-star-o orange"}></i> {" "} Favourite {" "}
      { inTransition === true 
      ? <span className="fas fa-circle-both-notch fa spin">Loading...</span> : 
      null }
      </span>
    </div>
  );
}

const SpeakerDemo = ({first, last, bio, company, twitterHandle, favorite, onFavouriteToggle}) =>
{
  return (<div className="speaker-info">
  <div className="d-flex justify-content-between mb-3">
    <h3 className="text-truncate w-200">
      {first} {last}
    </h3>
  </div>
  <SpeakerFavourite favourite={favorite} onFavouriteToggle={onFavouriteToggle} />
  <div>
    <p>{bio} {company} {twitterHandle} {favorite}</p>
  </div>
</div>);
};

function Speaker ({speaker, onFavouriteToggle})
{
  const { id, first, last, sessions } = speaker;
  const { showSessions } = useContext(SpeakerFilterContext);

  return (<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-sm-12 col-xs-12">
  <div className="card card-height p-4 mt-4">
      <SpeakerImage id={id} first={first} last={last} />
      <SpeakerDemo {...speaker} onFavouriteToggle={onFavouriteToggle} />
    </div>
    { showSessions === true ? <Sessions sessions={sessions} /> : null }
    
</div>);
}

export default Speaker;