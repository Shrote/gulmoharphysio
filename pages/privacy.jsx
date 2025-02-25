import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Teams from "../src/components/About/Teams";
import Header from "../src/components/Header";



function Privacy() {

  return (
    <>
        {/* <TopBar /> */}
        <div className="container-fluid position-relative p-0">
        <NavBar />
        </div>
        <Header route="Privacy Policy" title="Our Privacy Policy" img="carousel-2.jpg"/>
        <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', color: '#333', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1 style={{ color: '#0056b3', fontSize: '2em', marginBottom: '10px' }}>Privacy Policy for Gulmohar Physio</h1>
            <p><strong>Effective Date:</strong> [25/01/2025]</p>
            <p>Gulmohar Physio ("we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you use our services, including our website and in-person visits.</p>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>1. Information We Collect</h2>
            <h3 style={{ color: '#0056b3', fontSize: '1.2em', marginTop: '15px' }}>a. Personal Information</h3>
            <p>We may collect the following personal information when you use our services:</p>
            <ul>
                <li>Name</li>
                <li>Contact details (e.g., phone number, email address)</li>
                <li>Date of birth</li>
                <li>Health information (e.g., medical history, treatment details)</li>
            </ul>
            
            <h3 style={{ color: '#0056b3', fontSize: '1.2em', marginTop: '15px' }}>b. Non-Personal Information</h3>
            <p>We may also collect non-personal data such as:</p>
            <ul>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Cookies and usage data</li>
            </ul>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Provide and improve our physiotherapy services</li>
                <li>Schedule and manage appointments</li>
                <li>Communicate with you regarding your treatments or inquiries</li>
                <li>Process payments and generate invoices</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Enhance your user experience on our website</li>
            </ul>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>3. How We Share Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to others. However, we may share your information with:</p>
            <ul>
                <li>Authorized personnel within Gulmohar Physio</li>
                <li>Third-party service providers for payment processing, analytics, or IT support</li>
                <li>Legal or regulatory bodies if required by law</li>
            </ul>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul>
                <li>Secure servers and encryption</li>
                <li>Regular security audits</li>
                <li>Restricted access to sensitive information</li>
            </ul>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>5. Your Rights</h2>
            <p>You have the following rights concerning your personal data:</p>
            <ul>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request corrections to any inaccuracies in your personal data.</li>
                <li><strong>Deletion:</strong> Request the deletion of your personal data, subject to legal or contractual obligations.</li>
                <li><strong>Objection:</strong> Object to the processing of your data for specific purposes.</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured, commonly used, and machine-readable format.</li>
            </ul>
            <p>To exercise these rights, please contact us at [Insert Contact Email/Phone].</p>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>6. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our website.</p>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies before providing any personal information.</p>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>8. Children's Privacy</h2>
            <p>Our services are not directed at children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with their data, please contact us immediately.</p>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website with the "Effective Date" prominently displayed.</p>

            <h2 style={{ color: '#0056b3', fontSize: '1.5em', marginTop: '20px' }}>10. Contact Us</h2>
            <p>If you have any questions, concerns, or complaints regarding this Privacy Policy or our handling of your personal data, please contact us at:</p>
            <p><strong>Gulmohar Physio</strong><br />
                Road, Dumar Dagga, Krishna Pura, Ohdar Village, Buti, Jharkhand 835217<br />
                gulmoharphysio@gmail.com<br />
                9835131321
            </p>

            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Thank you for trusting Gulmohar Physio with your health and privacy.</p>
        </div>
        <Footer/>
        <ToTop/>
    </>
  )
}

export default Privacy
