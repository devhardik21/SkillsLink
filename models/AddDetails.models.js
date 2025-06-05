import mongoose,{Schema} from "mongoose";

const AdditionalDetailsSchema = new Schema(
    {
        userId: {
        type : Schema.Types.ObjectId,
        ref : "User"
        },
        bankDetails: {
          accountHolderName:
          {
            type : String,
            required : true
          },
          accountNumber:  {
            type : String,
            required : true
          },
          ifscCode:  {
            type : String,
            required : true
          },
          upiId: {
            type : String,
            required : true
          }
        },
        servicesOffered: [
          {
            category:  {
                type : String,
                required : true
              },      
            subcategory:  {
                type : String,
                required : true
              },    
            experience:  {
                type : String,
                required : true
              },    
            costPerDay:  {
                type : Number,
                required : true
              },     
            description:  {
                type : String,
                required : true
              },
          }
        ],
        references: [
          {
            clientName:  {
                type : String,
                required : true
              },
            relation:  {
                type : String,
                required : false
              }, 
            message:  {
                type : String,
                required : true
              }
          }
        ],
        reviews: [
          {
            reviewerId:  {
                type : Schema.Types.ObjectId,
                required : true
              },
            rating:  {
                type : Number,
                required :true
              },
            comment:  {
                type : String,
                required :false
              },
            date:  {
                type : Date,
                required :false
              },
          }
        ]
      },
    { timestamps: true }       
)

export const AdditionalDetails = mongoose.model("AdditionalDetails",AdditionalDetailsSchema) ;