// this is db connection
import mongoose from "mongoose";

const DbName = 'SkillsLink'

const DBconnection = async () => {

    try {
        const ConnectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DbName}`);
        // console.log(mongoose);
        console.log('DB connected..');
    } catch (error) {
        console.log(`We got an error connecting to the database`, error);
    }
}

export default DBconnection