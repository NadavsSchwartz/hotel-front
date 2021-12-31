import React from 'react';
import Container from '../../components/UI/Container/Container';
import Heading from '../../components/UI/Heading/Heading';
import PageWrapper from './Privacy.style';

export default function Privacy() {
  return (
    <PageWrapper>
      <Container>
        <Heading as="h2" content="Privacy Policy" id="tableofcontents" />
        <p>
          <strong>Effective Date: 30-12-2021</strong>
          <h3>Your privacy is important to us</h3>
          <p>Hotel Revealer is located at:</p>
          <address>
            Hotel Revealer
            <br />
            CA , United States
            <br />
          </address>
        </p>
        <p>
          It is Hotel Revealer's policy to respect your privacy regarding any
          information we may collect while operating our website. This Privacy
          Policy applies to{' '}
          <a href="https://hotelrevealer.org"> hotelrevealer.org</a>{' '}
          (hereinafter, "us", "we", or "hotelrevealer.org"). We respect your
          privacy and are committed to protecting personally identifiable
          information you may provide us through the Website. We have adopted
          this privacy policy ("Privacy Policy") to explain what information may
          be collected on our Website, how we use this information, and under
          what circumstances we may disclose the information to third parties.
          This Privacy Policy applies only to information we collect through the
          Website and does not apply to our collection of information from other
          sources.
        </p>
        <p>
          This Privacy Policy, together with the Terms of service posted on our
          Website, set forth the general rules and policies governing your use
          of our Website. Depending on your activities when visiting our
          Website, you may be required to agree to additional terms of service.
        </p>
        <Heading as="h4" content="This Policy describes:" />
        <ol type="1">
          <li>
            <a href="#Security">
              <strong>Security</strong>
            </a>
          </li>
          <li>
            <a href="#ExternalLinks">
              <strong>Links To External Sites</strong>
            </a>
          </li>
          <li>
            <a href="#Cookies">
              <strong>Cookies</strong>
            </a>
          </li>
          <li>
            <a href="#Changes">
              <strong>Privacy Policy Changes</strong>
            </a>
          </li>
          <li>
            <a href="#Credit">
              <strong>Contact Information &amp; Credit</strong>
            </a>
          </li>
        </ol>
        <Heading as="h2" content="1. Security" id="Security" />
        <p>
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </p>

        <Heading
          as="h2"
          content="2. Links To External Sites"
          id="ExternalLinks"
        />
        <p>
          Our Service may contain links to external sites that are not operated
          by us. If you click on a third party link, you will be directed to
          that third party's site. We strongly advise you to review the Privacy
          Policy and terms of service of every site you visit. We have no
          control over, and assume no responsibility for the content, privacy
          policies or practices of any third party sites, products or services.
        </p>

        <Heading as="h2" content="3. Cookies" id="Cookies" />
        <p>
          To enrich and perfect your online experience, Hotel Revealer uses
          "Cookies", similar technologies and services provided by others to
          display personalized content, appropriate advertising and store your
          preferences on your computer. A cookie is a string of information that
          a website stores on a visitor's computer, and that the visitor's
          browser provides to the website each time the visitor returns. Hotel
          Revealer uses cookies to help Hotel Revealer identify and track
          visitors, their usage of https://hotelrevealer.org, and their website
          access preferences. Hotel Revealer visitors who do not wish to have
          cookies placed on their computers should set their browsers to refuse
          cookies before using Hotel Revealer's websites, with the drawback that
          certain features of Hotel Revealer's websites may not function
          properly without the aid of cookies. By continuing to navigate our
          website without changing your cookie settings, you hereby acknowledge
          and agree to Hotel Revealer's use of cookies.
        </p>

        <Heading as="h2" content="4. Privacy Policy Changes" id="Changes" />
        <p>
          Although most changes are likely to be minor, Hotel Revealer may
          change its Privacy Policy from time to time, and in Hotel Revealer's
          sole discretion. Hotel Revealer encourages visitors to frequently
          check this page for any changes to its Privacy Policy. Your continued
          use of this site after any change in this Privacy Policy will
          constitute your acceptance of such change.
        </p>

        <Heading
          as="h2"
          content="5. Contact Information  &amp; Credit"
          id="Credit"
        />
        <p>
          This privacy policy was created at{' '}
          <a
            style={{ color: 'inherit', textDecoration: 'none' }}
            href="https://privacyterms.io/privacy-policy-generator/"
            title="Privacy policy generator"
            target="_blank"
            rel="noreferrer"
          >
            privacyterms.io privacy policy generator
          </a>
          . If you have any questions about our Privacy Policy, please contact
          us via <a href="mailto:Nadavschwartz58@gmail.com">email</a> .
        </p>

        <p>
          <a href="#tableofcontents">Back to table of contents</a>
        </p>
      </Container>
    </PageWrapper>
  );
}
