 
 
import Dining from '../../components/Dining';
import Featured from '../../components/Featured';
import Offers from '../../components/Offers';
 
import Testimonials from '../../components/Testimonials';
import Bannar from './../../components/Bannar';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Dining></Dining>
           <Offers></Offers>
        
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;