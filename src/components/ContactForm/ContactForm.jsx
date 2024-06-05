import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const onViaCallSubmit = () => {
    console.log("i am from call");
  };
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscriber to do ths channel");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={`${styles.container} container`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="6" />
          </div>
          <div
            className="submit"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <Button text="SUBMIT" icon={<MdEmail fontSize="24px" />} />
          </div>
          <div> { name + " " + email + " " + text }</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="images\Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
