import "../css/Contact.css";
import ContactData from "../data/ContactData";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="contact container-fluid row">
          <div className="content col-lg-5">
            <h2>{ContactData.contact_content_head}</h2>
            <p>{ContactData.contact_content_desc}</p>

            <h4>
              Living In:
              <span>{ContactData.contact_content_place}</span>
            </h4>
            <h4>
              Call:
              <span>{ContactData.contact_content_phone}</span>
            </h4>

            <ul className="social_links">
              <a href={ContactData.contact_link_linkedin}>
                {ContactData.contact_icon_linkedin}
              </a>
              <a href={ContactData.contact_link_github}>
                {ContactData.contact_icon_github}
              </a>
              <a href={ContactData.contact_link_facebook}>
                {ContactData.contact_icon_facebook}
              </a>
              <a href={ContactData.contact_link_instagram}>
                {ContactData.contact_icon_instagram}
              </a>
              <a href={ContactData.contact_link_twitter}>
                {ContactData.contact_icon_twitter}
              </a>
            </ul>
          </div>

          <div className="form col-lg-6">
            <h2>{ContactData.contact_form_head}</h2>

            <form action={ContactData.formspree_form_link} method="POST">
              <div className="form-group">
                <label htmlFor="name">{ContactData.contact_form_input_1}</label>
                <input
                  type="text"
                  id="name"
                  name="Name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  {ContactData.contact_form_input_2}
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  {ContactData.contact_form_input_3}
                </label>
                <textarea
                  id="subject"
                  name="Subject"
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
