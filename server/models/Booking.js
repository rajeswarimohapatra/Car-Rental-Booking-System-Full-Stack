// import mongoose from "mongoose";
// const {ObjectId}=mongoose.Schema.Types
// const bookingSchema = new mongoose.Schema({
//     "brand": "BMW",
//     "model": "X5",
//     "year": 2006,
//     "category": "SUV",
//     "seating_capacity": 4,
//     "fuel_type": "Hybrid",
//     "transmission": "Semi-Automatic",
//     "pricePerDay": 300,
//     "location": "New York",
//     "description": "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
// },{timestamps:true})
// const Booking=mongoose.model('Booking',bookingSchema)
// export default Booking
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const bookingSchema = new mongoose.Schema(
  {
    car: { type: ObjectId, ref: "Car", required: true },
    owner: { type: ObjectId, ref: "User", required: true },
    user: { type: ObjectId, ref: "User", required: true },
    pickupDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;

