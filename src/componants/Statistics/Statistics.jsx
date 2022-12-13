import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import ReactApexChart from 'react-apexcharts';
import $ from 'jquery';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
// import { BsSearch } from 'react-icons/bs';
import userImg2 from '../images/home/Rectangle 143.png';



export default function Statistics({fetchStatistics , objs , objsNot , objs2 , objs2Not , token}) {


  const [days, setDays] = useState([]);
  const [visits, setVisits] = useState([]);
  const [notVisits, setNotVisits] = useState([]);
  let arrDays = [];
  let arrVisits = [];
  let arrNotVisits = [];


  const [months, setMonths] = useState([]);
  const [visits2, setVisits2] = useState([]);
  const [notVisits2, setNotVisits2] = useState([]);
  let arrMonths = [];
  let arrVisits2 = [];
  let arrNotVisits2 = [];


  
  useEffect(() => {
    $('.sidebar .menu-links a.statistics').addClass('active');

    return () => {
        $('.sidebar .menu-links a.statistics').removeClass('active');
    }
}, [])
  
  
  let { isOpen , toggleOpen } = useContext(langContext);


//   const closeNavLink = () => {
//     if(isOpen === false && $('body').width() < 570) {
//         $('.sidebar').animate({'left' : '-240px'} , 500);
//         setTimeout(() => {
//             toggleOpen();
//         }, 500);
//     }
// }


function widthBody() {
    let width = $('body').width();

    if(isOpen === true) {

        if(width > 1000) {
            $('.sidebar').css({'width': '300px' , 'left' : '0px'});
            $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
            $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
            $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'none');
            $('.dashboard .main').css({'width' : 'calc(100% - 300px)' , 'left' : '300px'});
            $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
        }

        if(width > 1200) {
            $('.dashboard .main .topbar .search-topbar').css('width' , '900px');
        }

        if(width > 1100) {
            $('.total-table').css('overflow-x' , 'auto');
        }

        // if(width < 1100 && width > 1000) {
        //     $('.total-table').css('overflow-x' , 'scroll');
        // }

        if(width < 1200 && width > 950) {
            $('.dashboard .main .topbar .search-topbar').css('width' , '650px');
        }

        if(width < 1000) {
            $('.sidebar').css({'width' : '240px' , 'left' : '-240px'});
            $('.sidebar .menu-links ul>div').css('marginBottom' , '20px');
            $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'flex');
            $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
            $('.dashboard .main').css({'width' : '100%' , 'left' : '0'});
            $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
            $('.total-table').css('overflow-x' , 'auto');
            $('.total-table-clients').css('overflow-x' , 'auto');
        }

        if (width < 950 && width > 768) {
            $('.dashboard .main .topbar .search-topbar').css('width' , '550px');
        }

        if (width < 768 && width > 570) {
            $('.dashboard .main .topbar .search-topbar').css('width' , '500px');
        }

        if (width < 570) {
            $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
            $('.dashboard .main .topbar .user-img').css({'width' : '45px' , 'height' : '45px'});
        }
    }

    else {

        if(width > 1000) {
            $('.sidebar').css({'width': '80px' , 'left' : '0px'});
            $('.sidebar .menu-links .cont-imgFooter').css({'width' : '60px' , 'height' : '60px'});
            $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
            $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'none');
            $('.dashboard .main').css({'width' : 'calc(100% - 80px)' , 'left' : '80px'});
            $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
        }

        if(width > 1200) {
            $('.dashboard .main .topbar .search-topbar').css('width' , '900px');
        }

        if(width < 1100 && width > 1000) {
            $('.total-table').css('overflow-x' , 'auto');
        }

        if(width < 1200 && width > 950) {
            $('.dashboard .main .topbar .search-topbar').css('width' , '650px');
        }

        if(width < 1000) {
            $('.sidebar').css({'width' : '240px' , 'left' : '0px'});
            $('.sidebar .menu-links ul>div').css('marginBottom' , '25px');
            $('.sidebar .menu-links ul>div .closeSidebar').css('display' , 'flex');
            $('.sidebar .menu-links .cont-imgFooter').css({'width' : '130px' , 'height' : '110px'});
            $('.dashboard .main').css({'width' : 'calc(100% - 240px)' , 'left' : '240px'});
            $('.dashboard .main .topbar .user-img').css({'width' : '60px' , 'height' : '60px'});
            $('.total-table-clients').css('overflow-x' , 'auto');
        }

        if (width < 950 && width > 700) {
            $('.dashboard .main .topbar .search-topbar').css('width' , '400px');
        }

        if (width < 700 && width > 570) {
            $('.dashboard .main .topbar .user-img').css({'width' : '50px' , 'height' : '50px'});
            $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
            $('.total-table-clients').css('overflow-x' , 'scroll');
        }

        if (width < 570) {
            $('.dashboard .main').css({'width' : '100%' , 'left' : '0'});
            $('.dashboard .main .topbar .search-topbar').css('width' , '300px');
            $('.dashboard .main .topbar .user-img').css({'width' : '45px' , 'height' : '45px'});
            $('.total-table-clients').css('overflow-x' , 'auto');
        }
    }
}


$(window).on('resize', () => {
    widthBody();
});


useEffect(() => {
    widthBody();
}, [isOpen])



  const [bar1 , setBar1] = useState({
    series: [fetchStatistics.AllSales - fetchStatistics.RemainingSales , fetchStatistics.AllSales],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ["Sales Count", "All Sales"],
      colors: ["#eee" , "#51459E"],
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 120
          },
          legend: {
            position: 'bottom',
          },
        }
      }]
    },
  })


  const [bar2 , setBar2] = useState({
    series: [fetchStatistics.PackageDays - fetchStatistics.RemainingDays , fetchStatistics.PackageDays],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ["Days", "Package Days"],
      colors: ["#eee" , "#FF92A4"],
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 120
          },
          legend: {
            position: 'bottom',
          },
        }
      }]
    },
  })

// Days

  useEffect(() => {
    if(objs.length > 0) {
        // for (const item of objs) {
          for (let i = 0; i < objs.length; i++) {
            const element = objs[i].Day;
            const element2 = objs[i].Visits;
            arrDays.push(element);
            let ard = new Set(arrDays);
            arrVisits.push(element2);
            let arv = new Set(arrVisits);
            setDays([...ard]);
            setVisits([...arv]);
          }
        // }
    }

  }, [objs])

  useEffect(() => {
    if(objsNot.length > 0) {
      // for (const item of objsNot) {
        for (let i = 0; i < objsNot.length; i++) {
          const element = objsNot[i].Visits;
          arrNotVisits.push(element);
          let ard = new Set(arrNotVisits);
          setNotVisits([...ard]);
        }
      // }
    }

  }, [objsNot])

  const [state , setState] = useState({

    series: [{
        name: 'Visit',
        data: [],
        color: '#3182CE',
      }, 
      {
        name: 'Not Visit',
        data: [],
        color: '#EB0000',
      }],

    noData: {
      text: 'Loading...'
    },

    options: {

      markers: {
        colors: ['#3182CE', '#EB0000']
      },

      fill: {
        colors: ['#3182CE', '#EB0000']
      },

      dataLabels: {
        enabled: false,
        style: {
          colors: ['#3182CE', '#EB0000']
        }
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'number',
        convertedCatToNumeric: true,
        categories: []
      },
      tooltip: {
        x: {
          format: 'days'
        },
      },
    },
  })

  useEffect(() => {

    setState({
      series: [{
        name: 'Visit',
        data: [...visits],
        color: '#3182CE',
      }, 
      {
        name: 'Not Visit',
        data: [...notVisits],
        color: '#EB0000',
      }],

    noData: {
      text: 'Loading...'
    },

    options: {

      markers: {
        colors: ['#3182CE', '#EB0000']
      },

      fill: {
        colors: ['#3182CE', '#EB0000']
      },

      dataLabels: {
        enabled: false,
        style: {
          colors: ['#3182CE', '#EB0000']
        }
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'number',
        convertedCatToNumeric: true,
        categories: [...days]
      },
      tooltip: {
        x: {
          format: 'days'
        },
      },
    },
    })
  
  }, [visits , notVisits , days])


  // Months

  useEffect(() => {
    if(token && objs2.length > 0) {
      // for (const item of objs2) {
        for (let i = 0; i < objs2.length; i++) {
          const element = objs2[i].Month;
          const element2 = objs2[i].Visits;
          arrMonths.push(element);
          let arm = new Set(arrMonths);
          arrVisits2.push(element2);
          let armv = new Set(arrVisits2);
          setMonths([...arm]);
          setVisits2([...armv])
        }
      // }
    }

  }, [objs2])

  useEffect(() => {
    if(token && objs2Not.length > 0) {
      // for (const item of objs2Not) {
        for (let i = 0; i < objs2Not.length; i++) {
          const element = objs2Not[i].Visits;
          arrNotVisits2.push(element);
          let arm = new Set(arrNotVisits2);
          setNotVisits2([...arm]);
        }
      // }
    }

  }, [objs2Not])

  const [charts , setCharts] = useState({

    series: [{
        name: 'Visit',
        data: [],
        color: '#3182CE',
      }, 
      {
        name: 'Not Visit',
        data: [],
        color: '#EB0000',
      }],

    noData: {
      text: 'Loading...'
    },

    options: {

      markers: {
        colors: ['#3182CE', '#EB0000']
      },

      fill: {
        colors: ['#3182CE', '#EB0000']
      },

      dataLabels: {
        enabled: false,
        style: {
          colors: ['#3182CE', '#EB0000']
        }
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'number',
        convertedCatToNumeric: true,
        categories: [
                      
                    ]
      },
      tooltip: {
        x: {
          format: 'months'
        },
      },
    },
  })

  useEffect(() => {
    setCharts({
      series: [{
        name: 'Visit',
        data: [...visits2],
        color: '#3182CE',
      }, 
      {
        name: 'Not Visit',
        data: [...notVisits2],
        color: '#EB0000',
      }],

    noData: {
      text: 'Loading...'
    },

    options: {

      markers: {
        colors: ['#3182CE', '#EB0000']
      },

      fill: {
        colors: ['#3182CE', '#EB0000']
      },

      dataLabels: {
        enabled: false,
        style: {
          colors: ['#3182CE', '#EB0000']
        }
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'number',
        convertedCatToNumeric: true,
        categories: [
                      ...months
                    ]
      },
      tooltip: {
        x: {
          format: 'months'
        },
      },
    },
  })
  }, [visits2 , notVisits2 , months])
  



  return (
    <>
      <div className="topbar">
          <div className="toggle-topbar" onClick={() => {
              toggleOpen();
              widthBody();
          }}>
              <FaBars />
          </div>
          {/* <div className="search-topbar">
              <div className="group">
                  <input type="text" placeholder='Search here..' />
                  <BsSearch />
              </div>
          </div> */}
          <div className="user-img">
              <img src={userImg2} alt="user" />
          </div>
      </div>

      <section className='dashpage sales-page py-5'>
        <div className="row d-flex justify-content-center align-items-center">

          <div className="col-11">
            <div className="row g-4">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="number-item first p-4 rounded-4">
                  <h3 className='mb-2'>Total Visits</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>{fetchStatistics.AllVisits}</h3>
                    {/* <span className='d-flex.justify-content-center align-items-center'>+11.01% <i className="fa-solid fa-arrow-trend-up"></i></span> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="number-item second p-4 rounded-4">
                  <h3 className='mb-2'>Month Visits</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>{fetchStatistics.MonthlyVisits}</h3>
                    {/* <span className='d-flex.justify-content-center align-items-center'>+11.01% <i className="fa-solid fa-arrow-trend-up"></i></span> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="number-item first p-4 rounded-4">
                  <h3 className='mb-2'>Total Clients</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>{fetchStatistics.AllClients}</h3>
                    {/* <span className='d-flex.justify-content-center align-items-center'>+11.01% <i className="fa-solid fa-arrow-trend-up"></i></span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section>
        <div className="row g-4 d-flex justify-content-center align-items-center pb-4">
          <div className="col-xl-8 col-11">
            <div className="statistic first-statistics p-4 rounded-4 mb-lg-5 mb-3">
              <h5 className='fw-bold'>Daily Visits</h5>
                <ReactApexChart 
                  options={state.options} 
                  series={state.series} 
                  type="area" 
                  height={250} 
                />
            </div>


            <div className="statistic second-statistics p-4 rounded-4">
              <h5 className='fw-bold'>Monthly Visits</h5>
                <ReactApexChart 
                  options={charts.options} 
                  series={charts.series} 
                  type="bar" 
                  height={250}
                  
                />
            </div>
            
          </div>
          <div className="col-xl-4 col-11">
            <div className="status-visit bg-light p-4 rounded-4">
              <h3 className='fw-bold mb-3'>Today Status</h3>

              <div className="row g-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-lg-12 col-12">
                  <div className="state p-3 rounded-4 bg-white d-flex align-items-center mb-lg-3">
                    {/* <i className="fa-solid fa-arrow-trend-up me-3 fs-1 text-success"></i> */}
                    <div className="caption-state">
                      <h5 className='mb-1 fw-bold'>Visits Number</h5>
                      <h4 className='fw-bold'>{fetchStatistics.TodayVisits}</h4>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-12 col-12">
                  <div className="state p-3 rounded-4 bg-white d-flex align-items-center mb-lg-3">
                    {/* <i className="fa-solid fa-arrow-trend-up me-3 fs-1 text-success"></i> */}
                    <div className="caption-state">
                      <h5 className='mb-1 fw-bold'>New Clients</h5>
                      <h4 className='fw-bold'>{fetchStatistics.NewClients}</h4>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-12 col-12">
                  <div className="state p-3 rounded-4 bg-white d-flex align-items-center mb-lg-3">
                    {/* <i className="fa-solid fa-arrow-trend-up me-3 fs-1 text-success"></i> */}
                    <div className="caption-state">
                      <h5 className='mb-1 fw-bold'>Total Routes</h5>
                      <h4 className='fw-bold'>{fetchStatistics.TotalRoutes}</h4>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-12 col-12">
                  <div className="state p-3 rounded-4 bg-white d-flex align-items-center mb-lg-3">
                    {/* <i className="fa-solid fa-arrow-trend-up me-3 fs-1 text-success"></i> */}
                    <div className="caption-state">
                      <h5 className='mb-1 fw-bold'>Active Routes</h5>
                      <h4 className='fw-bold'>{fetchStatistics.ActiveRoutes}</h4>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-12 col-12">
                  <div className="state p-3 rounded-4 bg-white d-flex align-items-center">
                    {/* <i className="fa-solid fa-arrow-trend-down me-3 fs-1 text-danger"></i> */}
                    <div className="caption-state">
                      <h5 className='mb-1 fw-bold'>Not Visited</h5>
                      <h4 className='fw-bold'>{fetchStatistics.NotVisits}</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 d-flex justify-content-center align-items-center mt-2">
                <div className="col-md-6 col-lg-12 col-12">
                  <div className="state bg-light mb-lg-3">
                    <div className="bg-white p-3 rounded-4 d-flex align-items-center">
                        {/* <i className="fa-solid fa-arrow-trend-up me-3 fs-1 text-success"></i> */}
                        {/* <img src={img1} className='me-1' alt="" /> */}
                        <div className="circle">
                          <ReactApexChart 
                            options={bar1.options} 
                            series={bar1.series} 
                            type="donut" 
                            height={100} 
                            width={120}
                          />
                        </div>
                        <div className="caption-state">
                          <p className='mb-1' style={{fontSize: '18px' , fontWeight: '600'}}>The remaining no. in your package</p>
                          <h3 className='fw-bold'>{fetchStatistics.RemainingSales}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-12 col-12">
                  <div className="state bg-light">
                    <div className="bg-white p-3 rounded-4 d-flex align-items-center">
                        {/* <i className="fa-solid fa-arrow-trend-up me-3 fs-1 text-success"></i> */}
                        {/* <img src={img2} className='me-1' alt="" /> */}
                        <div className="circle">
                          <ReactApexChart 
                            options={bar2.options} 
                            series={bar2.series} 
                            type="donut" 
                            height={100} 
                            width={120}
                          />
                        </div>
                        <div className="caption-state">
                          <p className='mb-1' style={{fontSize: '18px' , fontWeight: '600'}}>Remaining Days To Renew</p>
                          <h3 className='fw-bold'>{fetchStatistics.RemainingDays} Days</h3>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
