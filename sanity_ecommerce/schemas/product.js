//PRODUCT SCHEMA

export default{    //exporting schema as a basic js object
    name:'product',
    title:'Product',
    type:'document',
    fields:[
        {
            name:'image',
            title:'Image',
            type:'array',
            of:[{type : 'image'}], //creating an array of images
            options:{
                hotspot: true,  //hotspot is used to better position the image and it is boolean property
            }
        },
        {
            name:'name', //product name
            title:'Name',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options: {
                source:'name',
                maxLength: 90,
            }
        },
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        {
            name:'details',
            title:'Details',
            type:'string',
        }
    ]
}