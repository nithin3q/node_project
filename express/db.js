const sql=require('mysql2')
const con=sql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'car_rentals'
    }
)
function getcars(){
    return new Promise((success,reject)=>{
        con.query(`select * from cars`,(err,rows,cols)=>{
            if(err){
              reject(err)
            }else{
              success(rows)
            }
            // con.end()
        })
    })     
}
function addcars(vehicle_model, vehicle_number, seating_capacity, rent_per_day, is_available, agency_id, image_data) {
    return new Promise((success, reject) => {
        con.query(
            `insert into cars(vehicle_model,vehicle_number,seating_capacity,rent_per_day,is_available,agency_id,image_data) values (?,?,?,?,?,?,?)`,
            [vehicle_model, vehicle_number, seating_capacity, rent_per_day, is_available, agency_id, image_data],
            (err, rows, cols) => {
                if (err) {
                    reject(err);
                } else {
                    success(rows);
                }
            }
        );
    });
}

function updateCar(id, vehicle_model, vehicle_number, seating_capacity, rent_per_day, is_available, agency_id, image_data) {
    return new Promise((success, reject) => {
        con.query(
            `UPDATE cars SET vehicle_model=?, vehicle_number=?, seating_capacity=?, rent_per_day=?, is_available=?, agency_id=?, image_data=? WHERE id=?`,
            [vehicle_model, vehicle_number, seating_capacity, rent_per_day, is_available, agency_id, image_data, id],
            (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    success(result);
                }
            }
        );
    });
}
// getcars();
// addcars("ferrari","ts-1234",4,2500,2,3,"image.jpg")
module.exports = { getcars, addcars ,updateCar};
