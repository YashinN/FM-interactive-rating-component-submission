import styles from "./MessageScreen.module.css";
import PaymentSvg from "./svg/Online payment_Two Color.svg";

const MessageScreen = () => {
  return (
    <>
      <img
        className={styles.paymentImg}
        src={PaymentSvg}
        alt="mobile phone showing paymnet process"
      />
      <div className={styles.feedbackWrapper}>
        <p className={styles.feedbackText}>You selected 4 out of 5</p>
      </div>
      <h1 className={styles.title}>Thank you!</h1>

      <p className={styles.paragraph}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
};

export default MessageScreen;
