import { useState } from "react";
import classes from "./PersonalInfoForm.module.css";

import Layout from "./Layout";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { planActions } from "../store";

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.personalInfo);
  const [isTouched, setIsTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const isNameValid = userInfo.name.length !== 0;
  const isEmailValid = userInfo.email.length !== 0;
  const isPhoneValid = userInfo.phone.length !== 0;
  const isFormValid = isNameValid && isEmailValid && isPhoneValid;

  const clickHandler = () => {
    if (isFormValid) {
      navigate("/select-plan");
    }
  };
  const inputChangeHandler = (event) => {
    dispatch(
      planActions.addPersonalInfo({
        eventId: event.target.id,
        eventValue: event.target.value,
      })
    );
  };
  const inputBlurHandler = (event) => {
    setIsTouched((prevState) => ({ ...prevState, [event.target.id]: true }));
  };
  return (
    <Layout>
      <div className={classes.heading}>
        <h1>Personal info</h1>
        <p>Please provide your name, email addres and phone number.</p>
      </div>
      <form>
        <div className={classes["input-box"]}>
          <label htmlFor="name">
            <div>
              <span>Name</span>
              {!isNameValid && isTouched.name && (
                <span style={{ marginLeft: "auto", color: "red" }}>
                  This field is required
                </span>
              )}
            </div>
          </label>
          <input
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            value={userInfo.name}
          />
        </div>
        <div className={classes["input-box"]}>
          <label htmlFor="email">
            <div>
              <span>Email Address</span>
              {!isEmailValid && isTouched.email && (
                <span style={{ marginLeft: "auto", color: "red" }}>
                  This field is required
                </span>
              )}
            </div>
          </label>
          <input
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            value={userInfo.email}
          />
        </div>
        <div className={classes["input-box"]}>
          <label htmlFor="phone">
            <div>
              <span>Phone Number</span>
              {!isPhoneValid && isTouched.phone && (
                <span style={{ marginLeft: "auto", color: "red" }}>
                  This field is required
                </span>
              )}
            </div>
          </label>
          <input
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            type="text"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            value={userInfo.phone}
          />
        </div>
      </form>
      <div className={classes.links}>
        <button onClick={clickHandler}>Next Step</button>
      </div>
    </Layout>
  );
};
export default PersonalInfoForm;
