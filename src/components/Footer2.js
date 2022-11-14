import React from "react";
import group11 from "../images/Group11.svg";
import facebook from "../images/facebook1.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import logo from "../images/artlogo.svg";
import { Facebook, Footer2Container, Footer2Meta, Footer3, Instagram, MetaBub, Twitter } from "./Footer2Style";

function Footer2() {
  return (
    <div>
      <Footer2Container>
        <Footer2Meta>
          <img src={group11} alt="group11" />
        </Footer2Meta>
        <div>
          <Facebook><img src={facebook} alt="facebook" /></Facebook>
          <Instagram><img src={instagram} alt="instagram" /></Instagram>
         <Twitter><img src={twitter} alt="twitter" /></Twitter>
        </div>
        <MetaBub><img src={logo} alt="logo" /></MetaBub>
        <Footer3>
          <div>
            <p id="first">Community</p>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>
          <div>
            <p id="first">Places</p>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
          </div>
          <div>
            <p id="first">About us</p>
            <p>Road map</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contact us</p>
          </div>
        </Footer3>
      </Footer2Container>
    </div>
  );
}

export default Footer2;
