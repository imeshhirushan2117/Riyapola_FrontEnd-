import React from 'react'
import ViewCard from '../../common/ViewCard/ViewCard'
import { Box } from '@mui/material'
import instance from '../../services/Axios'
import { useState, useEffect } from 'react'
import img_temp1 from '../../assets/img/carViewImg1.jpg'
export default function VehicleView() {


  useEffect(() => {
    getAllVehicleCard()
  }, [])


  const [data, setData] = useState([])

  const getAllVehicleCard = () => {
    instance.get('/vehicle/getAllVehicles/vehicles')
      .then(function (response) {
        setData(response.data)

        console.log(response.data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }

  return (

    <>

      <Box sx={{ textAlign: "center", fontSize: "30px", marginBottom: "40px", fontWeight: 'bold' }}>
        Available<samp style={{ color: "#A50010" }}> Vehicles</samp>
      </Box>

      <Box sx={{ padding: '10px', display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
        {
          data.map((val) => (
            <ViewCard
              img={val.vehicleImgs[0].image}
              brandName={val.brandName}
              moduleName={val.moduleName}
              type={val.fuelType}
              transmission={val.transmissionType}
              seats={val.passengers}
              drPrice={val.dailyRentalPrice}
              limit={val.dailyLimitKilometers}
              extraKm={val.extraKm}
              status={val.status}
            />
          ))
        }
      </Box>

    </>

  )
}
