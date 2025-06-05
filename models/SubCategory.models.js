import mongoose,{Schema} from "mongoose";

const SubCategorySchema = new Schema(
    {
        CategoryId : {
            type : Schema.Types.ObjectId,
            ref : "Categories"
        },
        SubCategoryName : {
            type : String,
            required : true,
            unique : true
        },
        SubCategoryDescription : {
            type : String,
            required :false,
        },
        SubCategoryLogo : {
            type : String,
            required : false
        },
    },{timestamps: true}
)

const SubCategories = mongoose.model('SubCategories',SubCategorySchema)
export default SubCategories  ;