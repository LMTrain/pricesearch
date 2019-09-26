const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/pricesearch"
);

const bookSeed = [
  {
    itemId: "110363901",
    item: "NEW Jurassic World Drawstring Backpack Sling Tote School Sport Gym Bag -3 PACK",
    unitPrice: 13.98,
    link: "http://goto.walmart.com/c/|PUBID|/568844/9383?veh=aff&sourceid=imp_000011112222333344&prodsku=650652652&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F650652652",
    thumbnail: "https://i5.walmartimages.com/asr/b73203bb-1208-4330-9dd0-347ff4d8f332_1.0f74844bcd128c15d384579c7eebe756.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    description:
      "Specifications:Suitable for travel,shopping,school,etc.Zip around opening and closure,safe to hold your goods.Adjustable shoulder straps,convenient to use.Type: BackpackGender: Women'sStyle: FashionMaterial: Faux LeatherClosure Type: ZipperOccasions: Outdoor,School,Shopping,Daily,etcFeatures: School Bag,Adjustable,Zipper Pockets,Mini,Portable,Shoulder BagSize(T x W x H): 10cm x 19cm x 20cm/3.94&quot; x 7.48&quot; x 7.87&quot; (Approx.)Notes:Due to the light and screen setting difference,the item's color may be slightly different from the pictures.Please allow slight dimension difference due to different manual measurement.Package Includes:1 x Backpack",
    customerRating: "4.5",    
  },
  {
    itemId: "110363901",
    item: "NEW Jurassic World Drawstring Backpack Sling Tote School Sport Gym Bag -3 PACK",
    unitPrice: 13.98,
    link: "http://goto.walmart.com/c/|PUBID|/568844/9383?veh=aff&sourceid=imp_000011112222333344&prodsku=650652652&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F650652652",
    thumbnail: "https://i5.walmartimages.com/asr/b73203bb-1208-4330-9dd0-347ff4d8f332_1.0f74844bcd128c15d384579c7eebe756.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    description:
      "Specifications:Suitable for travel,shopping,school,etc.Zip around opening and closure,safe to hold your goods.Adjustable shoulder straps,convenient to use.Type: BackpackGender: Women'sStyle: FashionMaterial: Faux LeatherClosure Type: ZipperOccasions: Outdoor,School,Shopping,Daily,etcFeatures: School Bag,Adjustable,Zipper Pockets,Mini,Portable,Shoulder BagSize(T x W x H): 10cm x 19cm x 20cm/3.94&quot; x 7.48&quot; x 7.87&quot; (Approx.)Notes:Due to the light and screen setting difference,the item's color may be slightly different from the pictures.Please allow slight dimension difference due to different manual measurement.Package Includes:1 x Backpack",
    customerRating: "4.5", 
  },
  {
    itemId: "110363901",
    item: "NEW Jurassic World Drawstring Backpack Sling Tote School Sport Gym Bag -3 PACK",
    unitPrice: 13.98,
    link: "http://goto.walmart.com/c/|PUBID|/568844/9383?veh=aff&sourceid=imp_000011112222333344&prodsku=650652652&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F650652652",
    thumbnail: "https://i5.walmartimages.com/asr/b73203bb-1208-4330-9dd0-347ff4d8f332_1.0f74844bcd128c15d384579c7eebe756.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    description:
      "Specifications:Suitable for travel,shopping,school,etc.Zip around opening and closure,safe to hold your goods.Adjustable shoulder straps,convenient to use.Type: BackpackGender: Women'sStyle: FashionMaterial: Faux LeatherClosure Type: ZipperOccasions: Outdoor,School,Shopping,Daily,etcFeatures: School Bag,Adjustable,Zipper Pockets,Mini,Portable,Shoulder BagSize(T x W x H): 10cm x 19cm x 20cm/3.94&quot; x 7.48&quot; x 7.87&quot; (Approx.)Notes:Due to the light and screen setting difference,the item's color may be slightly different from the pictures.Please allow slight dimension difference due to different manual measurement.Package Includes:1 x Backpack",
    customerRating: "4.5", 
  } 
  
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
