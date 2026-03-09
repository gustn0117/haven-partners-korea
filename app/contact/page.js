import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact | Haven Partners Korea',
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <span className="section-label">Contact</span>
        <h1 className="section-title" style={{ fontSize: 42 }}>Contact</h1>
        <p className="page-hero-desc">Project Proposals &amp; Partnership Inquiries</p>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div>
            <div className="contact-info-item">
              <h3>Company</h3>
              <p>Haven Partners Korea</p>
            </div>
            <div className="contact-info-item">
              <h3>Business</h3>
              <p>Film &amp; Television Content Investment &amp; Distribution</p>
            </div>
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>contact@havenpartnerskorea.com</p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
