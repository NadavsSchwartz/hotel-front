import React from 'react';
import Container from '../../components/UI/Container/Container';
import Heading from '../../components/UI/Heading/Heading';
import PageWrapper from './Privacy.style';
const Privacy = () => {
  return (
    <PageWrapper>
      <Container>
        <Heading
          as="h2"
          content="Welcome to Hotel Revealer"
          id="tableofcontents"
        />
        <p>
          These terms of service outline the rules and regulations for the use
          of Hotel Revealer's Website. Hotel Revealer is located at:
          <address>CA , United States</address>
        </p>
        <p>
          By accessing this website we assume you accept these terms of service
          in full. Do not continue to use Hotel Revealer's website if you do not
          accept all of the terms of service stated on this page.
        </p>

        <p>
          The following terminology applies to these Terms of Service, Privacy
          Statement and Disclaimer Notice and any or all Agreements: "Client",
          "You" and "Your" refers to you, the person accessing this website and
          accepting the Company's terms of service. "The Company", "Ourselves",
          "We", "Our" and "Us", refers to our Company. "Party", "Parties", or
          "Us", refers to both the Client and ourselves, or either the Client or
          ourselves. All terms refer to the offer, acceptance and consideration
          of payment necessary to undertake the process of our assistance to the
          Client in the most appropriate manner, whether by formal meetings of a
          fixed duration, or any other means, for the express purpose of meeting
          the Client's needs in respect of provision of the Company's stated
          services/products, in accordance with and subject to, prevailing law
          of United States. Any use of the above terminology or other words in
          the singular, plural, capitalisation and/or he/she or they, are taken
          as interchangeable and therefore as referring to same.
        </p>
        <Heading as="h4" content="This Policy describes:" />
        <ol type="1">
          <li>
            <a href="#Cookies">
              <strong>Cookies</strong>
            </a>
          </li>
          <li>
            <a href="#License">
              <strong>License</strong>
            </a>
          </li>
          <li>
            <a href="#ContentLiability">
              <strong>Content Liability</strong>
            </a>
          </li>
          <li>
            <a href="#Disclaimer">
              <strong>Disclaimer</strong>
            </a>
          </li>
        </ol>
        <Heading as="h2" content="1. Cookies" id="Cookies" />
        <p>
          We employ the use of cookies. By using Hotel Revealer's website you
          consent to the use of cookies in accordance with Hotel Revealer's
          privacy policy. Most of the modern day interactive web sites use
          cookies to enable us to retrieve user details for each visit. Cookies
          are used in some areas of our site to enable the functionality of this
          area and ease of use for those people visiting. Some of our affiliate
          / advertising partners may also use cookies.
        </p>

        <Heading as="h2" content="2. License" id="License" />
        <p>
          Unless otherwise stated, Hotel Revealer and/or it's licensors own the
          intellectual property rights for all material on Hotel Revealer. All
          intellectual property rights are reserved. You may view and/or print
          pages from hotelrevealer.org for your own personal use subject to
          restrictions set in these terms of service. You must not: Republish
          material from https://www.hotelrevealer.org Sell, rent or sub-license
          material from https://www.hotelrevealer.org Reproduce, duplicate or
          copy material from https://www.hotelrevealer.org Redistribute content
          from Hotel Revealer (unless content is specifically made for
          redistribution).
        </p>

        <Heading as="h2" content="3. Content Liability" id="ContentLiability" />
        <p>
          We shall have no responsibility or liability for any content appearing
          on your Web site. You agree to indemnify and defend us against all
          claims arising out of or based upon your Website. No link(s) may
          appear on any page on your Web site or within any context containing
          content or materials that may be interpreted as libelous, obscene or
          criminal, or which infringes, otherwise violates, or advocates the
          infringement or other violation of, any third party rights.
        </p>

        <Heading as="h2" content="4. Disclaimer" id="Disclaimer" />
        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website (including, without limitation, any warranties
          implied by law in respect of satisfactory quality, fitness for purpose
          and/or the use of reasonable care and skill). Nothing in this
          disclaimer will: limit or exclude our or your liability for death or
          personal injury resulting from negligence; limit or exclude our or
          your liability for fraud or fraudulent misrepresentation; limit any of
          our or your liabilities in any way that is not permitted under
          applicable law; or exclude any of our or your liabilities that may not
          be excluded under applicable law. The limitations and exclusions of
          liability set out in this Section and elsewhere in this disclaimer:
          (a) are subject to the preceding paragraph; and (b) govern all
          liabilities arising under the disclaimer or in relation to the subject
          matter of this disclaimer, including liabilities arising in contract,
          in tort (including negligence) and for breach of statutory duty. To
          the extent that the website and the information and services on the
          website are provided free of charge, we will not be liable for any
          loss or damage of any nature.
        </p>

        <p>
          <a href="#tableofcontents">Back to table of contents</a>
        </p>
      </Container>
    </PageWrapper>
  );
};

export default Privacy;
