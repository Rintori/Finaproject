import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import CardGames from './OXCard';

function Homie() {
return (
    <div>
        <ImageSlider slides={SliderData} />
        <CardGames />
    </div>
)
}
export default Homie;