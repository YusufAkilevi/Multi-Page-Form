import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialPlanState = {
  personalInfo: { name: "", phone: "", email: "" },
  period: "monthly",
  plan: "",
  addons: [],
  totalPrice: 0,
};

const calcTotalPlanPrice = ({ plan, period, addons }) => {
  const isMonthly = (period) => period === "monthly";
  let price = 0;
  if (plan === "arcade") price = isMonthly(period) ? 9 : 90;
  if (plan === "advanced") price = isMonthly(period) ? 12 : 120;
  if (plan === "pro") price = isMonthly(period) ? 15 : 150;
  addons.forEach((addon) => {
    if (addon === "online-service")
      price = isMonthly(period) ? price + 1 : price + 10;
    if (addon === "larger-storage")
      price = isMonthly(period) ? price + 2 : price + 20;
    if (addon === "customizable-profile")
      price = isMonthly(period) ? price + 2 : price + 20;
  });

  return price;
};

const planStateSlice = createSlice({
  name: "plan",
  initialState: initialPlanState,
  reducers: {
    addPersonalInfo(state, action) {
      state.personalInfo = {
        ...state.personalInfo,
        [action.payload.eventId]: action.payload.eventValue,
      };
    },
    selectPeriod(state, action) {
      if (action.payload === "0") {
        state.period = "monthly";
      } else if (action.payload === "1") {
        state.period = "yearly";
      }
      state.totalPrice = calcTotalPlanPrice(state);
    },
    selectPlan(state, action) {
      state.plan = action.payload;
      state.totalPrice = calcTotalPlanPrice(state);
    },
    addAddOns(state, action) {
      if (!state.addons.includes(action.payload)) {
        state.addons = [...state.addons, action.payload];
      } else {
        state.addons = state.addons.filter((item) => item !== action.payload);
      }
      state.totalPrice = calcTotalPlanPrice(state);
    },
  },
});

const store = configureStore({ reducer: planStateSlice.reducer });
export const planActions = planStateSlice.actions;
export default store;
