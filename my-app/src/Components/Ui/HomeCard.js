import React from 'react'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


export default function HomeCard({ color, heading, path, delay, image, size }) {
  return (
    <div>
      <motion.div
        className="home-card d-flex"
        style={{ backgroundColor: `${color}` }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: delay }}
      >
        <NavLink to={path} className="home-card-heading">
          <div>
            <h1>{heading}</h1>
          </div>
        </NavLink>
        <div className="home-img">
          <img src={image} alt="" width={size ? size : ""} />
        </div>
      </motion.div>
    </div>
  );
}
