import mongoose from 'mongoose';
import Customer from './Customer';
import Liked from './Liked';
import Movie from './Movie';
import Rated from './Rated';
import Region from './Region';
import ScreeningFormat from './ScreeningFormat';
import Order from './Order';
import Showtime from './Showtime';
import Cinema from './Cinema';

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/cgv_dev');
        console.log('Connect database is successfully!');
    } catch (error) {
        console.log(error);
    }
};

export { Cinema, Customer, Liked, Movie, Rated, Region, ScreeningFormat, Order, Showtime };
export default { connect };
