import Layout from "./Layout";
import classes from "./CheckoutPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const isMonthly = (period) => period === "monthly";
const calcPlanPrice = (plan, period) => {
  if (plan === "arcade") return isMonthly(period) ? 9 : 90;
  if (plan === "advanced") return isMonthly(period) ? 12 : 120;
  if (plan === "pro") return isMonthly(period) ? 15 : 150;
};
const calcAddOnPrice = (addon, period) => {
  if (addon === "online-service") return isMonthly(period) ? 1 : 10;
  if (addon === "larger-storage") return isMonthly(period) ? 2 : 20;
  if (addon === "customizable-profile") return isMonthly(period) ? 2 : 20;
};

const CheckoutPage = () => {
  const navigate = useNavigate();
  const period = useSelector((state) => state.period);
  const plan = useSelector((state) => state.plan);
  const totalPrice = useSelector((state) => state.totalPrice);
  const addOns = useSelector((state) => state.addons);

  return (
    <Layout>
      <div className={classes.heading}>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className={classes["checkout-details"]}>
        <div className={classes["selected-plan"]}>
          <div>
            <span>{`${plan[0]?.toUpperCase() + plan.slice(1)} (${
              period[0].toUpperCase() + period.slice(1)
            })`}</span>
            <Link to="/select-plan">Change</Link>
          </div>
          <span>{`$${calcPlanPrice(plan, period)}/${
            isMonthly(period) ? "mo" : "yr"
          }`}</span>
        </div>
        <hr />
        <ul className={classes["add-ons"]}>
          {addOns.map((addon) => {
            let modifiedAddon = addon.split("-").join(" ");
            modifiedAddon =
              modifiedAddon[0].toUpperCase() + modifiedAddon.slice(1);
            return (
              <li key={addon}>
                <span className={classes["gray-text-color"]}>
                  {modifiedAddon}
                </span>
                <span
                  className={classes["dark-blue-text-color"]}
                >{`+$${calcAddOnPrice(addon, period)}/${
                  isMonthly(period) ? "mo" : "yr"
                }`}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.total}>
        <span className={classes["gray-text-color"]}>
          Total (per {isMonthly(period) ? "month" : "year"})
        </span>
        <span className={classes["total-price"]}>{`$${totalPrice}/${
          isMonthly(period) ? "mo" : "yr"
        }`}</span>
      </div>
      <div className={classes.links}>
        <Link to="/add-ons">Go Back</Link>
        <button
          onClick={() => {
            navigate("/thanks");
          }}
        >
          Confirm
        </button>
      </div>
    </Layout>
  );
};
export default CheckoutPage;
