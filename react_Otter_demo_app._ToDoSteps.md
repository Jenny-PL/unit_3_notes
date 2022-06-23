1. Steps to make demo app: 
2. `yarn create react-app app-name` 
3. Make `components` folder inside src
4. `yarn install`, then `yarn start`
5. Inside App.js: 
```
const initialOtterData = [{id: 1, img:'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-74582273-scaled.jpg', hearts: 0, likes: 0}, {id: 2, img:'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-74582273-scaled.jpg', hearts: 0, likes: 0}]

   function App() {
    const [data, set Data] = useState(initialOtterData);

    const updateOtterHeartFn = (id) => {
        console.log("To do: update heart for id");
    }

    const updateOtterLikeFn = (id) => {
        console.log("To do: update like for id");
    }


    return (<OtterList otterData = {otterData} updateOtterHeart= {updateOtterHeartFn} updateOtterLike={udpateOtterLikeFn}/>);

   }
   export default App;
```

---
8. Now, make Otterlist.js and otterList.css files inside components:
9. Inside  Otterlist.js:
```
import "./OtterList.css";
import Otter from './Otter.js';
import PropTypes from 'prop-types';

const OtterList = ({otterData, updateOtterHeart, updateOtterLike}) => {
    const otterComponents = otterData.map((otter)=> 
    <Otter {key=otter.id} {id=otter.id} {img=otter.img} {hearts= otter.hearts} {likes= otter.likes} updateOtterHeart={updateOtterHeart} updateOtterLike={updateOtterLike}> </Otter>
    );

    return (
        <div className="otterList"> {otterComponents} </div>
    );
}

Otterlist.propTypes = {
    otterData:PropTypes.array.isRequired,
    updateOtterHeart: PropTypes.func.isRequired,
    updateOtterLike: PropTypes.func.isRequired
}


export default OtterList;
```
10. Make new component files: Otter.js and Otter.css
11. In Otter.js:
```
import './Otter.css';
import PropTypes from 'prop-types';

const Otter(props) => {
    const id = props.id;
    const otterImg = props.img;
    const hearts = props.hearts;
    const likes = props.likes;
    const updateHeartFn = props.updateOtterHeart;
    const updateLikeFn = props.updateOtterLike;

    return (
        <div className="otter">
        <img src={otterImg} alt="cute otter in the water" />
        <button onClick={() =>updateHeartFn(id)}>🤍 {hearts}</button>
        <button onClick={() => updateLikeFn(id)}> like {likes} </button>

        </div>
    );

}

export default Otter;

12. Now in App.js: Add `import {useState} from 'react';` then add in code for updateOtterHeartFn and updateOtterLikeFn, and update state!