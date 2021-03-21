import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100%;
    body {
    
      #root {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        height: 100%;
        padding: 15px;
      }
    }
        /* header */

        .header {
          display: block;
          max-width: 90%;
          padding: 20px 10px;
          margin: 0px auto;
        }

        .header ul {
          margin: 0;
          padding: 0;
          list-style: none;
          overflow: hidden;
          background-color: ${theme.colors.background};
        }
        .grey-color {
          color: black;
        }


        .header li a {
          display: block;
          padding: 20px 0px;
          color: ${theme.colors.header_color};
          text-decoration: none;
          background-color: ${theme.colors.header};
        }

          @media only screen and (max-width: 75em) {
            .header li a {
              display: block;
              padding: 0px 0px;
              color: ${theme.colors.header_color};
              text-decoration: none;
              background-color: ${theme.colors.header};

            }

          }

          .header li a:hover,
          .header .menu-btn:hover {
            background-color: ${theme.colors.header};
            color: ${theme.colors.logo_color};

          }



        .header .logo {
          display: block;
          float: left;
          font-size: 1.5em;
          text-decoration: none;
          margin-top: 10px;
          line-height: normal;
        }

        @font-face{
          font-family: "BeautyDemo";
          font-size: 40px;
          src: url("./BeautyDemo.ttf") format("truetype");
        }

        .header .logo-name {
          font-family: "BeautyDemo";
          font-weight: bold;
          padding: 0 10px;
          font-size: 45px;
          color: ${theme.colors.logo_color};
        }

        .header li a:before, .header li a:after
        {
            opacity: 0;
            transition: all 0.3s;
            
        }

        .header li a:after {
          font-family:"Agustina Regular";
          content: "/>";
          transform: translateX(-10px);
          font-weight:normal;
          font-size: 35px;
          padding-left: -10px;
          color: ${theme.colors.logo_color};


        }

        .header li a:before {
          font-family:"Agustina Regular";
          content: "<";
          font-weight:normal;
          font-size: 35px;
          transform: translateX(-10px);
          color: ${theme.colors.logo_color};


        }

        .header li a:hover:before, .header li a:hover:after
        {
            opacity: 1;
            transform: translateX(0px);
        }

        .header li a:focus:before, .header li a:focus:after
        {
            opacity: 10;
            transform: translateX(0px);
        }



        /* menu */

        .menu {
          /*font-family: "Google Sans Regular";*/
          font-family: "BeautyDemo";
          font-weight:normal;
          padding: 0 0px;
          font-size: 35px;
        }

        .header .menu {
          clear: both;
          max-height: 0;
          transition: max-height 0.2s ease-out;
        }

        /* menu icon */

        .header .menu-icon {
          cursor: pointer;
          display: inline-block;
          float: right;
          padding: 28px 20px;
          position: relative;
          user-select: none;
        }

        .header .menu-icon .navicon {
          background: #333;
          display: block;
          height: 2px;
          position: relative;
          transition: background 0.2s ease-out;
          width: 18px;
        }

        .header .menu-icon .navicon:before,
        .header .menu-icon .navicon:after {
          background: #333;
          content: "";
          display: block;
          height: 100%;
          position: absolute;
          transition: all 0.2s ease-out;
          width: 100%;
        }

        .header .menu-icon .navicon:before {
          top: 5px;
        }

        .header .menu-icon .navicon:after {
          top: -5px;
        }

        /* menu btn */

        .header .menu-btn {
          display: none;
        }

        .header .menu-btn:checked ~ .menu {
          max-height: 450px;
        }

        .header .menu-btn:checked ~ .menu-icon .navicon {
          background: transparent;
        }

        .header .menu-btn:checked ~ .menu-icon .navicon:before {
          transform: rotate(-45deg);
        }

        .header .menu-btn:checked ~ .menu-icon .navicon:after {
          transform: rotate(45deg);
        }

        .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
        .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
          top: 0;
        }



        /* 48em = 768px */

        @media (min-width: 75em) {

          .header li {
            float: left;
          }
          
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .header .menu {
            max-height: none;
          }
          .header .menu-icon {
            display: none;
          }
        }
        @media (max-width: 960px) and (min-width: 768px) {
          .header {
            font-size: 12px;
          }
        }


        //university card image:
        .degree-card {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          color:black;
        }

        .card-title {
            font-family : "cassette";
            font-size: 23px;

            color: #ffffff;
        }

        .card-subtitle {
            font-family: "cassette";
            font-size: 18px;
            color: #d6c5c5;
            margin-top: 7px;
            margin-bottom: 5px;
        }

        .card-img {
            width: 200px;
            height: auto;
            border-radius: 50%;
            padding: 10px;
            border: 1px solid #d9dbdf;
            background-color: #fffff;
            box-shadow: 5px 0px 0px #ffff;
        }

        .body-header {
            max-width: inherit;
            display: flex;
            // width: 100%;
            background-color: ${theme.colors.degree_card_header_bgcolor}; 
            border-radius: 7px 7px 0px 0px;
            padding: 10px;
        }

        .body-header-title {
            align-items: flex-start;
            width: 80%;
        }

        .body-header-duration {
            width: 20%;
        }
        .duration {
            font-family: "cassette";
            font-size: 16px;
            color: #d6c5c5;
            padding-right:10px;
            float: right;
        }

        .body-content {
            max-width: inherit;
            width: 100%;
            border-radius: 0px 0px 7px 7px;
            padding: 5px;
            justify-content:center;
            align-items: center;
            box-shadow: 5px 5px 5px #d3d3d3;
        }

        .content-list {
            padding-left: 10px;
            font-weight:30px;
            padding-right: 10px;
            font-family: "cassette";
        }

        .card-body {
            background-color: ${theme.colors.degree_card_bgcolor}; 
            border-bottom: 1px solid #d9dbdf;
            border-left: 1px solid #d9dbdf;
            border-right: 1px solid #d9dbdf;
            border-radius: 7px;
            width: 90%;
            margin: 10px;
            box-shadow: 5px 5px 5px #d9dbdf;
        }

        .visit-btn{
            background-color: #287ba9;
            display: inline-block;
            margin: 0px 10px 10px 0px;
            padding: 10px;
            border-radius: 7px;
            border: 0px;
            float: right;
            color: white;
        }

        .visit-btn:hover {
            background-color:rgb(181 102 119);
        }

        .btn {
            margin: 0px;
            padding: 0px;
            font-family: "Google Sans Regular";
            color: #ffffff;
        }

        @media (max-width:1380px){
        }

      @media (max-width:768px){
          .degree-card {
              flex-direction: column;
          }

          .body-header {
              flex-direction: column;
          }

          .body-header-title {
              width: 100%;
          }

          .body-header-duration {
              padding: 0;
              margin: 0;
              width: 100%;
          }

          .duration {
              padding: 0px;
              margin: 0px;
              float: left;
          }

          .card-img {
              width: 200px;
          }

          .card-body{
              width: 100%;
          }

          .card-title {
              font-size: 20px;
          }

          .card-subtitle {
              font-size: 16px;
          }
      }

      .experience-card {
        background-color:${theme.colors.exp_card_bgcolor};
    }
    

      .experience-accord .b4 {
          background-color: ${theme.colors.accordian_background};
          color: ${theme.colors.accordian_text_color};
          font-family: 'cassette';
      }

      .experience-accord .ba {
          color: ${theme.colors.accordian_text_color};
          font-family: 'cassette';
      }

      .experience-accord .bu {
          background-color: ${theme.colors.accordian_background_2};
          color: ${theme.colors.accordian_p_text_color};
          font-family: 'cassette';
      }


      .accord-panel {
          font-family: 'Google Sans Regular';
      }

      @media (max-width: 768px) {
          .experience-accord{
              margin: 20px;
              margin-left: 45px;
          }
      }


      // .greeting-text-p {
      //   font-size: 30px;
      //   line-height: 40px;
      //   color: ${theme.colors.greetings_p_color}
      //   font-family:"cassette";
      // }
      .subTitle {
        color: ${theme.colors.greetings_p_color}
      }

      
         
      

        .carousel .slide {
          min-width: 100%;
          margin: 0;
          position: relative;
          text-align: center;
          background:${theme.colors.carousal_bgcolor};
          color: coral;
      }


      .main-button {
        background-color: ${theme.colors.main_btn_color};
        border: solid 1px ${theme.colors.main_btn_color};
        color: white;
        font-weight: 500;
        line-height: 1.1;
        width: max-content;
        padding: 13px 22px;
        margin-right: 0px;
        /* text-transform: uppercase; */
        border-radius: 6px;
        text-align: center;
        text-decoration: none;
        font-family: "Google Sans Regular";
        display: block;
        margin-top: 20px;
        font-size: 18px;
        cursor: pointer;
      }
      .main-button:hover {
        background-color: #ffffff;
        color: black;
        transition: ease-in 0.3s;
      }
      .project-button{
        display: flex;
        justify-content: center;
        margin-top: 20px;
      
      }
      /* Media Query */
      @media (max-width: 768px) {
        .main-button {
          font-size: 15px;
          padding: 12px 18px;
          margin-right: 0px;
        }
      }
      @media (max-width: 320px) {
        .main-button {
          font-size: 12px;
        }
      }
      
}

}
`}
`;