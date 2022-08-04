import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  // console.log(req.body.length)
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
     let p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
     p.save()
    }
    res.status(200).json({ success: "success"});
  } else {
    res.status(400).json({ error: "error" });
  }
};

export default connectDb(handler);
