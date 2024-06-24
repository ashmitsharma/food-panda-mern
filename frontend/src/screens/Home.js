import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  async function loadData() {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id='carousel'>
            <div className="carousel-caption" style={{ "zIndex": "10" }}>
              <div className="d-flex justify-content-centre">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }}></input>
                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." style={{ "height": "auto", "width": "100%", filter: "brightness(30%)" }}></img>
            </div>
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." style={{ "height": "auto", "width": "100%", filter: "brightness(30%)" }}></img>
            </div>
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." style={{ "height": "auto", "width": "100%", filter: "brightness(30%)" }}></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='m-3'>
          {
            foodCat !== []
              ? foodCat.map((data) => {
                return (
                  <div className='row mb-3'>
                    <div key={data._id} className='fs-3 m-3'>
                      {data.CategoryName}
                    </div>
                    <hr></hr>
                    {
                      foodItem !== [] ?
                        foodItem.filter((item) => item.CategoryName == data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                          .map(filterItems => {
                            return (
                              <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                <Card foodItem={filterItems}
                                  options={filterItems.options[0]}
                                />
                              </div>
                            )
                          })
                        : <div>No Such Data Found</div>
                    }
                  </div>
                )
              }

              )
              : <div></div>
          }

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home 