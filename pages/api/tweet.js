import dbConnect from "../../lib/dbConnect";
import Tweet from "../../models/Tweet";

dbConnect()
export default async function handler(req, res) {

    const {method} = req


    switch (method) {
      case "GET":
        console.log("Get")
        try {
          const tweets = await Tweet.find({});

          res.status(200).json({
            status: 200,
            message: "All tweets Found",
            tweets: tweets,
            success: true,
          });
        } catch (error) {
          res.status(200).json({
            status: 400,
            message: "Something went wrong",
          });
        }
        break;

      case "POST":
          console.log("req in body",req.body)
        try {
          const tweet = await Tweet.create(req.body);
          res.status(200).json({
            status: 200,
            success: true,
            tweet: tweet,
            message: "New tweet Added",
          });
        } catch (error) {
          console.log("in Error");
          res
            .status(400)
            .json({
              success: false,
              message: "Unable to Create tweet",
              error: error,
            });
        }
        break;

      default:
        res.status(400).json({ success: false });

        break;
    }




}
