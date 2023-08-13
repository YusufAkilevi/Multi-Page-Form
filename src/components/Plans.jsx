import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import classes from "./Plans.module.css";
import IconArcade from "../components/Icons/IconArcade";
import IconAdvanced from "../components/Icons/IconAdvanced";
import IconPro from "../components/Icons/IconPro";
import { useDispatch, useSelector } from "react-redux";
import { planActions } from "../store";

const Plans = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const planPeriod = useSelector((state) => state.period);
  const planInputValue = useSelector((state) => state.plan);

  const planInputChangeHandler = (e) => {
    dispatch(planActions.selectPlan(e.target.value));
  };
  const periodChangeHandler = (e) => {
    dispatch(planActions.selectPeriod(e.target.value));
  };
  const clickHandler = () => {
    navigate("/add-ons");
  };

  return (
    <Layout>
      <div className={classes.heading}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <form className={classes["plan-form"]}>
        <div className={classes["input-box"]}>
          <label
            className={planInputValue === "arcade" ? classes.checked : null}
            htmlFor="arcade"
          >
            <IconArcade />
            <div>
              <span>Arcade</span>
              <span className={classes.price}>
                {planPeriod === "monthly" ? "$9/mo" : "$90/yr"}
              </span>
              {planPeriod === "yearly" ? (
                <span className={classes.free}>2 months free</span>
              ) : null}
            </div>

            <input
              onChange={planInputChangeHandler}
              name="plan"
              type="radio"
              id="arcade"
              value="arcade"
            />
          </label>
        </div>
        <div className={classes["input-box"]}>
          <label
            className={planInputValue === "advanced" ? classes.checked : null}
            htmlFor="advanced"
          >
            <IconAdvanced />
            <div>
              <span>Advanced</span>
              <span className={classes.price}>
                {planPeriod === "monthly" ? "$12/mo" : "$120/yr"}
              </span>
              {planPeriod === "yearly" ? (
                <span className={classes.free}>2 months free</span>
              ) : null}
            </div>

            <input
              onChange={planInputChangeHandler}
              name="plan"
              type="radio"
              id="advanced"
              value="advanced"
            />
          </label>
        </div>
        <div className={classes["input-box"]}>
          <label
            className={planInputValue === "pro" ? classes.checked : null}
            htmlFor="pro"
          >
            <IconPro />
            <div>
              <span>Pro</span>
              <span className={classes.price}>
                {planPeriod === "monthly" ? "$15/mo" : "$150/yr"}
              </span>
              {planPeriod === "yearly" ? (
                <span className={classes.free}>2 months free</span>
              ) : null}
            </div>

            <input
              onChange={planInputChangeHandler}
              name="plan"
              type="radio"
              id="pro"
              value="pro"
            />
          </label>
        </div>
        <div className={classes.period}>
          <span className={planPeriod === "monthly" ? classes.active : null}>
            Monthly
          </span>
          <input
            onChange={periodChangeHandler}
            type="range"
            id="period"
            min="0"
            max="1"
            defaultValue={planPeriod === "monthly" ? "0" : "1"}
          />
          <span className={planPeriod === "yearly" ? classes.active : null}>
            Yearly
          </span>
        </div>
      </form>
      <div className={classes.links}>
        <Link to="/">Go Back</Link>
        <button disabled={!planInputValue} onClick={clickHandler}>
          Next Step
        </button>
      </div>
    </Layout>
  );
};
export default Plans;
