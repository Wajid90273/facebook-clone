import React from 'react';
import './StoryReel.css'

// component
import Story from './Story/Story';

// images (profile)
import member1 from '../../../img/story/member1.jpg';
import member2 from '../../../img/story/member2.jpg';
import member3 from '../../../img/story/member3.jpg';
import member4 from '../../../img/story/member4.jpg';
import member5 from '../../../img/story/member5.jpg';

// images (story)
import img1 from '../../../img/story/storyImage/3.jpg'
import img2 from '../../../img/story/storyImage/c1.jpg'
import img3 from '../../../img/story/storyImage/c2.jpg'
import img4 from '../../../img/story/storyImage/g1.jpg'
import img5 from '../../../img/story/storyImage/g2.jpg'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={img1}
                profileSrc={member1}
                title="member1"
            />
            <Story 
                image={img2}
                profileSrc={member2}
                title="member2"
            />
            <Story 
                image={img3}
                profileSrc={member3}
                title="member3"
            />
            <Story 
                image={img4}
                profileSrc={member4}
                title="member4"
            />
            <Story 
                image={img5}
                profileSrc={member5}
                title="member 5"
            />
        </div>
    )
}

export default StoryReel;
