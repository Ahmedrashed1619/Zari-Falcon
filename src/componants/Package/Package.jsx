import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../context/store';


export default function Package({AdminNum , CheckReport , ClientNum , DailyReport , DescAr , DescEn , FindLocation , HistoryLog , id , MakeRoute , NameAr , NameEn , Price , RouteReport , SalesNum}) {

    let { isEng } = useContext(langContext);


    return (
        <>
            <Link className='offer' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine" dir={isEng ? 'ltr' : 'rtl'}>
                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in">{isEng ? NameEn : NameAr}</h3>
                <div className='cont-price'>
                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary">{Price}{isEng ? '$' : ' ريال'}<span className="fs-2 main-color"></span>{isEng ? ' /Month or 190$/Year' : ' / شهر أو 190 ريال / سنة'}</h6>
                    <h4 className='desc'>{isEng ? DescEn : DescAr}</h4>
                    <h4 className='adminNum'>{AdminNum} {isEng ? 'Admin' : 'أدمن'}</h4>
                    <h4 className='salesNum'>{SalesNum} {isEng ? 'Sales' : 'بائع'}</h4>
                    <h4 className='days'>{HistoryLog} {isEng ? 'Days' : HistoryLog > 3 ? 'أيام' : 'يوم'}</h4>
                    <h4 className='clientNum'>{ClientNum} {isEng ? 'Clients' : 'عميل'}</h4>
                    <h4 className='dailyRebort'>{DailyReport} {isEng ? 'Dialy Report' : 'تقرير يومي'}</h4>
                    <h4 className='findLoc'>{FindLocation} {isEng ? 'Find Location' : 'إيجاد الموقع'}</h4>
                    <h4 className='makeRoute'>{MakeRoute} {isEng ? 'Make Route' : 'عمل مسار'}</h4>
                    <h4 className='checkRoute'>{CheckReport} {isEng ? 'Check Report' : 'تقرير'}</h4>
                    <h4 className='routeReport'>{RouteReport} {isEng ? 'Route Report' : 'تقرير مسار'}</h4>
                </div>
            </Link>
        </>
    )
}
