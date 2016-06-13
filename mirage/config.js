import DS from 'ember-data';
export default function() {
  this.get('/layouts', function(db, request) {
    const layoutObjects = 
[
 {
    shapes: [
        { 
        shapeType: "text",
        content: "Click to add Title",
        x: "30%",
        y: "50%",
        width: "200px",
        height: "50px",
        }
    ],
    url: "assets/layouts/title.png",
    id: 1
},
{
    shapes: [],
    url: "assets/layouts/blank.png",    
    id: 0
},
{
    shapes: [
        { 
        shapeType: "text",
        content: "Click to add Title",
        x: "30%",
        y: "50%",
        width: "200px",
        height: "50px",
        }
    ],
    url: "assets/layouts/title.png",
    id: 1
},
{
    shapes: [
        { 
        shapeType: "text",
        content: "Click to add Title",
        x: "30%",
        y: "10%",
        width: "100px",
        height: "30px",          
        },
        { 
        shapeType: "text",
        content: "Click to add Text",
        x: "20%",
        y: "43%",
        width: "100px",
        height: "80px",          
        },
        { 
        shapeType: "text",
        content: "Click to add Text",
        x: "20%",
        y: "76%",
        width: "100px",
        height: "80px",         
        },
        { 
        shapeType: "picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "66%",
        y: "66%",
        width: "200px",
        height: "200px",          
        }
    ],
    url: "assets/layouts/title-2content-image.png",
    id: 2
},
{
    shapes:[
      { 
        shapeType:"text",
        content: "Click to add Title",
        x: "30%",
        y: "10%",
        width: "100px",
        height: "30px",
      
      },
      { shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "20%",
        y: "66%",
        width: "200px",
        height: "200px",          
      },
      { shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "60%",
        y: "66%",
        width: "200px",
        height: "200px",          
      }
    ],
    url:"assets/layouts/title-2image.png",
    id: 3
},
{
    shapes:[
      { 
        shapeType: "text",
        content: "Click to add Title",
        x: "30%",
        y: "10%",
        width: "100px",
        height: "30px",
      },
      { 
        shapeType: "picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "20%",
        y: "43%",
        width: "200px",
        height: "200px",
      },
      { 
        shapeType: "picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "40%",
        y: "43%",
        width: "200px",
        height: "200px",
      },
      { 
        shapeType: "picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "20%",
        y: "76%",
        width: "300px",
        height: "200px",
      }
    ],
    url: "assets/layouts/title-3image.png",
    id: 4
},
{
    shapes:[
      { 
        shapeType:"text",
        content: "Click to add Title",
        x: "30%",
        y: "10%",
        width: "100px",
        height: "30px",
      },
      { 
        shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "20%",
        y: "43%",
        width: "150px",
        height: "150px",
      },
      { 
        shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "60%",
        y: "76%",
        width: "150px",
        height: "150px",
      },
      { 
        shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "20%",
        y: "76%",
        width: "150px",
        height: "150px",
      },
      { 
        shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "60%",
        y: "76%",
        width: "150px",
        height: "150px",
      }
    ],
    url: "assets/layouts/title-4image.png",
    id: 5
},
{
    shapes: [
      { 
        shapeType:"text",
        content: "Click to add Title",
        x: "30%",
        y: "10%",
        width: "100px",
        height: "30px",
      },
      { shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "15%",
        y: "43%",
        width: "100px",
        height: "100px",
      },
      { shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "45%",
        y: "43%",
        width: "100px",
        height: "100px",
      },
      { 
        shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "15%",
        y: "43%",
        width: "100px",
        height: "100px",
      },
      { 
        shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "15%",
        y: "76%",
        width: "100px",
        height: "100px",
      },
      {
        shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "45%",
        y: "76%",
        width: "100px",
        height: "100px",
      },
      { shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "75%",
        y: "76%",
        width: "100px",
        height: "100px",
      }
    ],
    url: "assets/layouts/title-6image.png",
    id: 6
},
{
    shapes: [
      { 
        shapeType:"text",
        content: "Click to add Title",
        x: "30%",
        y: "10%",
        width: "100px",
        height: "30px",
      },
      { 
        shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "35%",
        y: "43%",
        width: "250px",
        height: "250px",
      }
    ],
    url: "assets/layouts/title-image.png",
    id: 7
},
{
    shapes: [
      { 
        shapeType:"text",
        content: "Click to add Title",
        x: "30%",
        y: "10%",
        width: "100px",
        height: "30px",
      },
      { 
        shapeType:"text",
        content: "Click to add Text",
        x: "50%",
        y: "43%",
        width: "200px",
        height: "100px",
      },
      { 
        shapeType:"picture",
        content: "https://pbs.twimg.com/profile_images/528137831542038528/S79NgwqB.png",
        x: "15%",
        y: "73%",
        width: "200px",
        height: "200px",
      }
    ],
    url: "assets/layouts/title-content-image.png",
    id: 8
},
{
    shapes: [
      { 
        shapeType:"text",
        content: "Click to add Title",
        x: "30%",
        y: "10%",
        width: "100px",
        height: "30px",
      },
      { 
        shapeType:"text",
        content: "Click to add Text",
        x: "20%",
        y: "43%",
        width: "500px",
        height: "400px",
      }
    ],
    url: "assets/layouts/title-content.png",
    id: 9
}
];

    return layoutObjects;
  });
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.0-beta.7/shorthands/
  */

