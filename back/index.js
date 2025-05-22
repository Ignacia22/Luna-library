const app = require('./src/server'); 
const dbCon = require('./src/config/dbCon');


dbCon().then((res) => {
      app.listen(3002, () => {
    console.log('Server is running on port 3002'); 

      });  
    }
)
.catch((err) => {
  console.log(err);
});