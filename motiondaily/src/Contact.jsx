import { useRef } from "react";

function Contact() {
  const form = useRef();

  return (
    <>
    <section>
    <h1>Contact</h1>
      <form ref={form}>
        <p>
          <label>Name</label>
          <input type="name" placeholder="John Smith" />
        </p>

        <p>
          <label>Email</label>
          <input type="email" placeholder="johnsmith@gmail.com" />
        </p>
        <label>Message</label>
        <textarea></textarea>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </section>
    </>
  );
}

export default Contact;
