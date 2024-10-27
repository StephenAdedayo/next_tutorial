'use client'

// import { serverSideFunction } from "@/utils/server-utils"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/themeProvider';
// import './ImageSlider.css';


export default function ClientRoutePage () {

    const settings = {
        dots: true,
      };

      const theme = useTheme()
 
    return (
        <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
        </Slider>

        <div style={{color : theme.colors.primary}}>
yes
        </div>
      </div>    )
}