import mongoose,{Schema} from "mongoose";

const CategorySchema = new Schema(
    {
        CategoryName : {
            type : String,
            required : true,
            unique : true
        },
        CategoryDescription : {
            type : String,
            required :false,
        },
        CategoryLogo : {
            type : String,
            required : true
        },
    },{timestamps: true}
)

const Categories = mongoose.model('Categories',CategorySchema)

export default Categories ;