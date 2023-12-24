const express=require('express')
const app=express();
const cors = require('cors');
const db=require('./db')
app.listen(5000,()=>{
    console.log("server started at port 5000")
})
app.use(express.json());
app.use(cors());
app.get('/cars', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
  db.getcars()
      .then((cars) => {
          res.send(cars);
      })
      .catch(() => {
          res.send("errors");
      });
});
  //     .then((cars) => {
  //       // Iterate over the array of cars and generate HTML for each
  //       const carsHTML = cars.map(car => `
  //         <div>
  //           <h1>ID: ${car.id}</h1>
  //           <h2>Vehicle Model: ${car.vehicle_model}</h2>
  //           <!-- Add other fields as needed -->
  //         </div>
  //       `).join('');
  
  //       // Send the generated HTML as the response
  //       res.send(carsHTML);
  //     })
  //     .catch(() => {
  //       res.send("Error");
  //     });
  // });
app.post('/cars',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    const { vehicle_model, vehicle_number, seating_capacity, rent_per_day, is_available, agency_id, image_data } = req.body;
    db.addcars(vehicle_model, vehicle_number, seating_capacity, rent_per_day, is_available, agency_id, image_data)
    .then((cars)=>{
        res.send(cars)
    })
    .catch(()=>{
        res.send("errors")
    })
})
app.put('/cars/:id', (req, res) => {
    const id = req.params.id;
    const { vehicle_model, vehicle_number, seating_capacity, rent_per_day, is_available, agency_id, image_data } = req.body;

    db.updateCar(id, vehicle_model, vehicle_number, seating_capacity, rent_per_day, is_available, agency_id, image_data)
        .then((result) => {
            res.send(result);
        })
        .catch(() => {
            res.send("Error");
        });
});