const sampleListings=[
    {
        title:"StayVista at Ivory",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-765673312810778311/original/297399d7-3d12-4b8b-aa88-21dded609c00.jpeg?im_w=1200"
        },
        description:"3 bedrooms3 king bedsPrivate attached bathroom",
        price:23000,
        country:"india",
        location:"Ghamroj"
    },
    {
        title:"Aravali Haven",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-981606185712826397/original/33bb7a2a-5ff8-4a0c-82e9-6da39b83f21d.jpeg?im_w=1200"
        },
        description:"16+ guests, 5 bedrooms, 5 beds5 ,5 bathrooms",
        price:21000,
        country:"india",
        location:"Raiseena"
    },
    {
        title:"StayVista at Pearl",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-953179187960352972/original/6b512947-7fee-4c6e-9e40-5abf8da0b718.jpeg?im_w=1200"
        },
        description:"4 bedrooms, 4 king bedsPrivate, attached bathroom",
        price:21120,
        country:"india",
        location:"jaipur"
    },
    {
        title:"Vast Lawn",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-1080297079224472116/original/9f00f527-1bd3-47be-83da-544509225687.jpeg?im_w=1200"
        },
        description:"14 guests, 5 bedrooms, 5 beds, 5 bathrooms",
        price:31000,
        country:"india",
        location:"delhi"
    },
    {
        title:"Tree House",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-1118579460086888338/original/f77c5dc0-f8c8-4bfd-bd88-f6955be22de8.jpeg?im_w=1200"
        },
        description:"2 guests, 1 bedroom, 1 bed, 1 private bathroom",
        price:3000,
        country:"india",
        location:" Heggadadevankote"
    },
    {
        title:"Priyoori Treehouse",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-54218469/original/49cafdbc-ad55-4eeb-b3ea-da1e44d487ab.jpeg?im_w=1200"
        },
        description:"1 double bed , Private attached bathroom",
        price:2000,
        country:"india",
        location:"kochi"
    },
    {
        title:"Wayanad Family AC Premium Homestay",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-790339765440041647/original/4a70b2af-7de0-4f34-9264-066ea1ff5845.jpeg?im_w=1200"
        },
        description:"12 guests,4 bedrooms,4 beds,4 bathrooms",
        price:12000,
        country:"india",
        location:"Wayanad"
    },
    {
        title:"Wooden house|Farm stay",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-48554731/original/a79e82dc-85a0-463a-b769-ff90eb2b9d17.jpeg?im_w=1200"
        },
        description:"2 beds,Dedicated bathroom",
        price:8000,
        country:"india",
        location:"pharog"
    },
    {
        title:"Dudly Manor - 1BR Cottage w/ Pool",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=1200"
        },
        description:"1 double bed,Private attached bathroom",
        price:15000,
        country:"india",
        location:"Badowala"
    },
    {
        title:"Royal Boutique Hotel - VILA DOMINA",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-47086741/original/89035847-1f96-4269-af1e-120a19e1cfd7.jpeg?im_w=1200"
        },
        description:"14 guests,7 bedrooms,7 beds,7 bathrooms",
        price:51000,
        country:"Romania",
        location:"Sinaia"
    },
    {
        title:"Charming Castle Villa in Kaş/Yarimada",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-848521969968742794/original/342ce6b8-6ccd-49c1-bc59-6d55ddd6ecdd.jpeg?im_w=1200"
        },
        description:"12 guests,6 bedrooms,5 beds,5 bathrooms",
        price:111987,
        country:"Turkey",
        location:"Kas"
    },
    {
        title:"Burj Room@Castle Oodeypore",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-52065547/original/a88b5239-d645-489f-ac4f-8aa237774a0e.jpeg?im_w=1200"
        },
        description:"1 queen bed,Dedicated bathroom",
        price:6277,
        country:"india",
        location:"udaipur"
    },
    {
        title:"Apartment with fireplace in a palace with a park",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/6e498221-c227-4573-90cd-cdd938bcdb05.jpg?im_w=1200"
        },
        description:"6 guests,1 bedroom,3 beds,1 bathroom",
        price:10000,
        country:"poland",
        location:"Chociule"
    },
    {
        title:"Romantic Overwater Chalet With Jacuzzi Adult Only",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=1200"
        },
        description:"3 guests,1 bedroom,1 bed,1 private bathroom",
        price:37000,
        country:"Maldives",
        location:"Meeru Island"
    },
    {
        title:"2 Bedroom cottage on Morjim beach",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/69ddb99f-9c28-4392-9a38-b7ac26fbc6c5.jpg?im_w=1200"
        },
        description:"4 guests,2 bedrooms,2 beds,1 bathroom",
        price:25000,
        country:"india",
        location:"Morjim"
    },
    {
        title:"Absolute Beach Front Villa with Pool",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/bac85424-1639-483d-8f14-f1647f6d60b2.jpg?im_w=1200"
        },
        description:"4 guests,2 bedrooms,2 beds,2 bathrooms",
        price:16000,
        country:"Sri Lanka",
        location:"Weligama"
    },
    {
        title:"The Apple Farm Stay - 2 BHK",
        image:{
            filename:"listingimage",
            url:"https://a0.muscache.com/im/pictures/decd42a0-ffa4-4dd3-bcc3-82aba3fca838.jpg?im_w=1200"
        },
        description:"5 guests,2 bedrooms,2 beds,1 bathroom",
        price:13000,
        country:"india",
        location:"Shimla"
    },
]    

module.exports=sampleListings;