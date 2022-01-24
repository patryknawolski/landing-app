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

const TermsAndConditions: NextPage = () => {
  return (
    <Layout title="Private Policy" isStarted={false}>
      <Box
        w="100%"
        h={{base: '79px', md: '110px'}}
        display="flex"
        background="linear-gradient(179deg, rgba(71,118,230,1) 0%, rgba(142,84,233,1) 100%)"
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
            Terms and Conditions
          </Heading>

          <Heading
            as="h3"
            fontSize={{ base: "20px", md: "25px" }}
            lineHeight={{ base: "25px", md: "31px" }}
            fontWeight="700"
            color="#110F24"
            marginBottom={{ base: "15px", md: "30px" }}
          >
            Realyou EIV User Agreement
          </Heading>

          <Box mb="40px">
            <BaseText>
              Realyou Ltd provides you with access to electronic identification
              verification services (EIV Services) on registration. In order to
              create an account and use the EIV Services, the Applicant (User)
              must accept this verification user agreement (Agreement).
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
            Background
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "Realyou provides electronic identification verification to enable Users to verify the identity of their customers.",
                "The User requires that Realyou provides the EIV Services as the User’s agent, in order to verify the identity of the Applicant.",
                "Realyou agrees to providing the EIV Services, subject to the terms of this Agreement.",
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
            <BaseList
              data={[
                "This Agreement begins on the Commencement Date, and continues until either Realyou or the User terminates upon one days’ written notice (Term).",
                "During the Term, the User appoints Realyou as its agent in order to provide EIV Services.",
                "The User instructs Realyou to deliver the EIV Services in accordance with the terms of this Agreement.",
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
            EIV Services
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "Realyou operates app.realyou.co.nz (web application), which provides Users with the ability to create an account to consume its EIV Services.",
                "When the User wants to complete an EIV Transaction, they simply enter the name and email for the Applicant into their Realyou dashboard. This will trigger an email to be sent to the Applicant with instructions to complete the web-based EIV check. This includes an explicit checkbox for how the consumer data is used.",
                "The email link will be valid for as long until the EIV check is completed by the Applicant. The EIV check will be pending within the User Dashboard until the EIV check has been completed by the Applicant.",
                "Realyou notifies the User and consumer via email when an EIV check is completed.",
                "On completion of the EIV check, Realyou will provide a completed EIV Report in relation to the details of the Applicant, which will be available for review and download via PDF for stored 7+ years, upon which you will be notified before it will be deleted.",
                "The User will have the ability to review the EIV Check History within their Dashboard. This will include EIV Result (including PEPs and Sanctions).",
                "It is up to the User’s own internal policies to determine what levels of overwrite are appropriate to be compliant.",
                "The User’s Applicant authorises their mobile carrier to disclose their mobile account details for the purpose of verifying your identity. Those details may include your name, address, and device details.",
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
            User Obligations
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "After reviewing the EIV Report, the User ensures they are reasonably satisfied that all information provided to the User has been properly verified in accordance with the EIV Identification Rules.",
                "The User is responsible for the accuracy of all the information that it provides to Realyou in connection with the EIV Services.",
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
            EIV Fee
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "The User must pay the EIV check fee to Realyou at the rate specified when the Account is approved is made. This fee will depend on the ID Type that is used for the EIV Transaction.",
                "EIV checks will be charged by Realyou immediately after a check is run.",
                "EIV check will be charged for both a PASS or FAIL results.",
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
            Warranties
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "Realyou warrants that it will provide the EIV Services with due care and skill in accordance with this Agreement.",
                "Realyou does not guarantee that the successful completion of an EIV Transaction eliminates the possibility of identity fraud.",
                "The User acknowledges that the EIV Services provided by Realyou are not intended to decisively prove the identity of an EIV Applicant and should be reviewed before being approved.",
                "Realyou does not warrant that the use of the Website will be uninterrupted or error free.",
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
            Liability
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "Notwithstanding any other term of this Agreement, the User agrees, to the extent permitted by law, that Realyou has no liability to the User, as a result of a breach of this Agreement, for any indirect, consequential, special or exemplary losses, damages, costs and/or expenses including any loss or revenue, loss of goodwill, loss of data or loss of opportunity and even if such losses, damages, costs and/or expenses were reasonably foreseeable by Realyou.",
                "Realyou’s liability to the User under or in connection with this Agreement will be reduced proportionately by the extent to which acts or omissions of the User or any of its officers, employees, contractors or representatives caused or contributed to the relevant loss or damage suffered or incurred by the User.",
                "The User acknowledges that the EIV Services provided by Realyou are not intended to decisively prove the identity of an EIV applicant and should be reviewed before being approved.",
                "Notwithstanding any other term of this Agreement and to the extent permitted by law, the liability of Realyou to the User for all causes of action arising under, or in connection with this Agreement shall not exceed an amount equal to Realyou’s professional indemnity insurance requirements of $5,000,000.",
                "To the extent permitted by law, Realyou excludes all statutory or implied representations, conditions, warranties, and terms relating to the EIV Services or this Agreement. Realyou does not exclude any such representations, conditions, warranties or terms to the extent it is prohibited by law from doing so (including under New Zealand Consumer Law).",
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
            Variation
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "Realyou may vary this Agreement by posting a notification of any such variation on the Website or via email. Continued use of the EIV Services by a User following a notification of any variation will constitute a User’s acceptance of such a variation.",
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
            General
          </Heading>

          <Box mb="40px">
            <BaseList
              data={[
                "If any term of this Agreement is held to be invalid or unenforceable, the remaining terms of this Agreement will remain in full force and effect.",
                "Any failure by a party to enforce any clause of this Agreement, or any forbearance, delay or indulgence granted by that party to any other party will not be construed as a waiver of the first party’s rights under this Agreement.",
                "Neither party may assign or transfer any of its rights, obligations, or privileges that it has under this Agreement without the prior written consent of the other party.",
                "Because Realyou acts as an agent on behalf of the User for the purposes of carrying out the EIV services, Realyou has no authority to:",
              ]}
            />

            <Box ml="30px">
              <BaseText>
                - Assume any obligation or liability, whether express or
                implied, in the name of or otherwise on behalf of the User; or
              </BaseText>
              <BaseText>
                - Enter into any contract, arrangement, or other commitment or
                incur any obligation on behalf of the User.
              </BaseText>
            </Box>

            <BaseList
              data={[
                "The parties agree that where either party is prevented from fulfilling certain obligations due to the occurrence of an act, event or circumstance that is beyond the reasonable control of that party, and includes but is not limited to, fire, flood, earthquake, storm, explosion, warfare, invasion, rebellion, sabotage, epidemic, that obligation will be suspended for the duration of the period during which this party is prevented.",
                "This Agreement constitutes the entire agreement, understanding, and arrangement amongst the parties in respect of the matters contained in this Agreement, to the exclusion of all other agreements, arrangements, understandings or representations, whether express or implied, and therefore supersedes any prior agreements, arrangements, understandings, and representations between the parties in respect of such matters of any nature whatsoever.",
                "This Agreement will be governed by, and construed in accordance with, the laws of New Zealand, and the parties hereby submit to the exclusive jurisdiction of the courts of New Zealand.",
              ]}
            />

            <BaseText>
              In this Agreement (including the Background), unless the context
              requires otherwise:
            </BaseText>

            <UnorderedList>
              <ListItem>
                <BaseText>
                  <strong>Agreement</strong> means the General Terms and
                  includes any appendices and/or schedules attached to this
                  Agreement.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  <strong>Business Day</strong> means a day that is not a
                  Saturday, Sunday, or public holiday in New Zealand.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  <strong>Commencement Date</strong> means the date on which
                  the User has officially become registered for the EIV
                  Services.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  <strong>EIV Applicant</strong> means the individual that is
                  seeking to have their identity verified by the User.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  <strong>EIV Fee</strong> means the fee charged by Realyou
                  for executing the EIV Service in accordance with a EIV
                  Transaction.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  <strong>EIV Report</strong> means a report containing copies
                  of the identity check sought by the EIV Applicant.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  <strong>EIV Service</strong> means EIV of an Applicant in
                  accordance with this Agreement.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  <strong>EIV Transaction</strong> means a successful request
                  for the EIV Services made on behalf of the EIV Applicant.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  <strong>Personal Information</strong> means information
                  about an identifiable individual in accordance with the
                  Privacy Act 1993.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  <strong>User</strong> means the person or organisation that
                  has applied for an account with Realyou to be able to verify
                  the identity of their customers to comply with AML/CFT
                  Regulation
                </BaseText>
              </ListItem>
              <BaseText>
                In this Agreement, unless the context otherwise requires:
              </BaseText>
              <ListItem>
                <BaseText>
                  The term “including” means “including without limitation”.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  References to any party mean a party to this Agreement and
                  include the successors, executors, administrators and
                  permitted assignees (as the case may be) of that party.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  Expressions defined in the main body of this Agreement have
                  the defined meaning in the whole of the Agreement, including
                  the Background.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  Reference to a statute or regulation will include all
                  amendments and re-enactments thereof and any subordinate
                  legislation made thereunder.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  Any obligation not to do anything will be deemed to include
                  an obligation not to suffer, permit or cause that thing to be
                  done.
                </BaseText>
              </ListItem>
              <ListItem>
                <BaseText>
                  The terms written and in writing include any means of
                  reproducing words, figures or symbols in a tangible and
                  visible form, including email.
                </BaseText>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default TermsAndConditions;
