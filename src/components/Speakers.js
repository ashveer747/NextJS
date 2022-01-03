import SpeakersToolbar from './SpeakersToolbar';
import SpeakerList  from './SpeakersList';
import { SpeakerFilterProvider } from '../contexts/SpeakerFilterContext';


function Speakers()
{
    return (
        <SpeakerFilterProvider startingShowSessions={false}>
              <SpeakersToolbar />  
              <SpeakerList />
          </SpeakerFilterProvider>);
      }

export default Speakers;