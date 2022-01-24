import type { NextPage } from "next";
import React from "react";

import Layout from "components/layout/Layout";

import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

interface TextProps {
  children: React.ReactNode;
}

interface ListProps {
  data: Array<string>;
}

interface LinkProps {
  children: React.ReactNode;
}

const BaseLink: React.FC<LinkProps> = ({ children }) => {
  return (
    <Link
      color="#CC0000"
      _hover={{ cursor: "pointer", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};

const BaseText: React.FC<TextProps> = ({ children }) => {
  return (
    <Text
      fontSize={{ base: "14px", md: "18px" }}
      lineHeight={{ base: "22px", md: " 28px" }}
      mb="15px"
      color="#6C6B74"
    >
      {children}
    </Text>
  );
};

const BaseList: React.FC<ListProps> = ({ data }) => {
  return (
    <UnorderedList>
      {data.map((item, i) => (
        <ListItem
          key={i}
          fontSize={{ base: "14px", md: "18px" }}
          lineHeight={{ base: "22px", md: " 28px" }}
          mb="15px"
          color="#6C6B74"
        >
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

const PrivatePolicy: NextPage = () => {
  return (
    <Layout title="Private Policy" isStarted={false}>
      <Box
        w="100%"
        h={{base: '79px', md: '110px'}}
        display="flex"
        background="linear-gradient(179deg, rgba(71,118,230,1) 0%, rgba(142,84,233,1) 100%)"
        // background="linear-gradient(144.51deg, #4776E6 0%, #8E54E9 100%)"
      />

      <Box padding={{ base: "85px 25px", md: "100px 60px", xl: "100px 146px" }}>
        <Box w="100%">
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "40px" }}
            lineHeight={{ base: "35px", md: "50px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "30px", md: "50px" }}
          >
            Privacy Policy
          </Heading>

          <Box mb="40px">
            <BaseText>
              The General Terms below are complicated legal terms that serve to
              protect us and make clear the privacy terms that will apply to
              users of Corekyc services. These terms below are here to give you
              a simple explanation of what the General Terms really mean in
              plain English.
            </BaseText>

            <BaseText>
              However, these plain English terms are not legally binding and the
              General Terms are still the legal terms that will apply if
              anything goes wrong.
            </BaseText>

            <BaseList
              data={[
                `Personal Information: Corekyc temporarily stores your personal
              information when you use our service. Because of this, Corekyc
              takes on the legal responsibilities that come with storing this
              information.`,
                `Collection and Use of Personal Information: In order to
successfully deliver Corekyc’s service, we are required to
collect and disclose your personal information with our agents
for verification purposes.`,
                `Your Rights: You have the right to be able to access, amend, and
delete your personal information.`,
                `Cookies: Our service does not use cookies to collect data.`,
                `Security: Corekyc uses highly secure cloud services by Amazon
Web Services (AWS). AWS provides encryption in transit with TLS
across all services.`,
                `Third-party Links: When you click on a third-party link to
another site that is not operated by us, we have no control over
or responsibility for the content or privacy policies of these
other sites.`,
              ]}
            />
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            General Terms
          </Heading>

          <Box mb="40px">
            <BaseText>
              Corekyc Limited t/a Corekyc, a limited company incorporated in New
              Zealand (Corekyc), is a Software as a Service system to enable
              customers to verify their client’s identification for anti-money
              laundering or know your client purposes (Service). This Privacy
              Policy applies to users of the Application (App){" "}
              <BaseLink>app.realaml.co.nz </BaseLink>
              and the web address realyou.co.nz (Website). Corekyc complies with
              both the Privacy Act 1998 (Cth) (the Act) in addition to The
              Privacy Act 2020 (NZ).
            </BaseText>

            <BaseText>
              This Privacy Policy is used to inform you of Corekyc’s policies
              relating to the use, collection, and disclosure of Personal
              Information when you use our Service. It also provides for the
              rights customers have in respect of their Personal Information.
              When we talk about Personal Information, we mean information
              relating to you or other identifiable individuals.
            </BaseText>

            <BaseText>
              By using the Service, you agree to be bound by the terms of the
              then current privacy policy (Privacy Policy). Realyou reserves the
              right, at any time, to modify or replace the Privacy Policy. The
              most recent version of the Privacy Policy is available at{" "}
              <BaseLink>privacy.realyou.co.nz </BaseLink> Please check the
              Privacy Policy page periodically for changes, though we will also
              notify you via the Service of any changes that, in our sole
              discretion, materially impact your use of the Service or the
              treatment of your Personal Information. Your use of the Service
              following the posting of any changes to the Privacy Policy
              constitutes acceptance of those changes.
            </BaseText>

            <BaseText>
              By accessing this website or by making a booking to verify your
              identity, you consent to Corekyc collecting, using, and disclosing
              Personal Information about you that is provided by you or another
              person as described below.
            </BaseText>
            <BaseText>
              The terms used in this Privacy Policy have the same meanings as in
              our EV User Agreement, (which is accessible via the Service)
              unless otherwise defined in this Privacy Policy.
            </BaseText>
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Collection of Personal Information
          </Heading>

          <Box mb="40px">
            <BaseText>
              The nature of the Service means that individuals being verified
              disclose to Corekyc and our agents (where applicable) personal
              information, such as information contained within identity
              documentation. We only collect Personal Information that is
              necessary (i) for the purposes of the Services, (ii) for the
              performance of a contract for which you are a party, (iii) for
              which you have given consent for such processing of your data, or
              (iv) for compliance with a legal obligation to which we are
              subject.
            </BaseText>
            <BaseText>
              The Personal Information that we collect therefore differs from
              person to person depending on the type of identity documentation
              verified.
            </BaseText>
            <BaseText>
              If you provide us with Personal Information about someone other
              than yourself, you represent that you are authorised to do so and
              agree to inform that person who we are, that we will use and
              disclose that information for the Service and they have the
              ability to access the Personal Information we have about them.
            </BaseText>
            <BaseText>
              The type of Personal Information we collect or which we may hold
              about you may include, but is not limited to:
            </BaseText>

            <BaseList
              data={[
                "Full name",
                "Gender",
                "Date of birth",
                "Address",
                "Phone number",
                "E-mail address",
                "Job Title",
                "Company Name",
                "Payment information",
                "Account holder and number",
                "Username and password",
                "Information on how you use our products and services such as your Internet Protocol (‘IP’) address, server address, domain name, and information on your browsing activity when visiting our Website.",
              ]}
            />

            <BaseText>
              You have no obligation to provide Corekyc with any Personal
              Information that is requested by us. However, due to the nature of
              the Service, if you choose not to provide us with such
              information, we will be unable to provide you with our Service.
            </BaseText>
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            We collect your Personal Information in the following ways:
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "When you request us to act on your behalf or you instruct your agent to act on your behalf via the Website/Application;",
                "When you provide information about a customer service issue;",
                "When you visit our Website",
                "When you connect an account to Corekyc",
              ]}
            />
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Corekyc may disclose your Personal Information to:
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "The reporting agent who you are establishing a relationship or those nominated by you; and ",
                "Government entities and other external data providers that hold your information on you in order to verify that the information provided by you is consistent with the records held by such organisations.",
              ]}
            />
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Using Personal Information
          </Heading>

          <Box mb="40px">
            <BaseText>
              {" "}
              We understand the importance of using your Personal Information in
              a responsible and secure manner. Your Personal Information may
              only be used by Corekyc under the following circumstances:
            </BaseText>
            <BaseList
              data={[
                "to identify you when you register and login to your account; ",
                "the operation and maintenance of your account;",
                "to enable us to operate the Service and provide it to you as requested;",
                "verifying identification documents against their originating official database; ",
                "conveying your Personal Information to your nominated agent who will be relying on your verified identification (e.g., solicitor, bank etc.) for legal purposes; ",
                "payment processing; ",
                "dealing with requests, enquiries, complaints, and other customer services; ",
                "to analyse the Website and information about Users, including research into our user demographics and user behaviour in order to improve our content and Service; ",
                "to contact you about your account and provide customer service support, including responding to your comments and questions; ",
                "to share aggregate (non-identifiable) statistics of Users of the Service to prospective advertisers and partners; ",
                "to keep you informed about the Service, features, and offers we think you may find useful or which you have requested from us;",
                "to sell or market Corekyc products and services to you; ",
                "to comply with any legal, government, or regulatory obligation; ",
                "interacting with organisations that Corekyc has a business relationship with for the purpose of enabling the performance of the Service or other services you expressly require; ",
                "to better understand your needs and the needs of users in the aggregate, diagnose problems, analyse trends, improve the features and usability of the Service, and better understand and market to our customers and Users; and ",
                "to keep the Service safe and secure.",
              ]}
            />

            <BaseText>
              In using our Service you authorise Corekyc to pass on any Personal
              Information that you provide us to the reporting entity who is
              using or referred you to use the Service.
            </BaseText>

            <BaseText>
              We may use your Personal Information for other purposes which are
              directly related to those above that would reasonably be expected
              by you.
            </BaseText>

            <BaseText>
              You will receive marketing messages from us if you have given your
              consent, if you have requested or if you use the Service to access
              products or experiences from us and if you have not opted out of
              receiving marketing messages.
            </BaseText>
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Storage of Personal Information
          </Heading>

          <Box mb="40px">
            <BaseText>
              Corekyc is a New Zealand company with its head-office located in
              Wellington, New Zealand. Your data will be held by Amazon Web
              Services (AWS) by Corekyc.
            </BaseText>
            <BaseText>
              Our clients, who are a business that you are looking to work with,
              for legal purposes under the Anti-Money Laundering and Counter
              Terrorism Finance Act, are required by law to verify you identity
              before they can bring you on as a client. They use Corekyc’s
              Service to collect and verify your identity to comply with the
              legislation. They are also required by law to collect and store
              this information and are audited annually.
            </BaseText>
            <BaseText>
              For the purposes of the General Data Protection Regulation (GDPR),
              New Zealand is considered a country which provides adequate
              protections for Personal Information, as confirmed by the European
              Commission in Commission Decision 2013/65/EU. We will only retain
              your Personal Information for as long as necessary to fulfil the
              purposes we collected it for, including the purposes of satisfying
              any legal, accounting, or statutory reporting requirements.
              Corekyc has appointed a Privacy Officer who can be contacted at{" "}
              <BaseLink>jordan@realyou.co.nz</BaseLink>
            </BaseText>
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Your Rights
          </Heading>

          <Box mb="40px">
            <BaseText>
              As an individual using Corekyc to verify your ID, you are able to
              review your data during the workflow and update any errors that
              might have occurred as the data has been extracted from your ID.
              After this point, you will have no ability to access or review
              your results.
            </BaseText>
            <BaseText>
              If you are a User of Corekyc for verifying the ID of your
              customers, you will have the ability to review and edit your
              personal details in the Account section of your account within the
              Application. If you are a Company Admin, you will have the ability
              to edit your Company information and add and remove new Users. If
              you decide to terminate your account, you will need to email us at
              <BaseLink> support@realyou.co.nz</BaseLink> and we will deactivate
              it. Remember that once your account is closed, you will no longer
              be able to login and access your Personal Information and will not
              be able to review any recent verifications, or generate any new
              ones. You can, however, re-open the account at any time.
            </BaseText>
            <BaseText>
              If you are a User of Corekyc and your account is deleted, all
              personal information will be deleted immediately. If you are a
              Company account and you request to delete your account, your
              account will be deactivated initially and once the final invoice
              has been paid, the account will be deleted and all personal and
              company information will be removed entirely from the system and
              all corresponding verifications.
            </BaseText>
            <BaseText>
              You have the option of changing your marketing preferences at any
              time your account remains open by emailing{" "}
              <BaseLink>support@realyou.co.nz</BaseLink>
            </BaseText>

            <BaseText>
              You have the following rights with regard to your Personal
              Information:
            </BaseText>

            <BaseList
              data={[
                "The right to request access to your Personal Information. This enables you to receive a copy of the Personal Information we hold about you. ",
                "The right to request to correct your Personal Information if it is inaccurate. You may also supplement any incomplete Personal Information we have, taking into account the purposes of the processing.",
                "The right to request deletion of your Personal Information if;",
              ]}
            />

            <Box ml="20px">
              <BaseText>
                - your Personal Information is no longer necessary for the
                purposes for which we collected or processed them; or
                <BaseText>
                  - you withdraw your consent if the processing of your Personal
                  Information is based on consent and no other legal ground
                  exists; or
                </BaseText>
                <BaseText>
                  - you object to the processing of your Personal Information,
                  and we do not have an overriding legitimate ground for
                  processing; or
                </BaseText>
                <BaseText>
                  - your Personal Information is unlawfully processed; or
                </BaseText>
                <BaseText>
                  - your Personal Information has to be deleted for compliance
                  with a legal obligation.{" "}
                </BaseText>
              </BaseText>
            </Box>

            <BaseList
              data={[
                "The right to object to the processing of your Personal Information. We will comply with your request, unless we have a compelling overriding legitimate interest for processing or we need to continue processing your Personal Information to establish, exercise, or defend a legal claim. ",
                "The right to restrict the processing of Personal Information, if: ",
              ]}
            />

            <Box ml="20px">
              <BaseText>
                - The accuracy of your Personal Information is contested by you,
                for the period in which we have to verify the accuracy of the
                Personal Information; or
                <BaseText>
                  - The processing is unlawful and you oppose the deletion of
                  your Personal Information and request restriction; or
                </BaseText>
                <BaseText>
                  - We no longer need your Personal Information for the purposes
                  of processing, but your Personal Information is required by
                  you for legal claims; or
                </BaseText>
                <BaseText>
                  - You have objected to the processing, for the period in which
                  we have to verify overriding legitimate grounds
                </BaseText>
              </BaseText>
            </Box>

            <BaseText>
              You can exercise several of your rights through the personal
              information section of your account. To exercise your other rights
              you can file a request by email to{" "}
              <BaseLink>jordan@realyou.co.nz</BaseLink>
            </BaseText>

            <BaseText>
              We may need to request specific information from you to help us
              confirm your identity and ensure your right to access your
              Personal Information (or to exercise any of your other rights).
              This is a security measure to ensure that Personal Information is
              not disclosed to any person who has no right to receive it. In an
              effort to speed up our response, we may also contact you to ask
              you for further information in relation to your request.
            </BaseText>
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Log Data
          </Heading>

          <Box mb="40px">
            <BaseText>
              Whenever you visit our website <BaseLink>realyou.co.nz</BaseLink>,
              Corekyc collects information that your browser sends to us that is
              called Log Data. This Log Data may include information such as
              your computer’s Internet Protocol (IP) address, browser version,
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, and other statistics. No log
              data is collected on the Application{" "}
              <BaseLink>app.realyou.co.nz</BaseLink>
            </BaseText>
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Cookies
          </Heading>

          <Box mb="40px">
            <BaseText>
              Cookies are files with small amounts of data that is commonly used
              as an anonymous unique identifier. These are sent to your browser
              from the Website and are stored on your device’s hard drive.
            </BaseText>
            <BaseText>
              Our Website <BaseLink>https://realyou.co.nz</BaseLink> uses these
              “cookies” to collect information and to improve our Service for
              users (for example, to temporarily remember your session in order
              to not ask you to fill this information again each time you visit
              the Website or go to one page to another). Some other cookies are
              used to generate statistics or to remember your preferences.
            </BaseText>
            <BaseText>
              You have the option to either accept or refuse these cookies and
              know when a cookie is being sent to your computer. If you choose
              to refuse our cookies, you may not be able to use some parts of
              our Service.
            </BaseText>
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Service Providers
          </Heading>

          <Box mb="40px">
            <BaseText>
              We may employ third-party companies and individuals due to the
              following reasons:
            </BaseText>
            <BaseList
              data={[
                "To facilitate our Service; ",
                "To provide the Service on our behalf; ",
                "To perform Service-related services; or ",
                "To assist us in analysing how our Service is used.",
              ]}
            />
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Security
          </Heading>

          <Box mb="40px">
            <BaseText>
              The security of your Personal Information is imperative. We
              endeavour to employ best practice standards to ensure unauthorised
              access and disclosure of your information does not occur. Corekyc
              uses a highly secure GCP cloud service to protect your data. GCP
              provides encryption in transit with SSL across all services.
            </BaseText>
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Links to Other Sites
          </Heading>

          <Box mb="40px">
            <BaseText>
              Our Service may contain links to other websites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over, and assume no responsibility
              for the content, privacy policies, or practices of any third-party
              sites or services.{" "}
            </BaseText>
          </Box>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Contact Us
          </Heading>

          <Box mb="40px">
            <BaseText>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact our Privacy Officer at
              <BaseLink> jordan@realyou.co.nz</BaseLink>. Additionally under the Australian Privacy
              Principles if you feel that your data has been breached, you can
              contact OIAC on 1300 363 992 or at enquiries@oaic.gov.au,AmazThe
              Privacy Act 2020 (NZ) Account holder and number.
            </BaseText>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default PrivatePolicy;
