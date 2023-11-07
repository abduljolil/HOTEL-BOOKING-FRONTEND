 
import Featured from '../../components/Featured';
import Offer from '../../components/Offer';
import Testimonials from '../../components/Testimonials';
import Bannar from './../../components/Bannar';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Offer></Offer>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;