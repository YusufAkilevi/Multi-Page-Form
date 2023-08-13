import { useState } from "react";
import Layout from "./Layout";
import classes from "./PickAddOns.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { planActions } from "../store";

const PickAddOns = () => {
  const dispatch = useDispatch();
  const planPeriod = useSelector((state) => state.period);
  const addonValue = useSelector((state) => state.addons);
  const price = useSelector((state) => state.totalPrice);
  const addonChangeHandler = (e) => {
    dispatch(planActions.addAddOns(e.target.value));
  };

  return (
    <Layout>
      <div className={classes.heading}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <form className={classes["add-on-form"]}>
        <div
          className={
            addonValue.includes("online-service")
              ? `${classes["input-box"]} ${classes.checked}`
              : classes["input-box"]
          }
        >
          <input
            onChange={addonChangeHandler}
            id="online-service"
            type="checkbox"
            value="online-service"
            checked={addonValue.includes("online-service")}
          />
          <label htmlFor="online-service">
            <div>
              <span className={classes["add-on"]}>Online service</span>
              <span className={classes["add-on-description"]}>
                Access to multiplayer games
              </span>
            </div>
            <span className={classes["added-price"]}>
              +${planPeriod === "monthly" ? "1/mo" : "10/yr"}
            </span>
          </label>
        </div>
        <div
          className={
            addonValue.includes("larger-storage")
              ? `${classes["input-box"]} ${classes.checked}`
              : classes["input-box"]
          }
        >
          <input
            onChange={addonChangeHandler}
            id="larger-storage"
            type="checkbox"
            value="larger-storage"
            checked={addonValue.includes("larger-storage")}
          />
          <label htmlFor="larger-storage">
            <div>
              <span className={classes["add-on"]}>Larger storage</span>
              <span className={classes["add-on-description"]}>
                Extra 1TB of cloud save
              </span>
            </div>
            <span className={classes["added-price"]}>
              +${planPeriod === "monthly" ? "2/mo" : "20/yr"}
            </span>
          </label>
        </div>
        <div
          className={
            addonValue.includes("customizable-profile")
              ? `${classes["input-box"]} ${classes.checked}`
              : classes["input-box"]
          }
        >
          <input
            onChange={addonChangeHandler}
            id="customize"
            type="checkbox"
            value="customizable-profile"
            checked={addonValue.includes("customizable-profile")}
          />
          <label htmlFor="customize">
            <div>
              <span className={classes["add-on"]}>Customizable profile</span>
              <span className={classes["add-on-description"]}>
                Custom theme on your profile
              </span>
            </div>
            <span className={classes["added-price"]}>
              +${planPeriod === "monthly" ? "2/mo" : "20/yr"}
            </span>
          </label>
        </div>
      </form>
      <div className={classes.links}>
        <Link to="/select-plan">Go Back</Link>
        <Link to="/summary">Next Step</Link>
      </div>
    </Layout>
  );
};

export default PickAddOns;
