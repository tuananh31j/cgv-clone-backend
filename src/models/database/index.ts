import mongoose from 'mongoose';
import Customer from './Customer';
import Liked from './Liked';
import Movie from './Movie';
import Rated from './Rated';
import Region from './Region';
import ScreeningFormat from './ScreeningFormat';
import Order from './Order';
import Showtime from './Showtime';
import Theater from './Theater';
import Cinema from './Cinema';
import Concession from './Concession';
import Banner from './Banner';
import { config } from 'dotenv';
config();
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log('Connect database is successfully!');
    } catch (error) {
        console.log(error);
    }
};

export { Cinema, Theater, Customer, Liked, Movie, Rated, Region, ScreeningFormat, Order, Showtime, Concession, Banner };
export default { connect };
