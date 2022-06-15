import './App.css';
import Covid from './components/Covid';
import Timer from './components/Timer';
import Prop from './components/Prop';

function App() {
  return (
    <>
    <section>
      <center>
    
    <Timer/>
    <Covid/>
    <h2>Task-3</h2>
    <div className='nflximg'>
        <img  src="data:image/jpeg;base64,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" alt="" />
    </div>
    <Prop
    heading="Have fun on your TV"
    detail= " watch on smaart TVs Playstation , xbox ,apple TV as well as other devices"
    imgsrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
    />
    <Prop
    heading="Downloa your show for offilne viewing"
    detail= " Save your favourite shows and movies so you can watch them anytime"
    imgsrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
    />
    <Prop
    heading="Look everywhere"
    detail= " Stream unlimited movies and TV shows on your phone , tablet , laptop , and tv without paying extra "
    imgsrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" 
    />
    <Prop
    heading="Createa profile for kids"
    detail= " Let the kids go on an adventure with your favourite charecters just for them - free with your membership "
    imgsrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" 
    />
    
    </center>
    </section>
    </>
  );
}

export default App;
