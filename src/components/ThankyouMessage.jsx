import ThankyouIcon from "../components/Icons/ThankyouIcon";
import Layout from "../components/Layout";
import classes from "./ThankyouMessage.module.css";
const ThankyouMessage = () => {
  return (
    <Layout center={true}>
      <div className={classes.thanks}>
        <ThankyouIcon />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          support@loremgaming.com.
        </p>
      </div>
    </Layout>
  );
};
export default ThankyouMessage;
