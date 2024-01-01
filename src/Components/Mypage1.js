import React, { useEffect, useState } from 'react';
import ProfileImage from "../Images/MyDp.jpeg";
import SliitImage from "../Images/Sliit.png";
import WybImage from "../Images/wyb.jpg";
import MernStack from "../Images/Mern.png";
import MeanStack from "../Images/mean.jpg";
import KotlinAndroid from "../Images/kotlin.jpg";
import Javalanguage from "../Images/Java.png";
import HtmlLanguages from "../Images/html.png";
import CssLanguage from "../Images/css.png";
import ReactnativeLanguage from "../Images/reactNative.png";
import TailwindCss from "../Images/TailwindCss.webp";
import SqlLanguages from "../Images/Sql.jpg";
import BoostrapCss from "../Images/boostrap.jpg";
import PhpLanguage from "../Images/php.webp";

const Mypage1 = () => {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let counter = 0;
    const intervalId = setInterval(() => {
      const text = 'Hi Welcome !!';
      if (counter <= text.length) {
        setAnimatedText(text.slice(0, counter));
        counter++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the delay based on your preference

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const imageClass = "h-40 w-45 border-4 rounded-lg shadow-md mx-2 my-2 justify-center";

  return (
    <div>
      <div className="bg-zinc-900">
        <div className="mx-6 flex items-start py-4">
          <img src={ProfileImage} className="size-60 rounded-full" alt="MyProfilePicture" />

        </div>

        <p className="text-white mx-10 p-5 font-mono">{animatedText} R.L Harith Rajapaksha</p>
      </div>

      <div className="bg-yellow-100">
        <h2 className="text-center font-bold text-2xl py-7"> Higher Education</h2>
      </div>

      <div className="flex justify-between bg-zinc-900">
        <div className="m-5">
          <img src={SliitImage} className="border-4 h-15 w-13 p-10 mx-12" alt="Sliit logo" />
          <h3 className="py-5 font-bold text-white"> SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY</h3>
          <h3 className="py-5 font-bold text-white">(bachler of Information Technology Specialized To Information Technology)</h3>
        </div>

        <div className="m-5 ">
          <img src={WybImage} className="border-4 h-15 w-13 p-10  mx-12" alt="Sliit logo" />
          <h3 className="py-5 font-bold px-12 text-white">Wayamba Univercity Of Sri-Lanka</h3>
          <h3 className="py-5 font-bold px-12 text-white">(Bsc hon's(Statics))</h3>
        </div>
      </div>

      <div className="bg-yellow-100">
        <h2 className="text-center font-bold text-2xl py-7"> Technologies</h2>
      </div>

      <div>
        
      <div>
      <div className="flex flex-wrap bg-zinc-900">
        <div>
          <img src={MernStack} alt="MERN logo" className={imageClass} />
        </div>
        <div>
          <img src={MeanStack} alt="MEAN logo" className={imageClass} />
        </div>
        <div>
          <img src={KotlinAndroid} alt="Kotlin logo" className={imageClass} />
        </div>
        <div>
          <img src={ReactnativeLanguage} alt="React Native logo" className={imageClass} />
        </div>
      

    
        <div>
          <img src={Javalanguage} alt="Java logo" className={imageClass}/>
        </div>
        <div>
          <img src={SqlLanguages} alt="SQL logo" className={imageClass} />
        </div>

        <div>
          <img src={PhpLanguage} alt="php logo" className={imageClass} />
        </div>

        <div>
          <img src={HtmlLanguages} alt="HTML logo" className={imageClass} />
        </div>
        <div>
          <img src={CssLanguage} alt="CSS logo" className={imageClass} />
        </div>
    
        <div>
          <img src={TailwindCss} alt="Tailwind CSS logo" className={imageClass} />
        </div>
        
        <div>
          <img src={BoostrapCss} alt="Bootstrap CSS logo" className={imageClass} />
        </div>

      </div>
    </div>
    </div>
</div>
  );
};

export default Mypage1;
