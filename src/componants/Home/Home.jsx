import React, { useContext, useEffect } from 'react';
import imgFeatures from '../images/home/Advantages-rafiki 1.png';
import imgApp from '../images/home/Screenshot.png';
import { langContext } from '../context/store';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import AOS from 'aos';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




export default function Home({fetchHome}) {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    useEffect(() => {
        $('nav .signin-btn').addClass('d-none');
        $('nav .signup-btn').removeClass('d-none');
    }, [])
    

    useEffect(() => {   
        AOS.init();
        AOS.refresh();
    }, [])
    
    // const feature = [
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'},
    //     { img: imgApp , parag: 'Book your queue and appointment from anywhere.'}
    // ]

    const animAos = [
        {fade: "fade-up-right", delay: 'ease-in'},
        {fade: "fade-up-left", delay: 'ease-out'},
        {fade: "fade-down-right", delay: 'ease-in'},
        {fade: "fade-down-left", delay: 'ease-out'},
        {fade: "fade-up-right", delay: 'ease-in'},
        {fade: "fade-up-left", delay: 'ease-out'},
        {fade: "fade-down-right", delay: 'ease-in'},
        {fade: "fade-down-left", delay: 'ease-out'}
    ]
    
    const intClasses = {
        0 : 'one',
        1 : 'two',
        2 : 'three',
        3 : 'four',
        4 : 'five',
        5 : 'six',
        6 : 'seven',
        7 : 'eight',
        8 : 'nine',
    }

    const plans = {
        // items: 6,
        responsiveClass: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        stagePadding: 50,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1250: {
                items: 3,
            }
        },
    }


    let { isEng } = useContext(langContext);


    // click on video button

    function toggleTrailer() {
        let trailer = document.querySelector('.trailer');
        // let video = document.querySelector('.trailer iframe');

        trailer.classList.toggle('play');
        // video.pause();
        // video.currentTime = 0;
    }

    const goToAppSection = () => {
        $('.navbar .collapse .app').addClass('active');
        $('.navbar .collapse .features').removeClass('active');
        $('.navbar .collapse .home').removeClass('active');
        $('.navbar .collapse .plans').removeClass('active');
        $('html , body').animate({ scrollTop: $('#app').offset().top - 40 }, 300);
    }


    const changeDir = () => {

        if(isEng === true) {

            if(fetchHome.plans.Plans[0]) {
                $('#plans .offer.one h3').text(fetchHome.plans.Plans[0].NameEn);
                $('#plans .offer.one .cont-price').addClass('text-en');
                $('#plans .offer.one .cont-price').removeClass('text-ar');
                $('#plans .offer.one .cont-price h6 span').text(fetchHome.plans.Plans[0].Price);
                $('#plans .offer.one .cont-price h4.desc').text(fetchHome.plans.Plans[0].DescEn);
                $('#plans .offer.one .cont-price h4.adminNum').text(fetchHome.plans.Plans[0].AdminNum + ' Admin');
                $('#plans .offer.one .cont-price h4.salesNum').text(fetchHome.plans.Plans[0].SalesNum + ' Sales');
                $('#plans .offer.one .cont-price h4.days').text(fetchHome.plans.Plans[0].HistoryLog);
                $('#plans .offer.one .cont-price h4.clientNum').text(fetchHome.plans.Plans[0].ClientNum + ' Clients');
                $('#plans .offer.one .cont-price h4.dailyRebort').text(fetchHome.plans.Plans[0].DailyReport + ' Daily Report');
                $('#plans .offer.one .cont-price h4.findLoc').text(fetchHome.plans.Plans[0].FindLocation + ' Find Location');
                $('#plans .offer.one .cont-price h4.makeRoute').text(fetchHome.plans.Plans[0].MakeRoute + ' Make Route');
                $('#plans .offer.one .cont-price h4.checkRoute').text(fetchHome.plans.Plans[0].CheckReport + ' Check Report');
                $('#plans .offer.one .cont-price h4.routeReport').text(fetchHome.plans.Plans[0].RouteReport + ' Route Report');
            }

            if(fetchHome.plans.Plans[1]) {
                $('#plans .offer.two h3').text(fetchHome.plans.Plans[1].NameEn);
                $('#plans .offer.two .cont-price').addClass('text-en');
                $('#plans .offer.two .cont-price').removeClass('text-ar');
                $('#plans .offer.two .cont-price h6 span').text(fetchHome.plans.Plans[1].Price);
                $('#plans .offer.two .cont-price h4.desc').text(fetchHome.plans.Plans[1].DescEn);
                $('#plans .offer.two .cont-price h4.adminNum').text(fetchHome.plans.Plans[1].AdminNum + ' Admin');
                $('#plans .offer.two .cont-price h4.salesNum').text(fetchHome.plans.Plans[1].SalesNum + ' Sales');
                $('#plans .offer.two .cont-price h4.days').text(fetchHome.plans.Plans[1].HistoryLog);
                $('#plans .offer.two .cont-price h4.clientNum').text(fetchHome.plans.Plans[1].ClientNum + ' Clients');
                $('#plans .offer.two .cont-price h4.dailyRebort').text(fetchHome.plans.Plans[1].DailyReport + ' Daily Report');
                $('#plans .offer.two .cont-price h4.findLoc').text(fetchHome.plans.Plans[1].FindLocation + ' Find Location');
                $('#plans .offer.two .cont-price h4.makeRoute').text(fetchHome.plans.Plans[1].MakeRoute + ' Make Route');
                $('#plans .offer.two .cont-price h4.checkRoute').text(fetchHome.plans.Plans[1].CheckReport + ' Check Report');
                $('#plans .offer.two .cont-price h4.routeReport').text(fetchHome.plans.Plans[1].RouteReport + ' Route Report');
            }

            if(fetchHome.plans.Plans[2]) {

                $('#plans .offer.three h3').text(fetchHome.plans.Plans[2].NameEn);
                $('#plans .offer.three .cont-price').addClass('text-en');
                $('#plans .offer.three .cont-price').removeClass('text-ar');
                $('#plans .offer.three .cont-price h6 span').text(fetchHome.plans.Plans[2].Price);
                $('#plans .offer.three .cont-price h4.desc').text(fetchHome.plans.Plans[2].DescEn);
                $('#plans .offer.three .cont-price h4.adminNum').text(fetchHome.plans.Plans[2].AdminNum + ' Admin');
                $('#plans .offer.three .cont-price h4.salesNum').text(fetchHome.plans.Plans[2].SalesNum + ' Sales');
                $('#plans .offer.three .cont-price h4.days').text(fetchHome.plans.Plans[2].HistoryLog);
                $('#plans .offer.three .cont-price h4.clientNum').text(fetchHome.plans.Plans[2].ClientNum + ' Clients');
                $('#plans .offer.three .cont-price h4.dailyRebort').text(fetchHome.plans.Plans[2].DailyReport + ' Daily Report');
                $('#plans .offer.three .cont-price h4.findLoc').text(fetchHome.plans.Plans[2].FindLocation + ' Find Location');
                $('#plans .offer.three .cont-price h4.makeRoute').text(fetchHome.plans.Plans[2].MakeRoute + ' Make Route');
                $('#plans .offer.three .cont-price h4.checkRoute').text(fetchHome.plans.Plans[2].CheckReport + ' Check Report');
                $('#plans .offer.three .cont-price h4.routeReport').text(fetchHome.plans.Plans[2].RouteReport + ' Route Report');
            }

            if(fetchHome.plans.Plans[3]) {
                $('#plans .offer.four h3').text(fetchHome.plans.Plans[3].NameEn);
                $('#plans .offer.four .cont-price').addClass('text-en');
                $('#plans .offer.four .cont-price').removeClass('text-ar');
                $('#plans .offer.four .cont-price h6 span').text(fetchHome.plans.Plans[3].Price);
                $('#plans .offer.four .cont-price h4.desc').text(fetchHome.plans.Plans[3].DescEn);
                $('#plans .offer.four .cont-price h4.adminNum').text(fetchHome.plans.Plans[3].AdminNum + ' Admin');
                $('#plans .offer.four .cont-price h4.salesNum').text(fetchHome.plans.Plans[3].SalesNum + ' Sales');
                $('#plans .offer.four .cont-price h4.days').text(fetchHome.plans.Plans[3].HistoryLog);
                $('#plans .offer.four .cont-price h4.clientNum').text(fetchHome.plans.Plans[3].ClientNum + ' Clients');
                $('#plans .offer.four .cont-price h4.dailyRebort').text(fetchHome.plans.Plans[3].DailyReport + ' Daily Report');
                $('#plans .offer.four .cont-price h4.findLoc').text(fetchHome.plans.Plans[3].FindLocation + ' Find Location');
                $('#plans .offer.four .cont-price h4.makeRoute').text(fetchHome.plans.Plans[3].MakeRoute + ' Make Route');
                $('#plans .offer.four .cont-price h4.checkRoute').text(fetchHome.plans.Plans[3].CheckReport + ' Check Report');
                $('#plans .offer.four .cont-price h4.routeReport').text(fetchHome.plans.Plans[3].RouteReport + ' Route Report');
            }

            if(fetchHome.plans.Plans[4]) {
                $('#plans .offer.five h3').text(fetchHome.plans.Plans[4].NameEn);
                $('#plans .offer.five .cont-price').addClass('text-en');
                $('#plans .offer.five .cont-price').removeClass('text-ar');
                $('#plans .offer.five .cont-price h6 span').text(fetchHome.plans.Plans[4].Price);
                $('#plans .offer.five .cont-price h4.desc').text(fetchHome.plans.Plans[4].DescEn);
                $('#plans .offer.five .cont-price h4.adminNum').text(fetchHome.plans.Plans[4].AdminNum + ' Admin');
                $('#plans .offer.five .cont-price h4.salesNum').text(fetchHome.plans.Plans[4].SalesNum + ' Sales');
                $('#plans .offer.five .cont-price h4.days').text(fetchHome.plans.Plans[4].HistoryLog);
                $('#plans .offer.five .cont-price h4.clientNum').text(fetchHome.plans.Plans[4].ClientNum + ' Clients');
                $('#plans .offer.five .cont-price h4.dailyRebort').text(fetchHome.plans.Plans[4].DailyReport + ' Daily Report');
                $('#plans .offer.five .cont-price h4.findLoc').text(fetchHome.plans.Plans[4].FindLocation + ' Find Location');
                $('#plans .offer.five .cont-price h4.makeRoute').text(fetchHome.plans.Plans[4].MakeRoute + ' Make Route');
                $('#plans .offer.five .cont-price h4.checkRoute').text(fetchHome.plans.Plans[4].CheckReport + ' Check Report');
                $('#plans .offer.five .cont-price h4.routeReport').text(fetchHome.plans.Plans[4].RouteReport + ' Route Report');
            }

            if(fetchHome.plans.Plans[5]) {
                $('#plans .offer.six h3').text(fetchHome.plans.Plans[5].NameEn);
                $('#plans .offer.six .cont-price').addClass('text-en');
                $('#plans .offer.six .cont-price').removeClass('text-ar');
                $('#plans .offer.six .cont-price h6 span').text(fetchHome.plans.Plans[5].Price);
                $('#plans .offer.six .cont-price h4.desc').text(fetchHome.plans.Plans[5].DescEn);
                $('#plans .offer.six .cont-price h4.adminNum').text(fetchHome.plans.Plans[5].AdminNum + ' Admin');
                $('#plans .offer.six .cont-price h4.salesNum').text(fetchHome.plans.Plans[5].SalesNum + ' Sales');
                $('#plans .offer.six .cont-price h4.days').text(fetchHome.plans.Plans[5].HistoryLog);
                $('#plans .offer.six .cont-price h4.clientNum').text(fetchHome.plans.Plans[5].ClientNum + ' Clients');
                $('#plans .offer.six .cont-price h4.dailyRebort').text(fetchHome.plans.Plans[5].DailyReport + ' Daily Report');
                $('#plans .offer.six .cont-price h4.findLoc').text(fetchHome.plans.Plans[5].FindLocation + ' Find Location');
                $('#plans .offer.six .cont-price h4.makeRoute').text(fetchHome.plans.Plans[5].MakeRoute + ' Make Route');
                $('#plans .offer.six .cont-price h4.checkRoute').text(fetchHome.plans.Plans[5].CheckReport + ' Check Report');
                $('#plans .offer.six .cont-price h4.routeReport').text(fetchHome.plans.Plans[5].RouteReport + ' Route Report');
            }

            if(fetchHome.plans.Plans[6]) {
                $('#plans .offer.seven h3').text(fetchHome.plans.Plans[6].NameEn);
                $('#plans .offer.seven .cont-price').addClass('text-en');
                $('#plans .offer.seven .cont-price').removeClass('text-ar');
                $('#plans .offer.seven .cont-price h6 span').text(fetchHome.plans.Plans[6].Price);
                $('#plans .offer.seven .cont-price h4.desc').text(fetchHome.plans.Plans[6].DescEn);
                $('#plans .offer.seven .cont-price h4.adminNum').text(fetchHome.plans.Plans[6].AdminNum + ' Admin');
                $('#plans .offer.seven .cont-price h4.salesNum').text(fetchHome.plans.Plans[6].SalesNum + ' Sales');
                $('#plans .offer.seven .cont-price h4.days').text(fetchHome.plans.Plans[6].HistoryLog);
                $('#plans .offer.seven .cont-price h4.clientNum').text(fetchHome.plans.Plans[6].ClientNum + ' Clients');
                $('#plans .offer.seven .cont-price h4.dailyRebort').text(fetchHome.plans.Plans[6].DailyReport + ' Daily Report');
                $('#plans .offer.seven .cont-price h4.findLoc').text(fetchHome.plans.Plans[6].FindLocation + ' Find Location');
                $('#plans .offer.seven .cont-price h4.makeRoute').text(fetchHome.plans.Plans[6].MakeRoute + ' Make Route');
                $('#plans .offer.seven .cont-price h4.checkRoute').text(fetchHome.plans.Plans[6].CheckReport + ' Check Report');
                $('#plans .offer.seven .cont-price h4.routeReport').text(fetchHome.plans.Plans[6].RouteReport + ' Route Report');
            }

            if(fetchHome.plans.Plans[7]) {
                $('#plans .offer.eight h3').text(fetchHome.plans.Plans[7].NameEn);
                $('#plans .offer.eight .cont-price').addClass('text-en');
                $('#plans .offer.eight .cont-price').removeClass('text-ar');
                $('#plans .offer.eight .cont-price h6 span').text(fetchHome.plans.Plans[7].Price);
                $('#plans .offer.eight .cont-price h4.desc').text(fetchHome.plans.Plans[7].DescEn);
                $('#plans .offer.eight .cont-price h4.adminNum').text(fetchHome.plans.Plans[7].AdminNum + ' Admin');
                $('#plans .offer.eight .cont-price h4.salesNum').text(fetchHome.plans.Plans[7].SalesNum + ' Sales');
                $('#plans .offer.eight .cont-price h4.days').text(fetchHome.plans.Plans[7].HistoryLog);
                $('#plans .offer.eight .cont-price h4.clientNum').text(fetchHome.plans.Plans[7].ClientNum + ' Clients');
                $('#plans .offer.eight .cont-price h4.dailyRebort').text(fetchHome.plans.Plans[7].DailyReport + ' Daily Report');
                $('#plans .offer.eight .cont-price h4.findLoc').text(fetchHome.plans.Plans[7].FindLocation + ' Find Location');
                $('#plans .offer.eight .cont-price h4.makeRoute').text(fetchHome.plans.Plans[7].MakeRoute + ' Make Route');
                $('#plans .offer.eight .cont-price h4.checkRoute').text(fetchHome.plans.Plans[7].CheckReport + ' Check Report');
                $('#plans .offer.eight .cont-price h4.routeReport').text(fetchHome.plans.Plans[7].RouteReport + ' Route Report');
            }

            if(fetchHome.plans.Plans[8]) {
                $('#plans .offer.nine h3').text(fetchHome.plans.Plans[8].NameEn);
                $('#plans .offer.nine .cont-price').addClass('text-en');
                $('#plans .offer.nine .cont-price').removeClass('text-ar');
                $('#plans .offer.nine .cont-price h6 span').text(fetchHome.plans.Plans[8].Price);
                $('#plans .offer.nine .cont-price h4.desc').text(fetchHome.plans.Plans[8].DescEn);
                $('#plans .offer.nine .cont-price h4.adminNum').text(fetchHome.plans.Plans[8].AdminNum + ' Admin');
                $('#plans .offer.nine .cont-price h4.salesNum').text(fetchHome.plans.Plans[8].SalesNum + ' Sales');
                $('#plans .offer.nine .cont-price h4.days').text(fetchHome.plans.Plans[8].HistoryLog);
                $('#plans .offer.nine .cont-price h4.clientNum').text(fetchHome.plans.Plans[8].ClientNum + ' Clients');
                $('#plans .offer.nine .cont-price h4.dailyRebort').text(fetchHome.plans.Plans[8].DailyReport + ' Daily Report');
                $('#plans .offer.nine .cont-price h4.findLoc').text(fetchHome.plans.Plans[8].FindLocation + ' Find Location');
                $('#plans .offer.nine .cont-price h4.makeRoute').text(fetchHome.plans.Plans[8].MakeRoute + ' Make Route');
                $('#plans .offer.nine .cont-price h4.checkRoute').text(fetchHome.plans.Plans[8].CheckReport + ' Check Report');
                $('#plans .offer.nine .cont-price h4.routeReport').text(fetchHome.plans.Plans[8].RouteReport + ' Route Report');
            }

        }

        else 
        {

            if(fetchHome.plans.Plans[0]) {
                $('#plans .offer.one h3').text(fetchHome.plans.Plans[0].NameAr);
                $('#plans .offer.one .cont-price').removeClass('text-en');
                $('#plans .offer.one .cont-price').addClass('text-ar');
                $('#plans .offer.one .cont-price h6 span').text(fetchHome.plans.Plans[0].Price);
                $('#plans .offer.one .cont-price h4.desc').text(fetchHome.plans.Plans[0].DescAr);
                $('#plans .offer.one .cont-price h4.adminNum').text('Admin ' + fetchHome.plans.Plans[0].AdminNum);
                $('#plans .offer.one .cont-price h4.salesNum').text('Sales ' + fetchHome.plans.Plans[0].SalesNum);
                $('#plans .offer.one .cont-price h4.days').text(fetchHome.plans.Plans[0].HistoryLog);
                $('#plans .offer.one .cont-price h4.clientNum').text('Clients ' + fetchHome.plans.Plans[0].ClientNum);
                $('#plans .offer.one .cont-price h4.dailyRebort').text('Daily Report ' + fetchHome.plans.Plans[0].DailyReport);
                $('#plans .offer.one .cont-price h4.findLoc').text('Find Location ' + fetchHome.plans.Plans[0].FindLocation);
                $('#plans .offer.one .cont-price h4.makeRoute').text('Make Route ' + fetchHome.plans.Plans[0].MakeRoute);
                $('#plans .offer.one .cont-price h4.checkRoute').text('Check Report ' + fetchHome.plans.Plans[0].CheckReport);
                $('#plans .offer.one .cont-price h4.routeReport').text('Route Report ' + fetchHome.plans.Plans[0].RouteReport);
            }

            if(fetchHome.plans.Plans[1]) {
                $('#plans .offer.two h3').text(fetchHome.plans.Plans[1].NameAr);
                $('#plans .offer.two .cont-price').removeClass('text-en');
                $('#plans .offer.two .cont-price').addClass('text-ar');
                $('#plans .offer.two .cont-price h6 span').text(fetchHome.plans.Plans[1].Price);
                $('#plans .offer.two .cont-price h4.desc').text(fetchHome.plans.Plans[1].DescAr);
                $('#plans .offer.two .cont-price h4.adminNum').text('Admin ' + fetchHome.plans.Plans[1].AdminNum);
                $('#plans .offer.two .cont-price h4.salesNum').text('Sales ' + fetchHome.plans.Plans[1].SalesNum);
                $('#plans .offer.two .cont-price h4.days').text(fetchHome.plans.Plans[1].HistoryLog);
                $('#plans .offer.two .cont-price h4.clientNum').text('Clients ' + fetchHome.plans.Plans[1].ClientNum);
                $('#plans .offer.two .cont-price h4.dailyRebort').text('Daily Report ' + fetchHome.plans.Plans[1].DailyReport);
                $('#plans .offer.two .cont-price h4.findLoc').text('Find Location ' + fetchHome.plans.Plans[1].FindLocation);
                $('#plans .offer.two .cont-price h4.makeRoute').text('Make Route ' + fetchHome.plans.Plans[1].MakeRoute);
                $('#plans .offer.two .cont-price h4.checkRoute').text('Check Report ' + fetchHome.plans.Plans[1].CheckReport);
                $('#plans .offer.two .cont-price h4.routeReport').text('Route Report ' + fetchHome.plans.Plans[1].RouteReport);
            }

            if(fetchHome.plans.Plans[2]) {
                $('#plans .offer.three h3').text(fetchHome.plans.Plans[2].NameAr);
                $('#plans .offer.three .cont-price').removeClass('text-en');
                $('#plans .offer.three .cont-price').addClass('text-ar');
                $('#plans .offer.three .cont-price h6 span').text(fetchHome.plans.Plans[2].Price);
                $('#plans .offer.three .cont-price h4.desc').text(fetchHome.plans.Plans[2].DescAr);
                $('#plans .offer.three .cont-price h4.adminNum').text('Admin ' + fetchHome.plans.Plans[2].AdminNum);
                $('#plans .offer.three .cont-price h4.salesNum').text('Sales ' + fetchHome.plans.Plans[2].SalesNum);
                $('#plans .offer.three .cont-price h4.days').text(fetchHome.plans.Plans[2].HistoryLog);
                $('#plans .offer.three .cont-price h4.clientNum').text('Clients ' + fetchHome.plans.Plans[2].ClientNum);
                $('#plans .offer.three .cont-price h4.dailyRebort').text('Daily Report ' + fetchHome.plans.Plans[2].DailyReport);
                $('#plans .offer.three .cont-price h4.findLoc').text('Find Location ' + fetchHome.plans.Plans[2].FindLocation);
                $('#plans .offer.three .cont-price h4.makeRoute').text('Make Route ' + fetchHome.plans.Plans[2].MakeRoute);
                $('#plans .offer.three .cont-price h4.checkRoute').text('Check Report ' + fetchHome.plans.Plans[2].CheckReport);
                $('#plans .offer.three .cont-price h4.routeReport').text('Route Report ' + fetchHome.plans.Plans[2].RouteReport);
            }

            if(fetchHome.plans.Plans[3]) {
                $('#plans .offer.four h3').text(fetchHome.plans.Plans[3].NameAr);
                $('#plans .offer.four .cont-price').removeClass('text-en');
                $('#plans .offer.four .cont-price').addClass('text-ar');
                $('#plans .offer.four .cont-price h6 span').text(fetchHome.plans.Plans[3].Price);
                $('#plans .offer.four .cont-price h4.desc').text(fetchHome.plans.Plans[3].DescAr);
                $('#plans .offer.four .cont-price h4.adminNum').text('Admin ' + fetchHome.plans.Plans[3].AdminNum);
                $('#plans .offer.four .cont-price h4.salesNum').text('Sales ' + fetchHome.plans.Plans[3].SalesNum);
                $('#plans .offer.four .cont-price h4.days').text(fetchHome.plans.Plans[3].HistoryLog);
                $('#plans .offer.four .cont-price h4.clientNum').text('Clients ' + fetchHome.plans.Plans[3].ClientNum);
                $('#plans .offer.four .cont-price h4.dailyRebort').text('Daily Report ' + fetchHome.plans.Plans[3].DailyReport);
                $('#plans .offer.four .cont-price h4.findLoc').text('Find Location ' + fetchHome.plans.Plans[3].FindLocation);
                $('#plans .offer.four .cont-price h4.makeRoute').text('Make Route ' + fetchHome.plans.Plans[3].MakeRoute);
                $('#plans .offer.four .cont-price h4.checkRoute').text('Check Report ' + fetchHome.plans.Plans[3].CheckReport);
                $('#plans .offer.four .cont-price h4.routeReport').text('Route Report ' + fetchHome.plans.Plans[3].RouteReport);
            }

            if(fetchHome.plans.Plans[4]) {
                $('#plans .offer.five h3').text(fetchHome.plans.Plans[4].NameAr);
                $('#plans .offer.five .cont-price').removeClass('text-en');
                $('#plans .offer.five .cont-price').addClass('text-ar');
                $('#plans .offer.five .cont-price h6 span').text(fetchHome.plans.Plans[4].Price);
                $('#plans .offer.five .cont-price h4.desc').text(fetchHome.plans.Plans[4].DescAr);
                $('#plans .offer.five .cont-price h4.adminNum').text('Admin ' + fetchHome.plans.Plans[4].AdminNum);
                $('#plans .offer.five .cont-price h4.salesNum').text('Sales ' + fetchHome.plans.Plans[4].SalesNum);
                $('#plans .offer.five .cont-price h4.days').text(fetchHome.plans.Plans[4].HistoryLog);
                $('#plans .offer.five .cont-price h4.clientNum').text('Clients ' + fetchHome.plans.Plans[4].ClientNum);
                $('#plans .offer.five .cont-price h4.dailyRebort').text('Daily Report ' + fetchHome.plans.Plans[4].DailyReport);
                $('#plans .offer.five .cont-price h4.findLoc').text('Find Location ' + fetchHome.plans.Plans[4].FindLocation);
                $('#plans .offer.five .cont-price h4.makeRoute').text('Make Route ' + fetchHome.plans.Plans[4].MakeRoute);
                $('#plans .offer.five .cont-price h4.checkRoute').text('Check Report ' + fetchHome.plans.Plans[4].CheckReport);
                $('#plans .offer.five .cont-price h4.routeReport').text('Route Report ' + fetchHome.plans.Plans[4].RouteReport);
            }

            if(fetchHome.plans.Plans[5]) {
                $('#plans .offer.six h3').text(fetchHome.plans.Plans[5].NameAr);
                $('#plans .offer.six .cont-price').removeClass('text-en');
                $('#plans .offer.six .cont-price').addClass('text-ar');
                $('#plans .offer.six .cont-price h6 span').text(fetchHome.plans.Plans[5].Price);
                $('#plans .offer.six .cont-price h4.desc').text(fetchHome.plans.Plans[5].DescAr);
                $('#plans .offer.six .cont-price h4.adminNum').text('Admin ' + fetchHome.plans.Plans[5].AdminNum);
                $('#plans .offer.six .cont-price h4.salesNum').text('Sales ' + fetchHome.plans.Plans[5].SalesNum);
                $('#plans .offer.six .cont-price h4.days').text(fetchHome.plans.Plans[5].HistoryLog);
                $('#plans .offer.six .cont-price h4.clientNum').text('Clients ' + fetchHome.plans.Plans[5].ClientNum);
                $('#plans .offer.six .cont-price h4.dailyRebort').text('Daily Report ' + fetchHome.plans.Plans[5].DailyReport);
                $('#plans .offer.six .cont-price h4.findLoc').text('Find Location ' + fetchHome.plans.Plans[5].FindLocation);
                $('#plans .offer.six .cont-price h4.makeRoute').text('Make Route ' + fetchHome.plans.Plans[5].MakeRoute);
                $('#plans .offer.six .cont-price h4.checkRoute').text('Check Report ' + fetchHome.plans.Plans[5].CheckReport);
                $('#plans .offer.six .cont-price h4.routeReport').text('Route Report ' + fetchHome.plans.Plans[5].RouteReport);
            }

            if(fetchHome.plans.Plans[6]) {
                $('#plans .offer.seven h3').text(fetchHome.plans.Plans[6].NameAr);
                $('#plans .offer.seven .cont-price').removeClass('text-en');
                $('#plans .offer.seven .cont-price').addClass('text-ar');
                $('#plans .offer.seven .cont-price h6 span').text(fetchHome.plans.Plans[6].Price);
                $('#plans .offer.seven .cont-price h4.desc').text(fetchHome.plans.Plans[6].DescAr);
                $('#plans .offer.seven .cont-price h4.adminNum').text('Admin ' + fetchHome.plans.Plans[6].AdminNum);
                $('#plans .offer.seven .cont-price h4.salesNum').text('Sales ' + fetchHome.plans.Plans[6].SalesNum);
                $('#plans .offer.seven .cont-price h4.days').text(fetchHome.plans.Plans[6].HistoryLog);
                $('#plans .offer.seven .cont-price h4.clientNum').text('Clients ' + fetchHome.plans.Plans[6].ClientNum);
                $('#plans .offer.seven .cont-price h4.dailyRebort').text('Daily Report ' + fetchHome.plans.Plans[6].DailyReport);
                $('#plans .offer.seven .cont-price h4.findLoc').text('Find Location ' + fetchHome.plans.Plans[6].FindLocation);
                $('#plans .offer.seven .cont-price h4.makeRoute').text('Make Route ' + fetchHome.plans.Plans[6].MakeRoute);
                $('#plans .offer.seven .cont-price h4.checkRoute').text('Check Report ' + fetchHome.plans.Plans[6].CheckReport);
                $('#plans .offer.seven .cont-price h4.routeReport').text('Route Report ' + fetchHome.plans.Plans[6].RouteReport);
            }

            if(fetchHome.plans.Plans[7]) {
                $('#plans .offer.eight h3').text(fetchHome.plans.Plans[7].NameAr);
                $('#plans .offer.eight .cont-price').removeClass('text-en');
                $('#plans .offer.eight .cont-price').addClass('text-ar');
                $('#plans .offer.eight .cont-price h6 span').text(fetchHome.plans.Plans[7].Price);
                $('#plans .offer.eight .cont-price h4.desc').text(fetchHome.plans.Plans[7].DescAr);
                $('#plans .offer.eight .cont-price h4.adminNum').text('Admin ' + fetchHome.plans.Plans[7].AdminNum);
                $('#plans .offer.eight .cont-price h4.salesNum').text('Sales ' + fetchHome.plans.Plans[7].SalesNum);
                $('#plans .offer.eight .cont-price h4.days').text(fetchHome.plans.Plans[7].HistoryLog);
                $('#plans .offer.eight .cont-price h4.clientNum').text('Clients ' + fetchHome.plans.Plans[7].ClientNum);
                $('#plans .offer.eight .cont-price h4.dailyRebort').text('Daily Report ' + fetchHome.plans.Plans[7].DailyReport);
                $('#plans .offer.eight .cont-price h4.findLoc').text('Find Location ' + fetchHome.plans.Plans[7].FindLocation);
                $('#plans .offer.eight .cont-price h4.makeRoute').text('Make Route ' + fetchHome.plans.Plans[7].MakeRoute);
                $('#plans .offer.eight .cont-price h4.checkRoute').text('Check Report ' + fetchHome.plans.Plans[7].CheckReport);
                $('#plans .offer.eight .cont-price h4.routeReport').text('Route Report ' + fetchHome.plans.Plans[7].RouteReport);
            }

            if(fetchHome.plans.Plans[8]) {
                $('#plans .offer.nine h3').text(fetchHome.plans.Plans[8].NameAr);
                $('#plans .offer.nine .cont-price').removeClass('text-en');
                $('#plans .offer.nine .cont-price').addClass('text-ar');
                $('#plans .offer.nine .cont-price h6 span').text(fetchHome.plans.Plans[8].Price);
                $('#plans .offer.nine .cont-price h4.desc').text(fetchHome.plans.Plans[8].DescAr);
                $('#plans .offer.nine .cont-price h4.adminNum').text('Admin ' + fetchHome.plans.Plans[8].AdminNum);
                $('#plans .offer.nine .cont-price h4.salesNum').text('Sales ' + fetchHome.plans.Plans[8].SalesNum);
                $('#plans .offer.nine .cont-price h4.days').text(fetchHome.plans.Plans[8].HistoryLog);
                $('#plans .offer.nine .cont-price h4.clientNum').text('Clients ' + fetchHome.plans.Plans[8].ClientNum);
                $('#plans .offer.nine .cont-price h4.dailyRebort').text('Daily Report ' + fetchHome.plans.Plans[8].DailyReport);
                $('#plans .offer.nine .cont-price h4.findLoc').text('Find Location ' + fetchHome.plans.Plans[8].FindLocation);
                $('#plans .offer.nine .cont-price h4.makeRoute').text('Make Route ' + fetchHome.plans.Plans[8].MakeRoute);
                $('#plans .offer.nine .cont-price h4.checkRoute').text('Check Report ' + fetchHome.plans.Plans[8].CheckReport);
                $('#plans .offer.nine .cont-price h4.routeReport').text('Route Report ' + fetchHome.plans.Plans[8].RouteReport);
            }
        }
    }


    useEffect(() => {
        changeDir();
    
        return () => {
            changeDir();
        }
    }, [isEng]);



    
    return (
        <>
            {/* header section */}
            <header id="home" className="position-relative" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="total-header min-vh-70 d-flex justify-content-center align-items-end pb-5">
                    <div className="container">
                        <div className="caption text-center">
                            <h1 className="text-capitalize fw-bold mb-4 mx-auto" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in">{isEng ? fetchHome.top.Title : fetchHome.top.TitleAr}</h1>
                            <p className="mb-4 py-1 mx-auto text-muted" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-out">{isEng ? fetchHome.top.Text : fetchHome.top.TextAr}
                            </p>
                            <div className="buttons row d-flex justify-content-center align-items-center mx-auto">
                                <div className="col-6">
                                    <button onClick={goToAppSection} className="btn main-btn black-btn"  data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in">
                                        <i className={`fa-solid fa-download ${isEng ? 'me-1' : 'ms-1'}`}></i> {isEng ? fetchHome.top.BtnEn : fetchHome.top.BtnAr}
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button type="button" onClick={toggleTrailer} className="modal-btn btn second-btn" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-out">
                                        <i className={`fa-solid fa-circle-play ${isEng ? 'me-1' : 'ms-1'}`}></i> {isEng ? fetchHome.top.Btn2En : fetchHome.top.Btn2Ar}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="trailer">
                        <iframe src="https://www.youtube.com/embed/0EMTIXkuMOU" title="Zari Sales" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <i className="fa-solid fa-xmark close" onClick={toggleTrailer}></i>
                        </div>
                    </div>
                </div>
            </header>

            {/* features section */}
            <section id='features' className='py-5' dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                    <div className="row pt-5 g-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-4">
                            <div className="img-features mx-auto py-4 text-center" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
                                <h2 className='fw-bold mb-4 text-white'>{isEng ? fetchHome.feature.Title : fetchHome.feature.TitleAr}</h2>
                                <img src={imgFeatures} className='w-100' alt="features-img" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="cont mx-auto">
                                <div className="row gx-5">
                                    {fetchHome.feature.Features.map((item , i) => (
                                        <div key={i} className="col-md-6">
                                            <div className="feature p-3 mx-auto bg-light" data-aos={animAos[i].fade} data-aos-duration="500" data-aos-easing={animAos[i].delay}>
                                                <span className={`${isEng ? 'me-3' : 'ms-3'}`}><img src={item.FeatureImage} alt="feature" /></span>
                                                <p className='mb-0'>{isEng ? item.FeatureNameEn : item.FeatureNameAr}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* our app section */}
            <section id='app' className='py-5' dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center gy-5">
                        <div className="col-lg-6">
                            <div className="caption-app" data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h2 className='fw-bold mb-4 h1' data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in">{isEng ? fetchHome.app.Title : fetchHome.app.TitleAr}</h2>
                                <p className='mb-4 text-muted' data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-out">{isEng ? fetchHome.app.Text : fetchHome.app.TextAr}</p>
                                <button
                                    className="btn w-75 main-btn-p d-flex justify-content-center align-items-center mb-4" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in">
                                    <i className={`fa-brands fa-apple ${isEng ? 'me-3' : 'ms-3'} fa-2x`}></i>
                                    <div className={`parag ${isEng ? 'text-start' : 'text-end'}`}>
                                        <p className="mb-0 h5 available">{isEng ? fetchHome.app.BtnEn : fetchHome.app.BtnAr}</p>
                                    </div>
                                </button>
                                <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.zari.sales.outdoor"
                                    className="btn w-75 second-btn-p d-flex justify-content-center align-items-center" data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-out">
                                    <i className={`fa-brands fa-google-play ${isEng ? 'me-3' : 'ms-3'} fa-2x`}></i>
                                    <div className={`parag ${isEng ? 'text-start' : 'text-end'}`}>
                                        <p className="mb-0 h5 get-on">{isEng ? fetchHome.app.Btn2En : fetchHome.app.Btn2Ar}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-app text-center" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <img src={imgApp} className="w-75" alt="sales app" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* plans section */}
            <section id='plans' className='py-5'>
                <div className="container">
                    <h2 className="fw-bold fs-1 mb-5 mt-4 w-75 mx-auto text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in">{isEng ? fetchHome.plans.Title : fetchHome.plans.TitleAr}</h2>

                    <OwlCarousel className="slider-items owl-carousel wow fadeInRight" data-wow-duration="1.5s" {...plans}>
                        {fetchHome.plans.Plans.map((item , i) => (
                            <Link key={i} className={`offer ${intClasses[i]}`} to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link>
                        ))}

                            {/* {fetchHome.plans.Plans[0] ?  <Link className="offer one" to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link> : ''}
                            {fetchHome.plans.Plans[1] ?  <Link className="offer two" to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link> : ''}
                            {fetchHome.plans.Plans[2] ?  <Link className="offer three" to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link> : ''}
                            {fetchHome.plans.Plans[3] ?  <Link className="offer four" to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link> : ''}
                            {fetchHome.plans.Plans[4] ?  <Link className="offer five" to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link> : ''}
                            {fetchHome.plans.Plans[5] ?  <Link className="offer six" to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link> : ''}
                            {fetchHome.plans.Plans[6] ?  <Link className="offer seven" to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link> : ''}
                            {fetchHome.plans.Plans[7] ?  <Link className="offer eight" to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link> : ''}
                            {fetchHome.plans.Plans[8] ?  <Link className="offer nine" to='../checkout' data-aos="flip-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                <h3 className="name" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in"></h3>
                                <div className='cont-price'>
                                    <h6 data-aos="zoom-out" data-aos-duration="2000" data-aos-easing="ease-in" className="salary"><span className="fs-2 main-color"></span> $ /Month or 190 $ /Year</h6>
                                    <h4 className='desc'></h4>
                                    <h4 className='adminNum'></h4>
                                    <h4 className='salesNum'></h4>
                                    <h4 className='days'></h4>
                                    <h4 className='clientNum'></h4>
                                    <h4 className='dailyRebort'></h4>
                                    <h4 className='findLoc'></h4>
                                    <h4 className='makeRoute'></h4>
                                    <h4 className='checkRoute'></h4>
                                    <h4 className='routeReport'></h4>
                                </div>
                            </Link> : ''} */}
                    </OwlCarousel>

                    <div className="buttons text-center mx-auto pt-3 mt-5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out">
                        <Link to='../contact' className="btn black-btn w-75 text-capitalize">{isEng ? 'For yearly Contract Contact Us' : 'لإبرام عقد سنوي تواصل معنـــا'}</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
