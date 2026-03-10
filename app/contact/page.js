import ContactForm from '@/components/ContactForm';
import { getSettings as fetchSettings } from '@/lib/db';

export const metadata = {
  title: 'Contact | Haven Partners Korea',
};

export const dynamic = 'force-dynamic';

async function getSettings() {
  return fetchSettings();
}

export default async function ContactPage() {
  const settings = await getSettings();

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
            {settings.email && (
              <div className="contact-info-item">
                <h3>Email</h3>
                <p>{settings.email}</p>
              </div>
            )}
            {settings.phone && (
              <div className="contact-info-item">
                <h3>Phone</h3>
                <p>{settings.phone}</p>
              </div>
            )}
            {settings.address && (
              <div className="contact-info-item">
                <h3>Address</h3>
                <p>{settings.address}</p>
              </div>
            )}
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
