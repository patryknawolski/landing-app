import React, { useState } from "react";
import Image from "next/image";
import { COLORS } from "constants/colors";
import { Formik } from "formik";

import {
  Box,
  SimpleGrid,
  Text,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

interface Props {
  image: string | StaticImageData;
  title: string;
  text: string;
  isPep: boolean | null;
}

interface MyFormValues {
  email: string;
}

const Banner: React.FC<Props> = ({ image, title, text, isPep }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const validate = (values: MyFormValues) => {
    const errors: any = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const initialValues: MyFormValues = { email: "" };

  return (
    <Box
      display="inline-flex"
      paddingTop="154px"
      paddingBottom="100px"
      w="100%"
      position="relative"
      overflow="hidden"
      background={`url('/images/banner-common.webp') no-repeat bottom center`}
      backgroundSize="cover"
      minHeight={{ base: "auto", xl: "875px" }}
    >
      <Box
        padding={{ base: "0 25px", lg: "0" }}
        maxW="1440px"
        margin="0 auto"
        w="100%"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          h="100%"
          overflow="unset"
        >
          <Box
            h="100%"
            display={{ base: "inline-block", md: "inline-flex" }}
            alignItems="center"
            color="#fff"
            w="100%"
            paddingLeft={{ base: "0", lg: "30px", xl: "146px" }}
            margin="0 auto"
          >
            <Box
              textAlign={{ base: "center", md: "left" }}
              marginBottom={{ base: "40px", md: "0" }}
            >
              <Heading
                as="h3"
                fontSize={{ base: "33px", md: "60px" }}
                lineHeight={{ base: "42px", md: "75px" }}
              >
                {title}
              </Heading>
              <Text
                maxW="460px"
                fontStyle="normal"
                fontWeight="normal"
                fontSize={{ base: "16px", md: "20px" }}
                lineHeight={{ base: "26px", md: "32px" }}
                margin={{ base: "20px auto 25px", md: "20px 0 25px" }}
              >
                {text}
              </Text>
              <Button
                color={COLORS.primary}
                variant="solid"
                onClick={handleToggle}
              >
                Download Sample Report
              </Button>
            </Box>
          </Box>

          <Box
            w="100%"
            h="100%"
            display="inline-flex"
            alignItems="center"
            justifyContent="flex-end"
            // maxW='643px'
          >
            {isPep ? (
              <Box
                display="inline-flex"
                alignItems="center"
                justifyContent="flex-end"
                position={{ base: "relative", xl: "absolute" }}
                // right={{ base: "auto", md: "-30px", lg: "-74px", xl: "0" }}
                right="0"
                marginRight={{ base: "0", md: "-30px", xl: 0 }}
              >
                <Image alt="" src={image} priority />
              </Box>
            ) : (
              <Box maxW="640px">
                <Image alt="" src={image} priority />
              </Box>
            )}
          </Box>
        </SimpleGrid>
      </Box>

      <Modal isOpen={open} onClose={handleToggle} isCentered>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton
            _hover={{
              border: "none",
              outline: "none",
              bg: "none",
            }}
            _focus={{
              border: "none",
              outline: "none",
              bg: "none",
            }}
          />
          <ModalBody p="55px 30px">
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={(values, actions) => {
                console.log({ values, actions });
                actions.setSubmitting(false);
                actions.resetForm();
                handleToggle();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Heading
                      as="h3"
                      fontFamily="Inter"
                      fontSize="25px"
                      lineHeight="31px"
                      fontWeight="600"
                      color="#110F24"
                      mb="25px"
                    >
                      Please enter your email
                    </Heading>

                    <FormControl
                      isInvalid={errors.email && touched.email ? true : false}
                    >
                      <FormLabel
                        htmlFor="email"
                        color="#8185A0"
                        fontFamily="Inter"
                        fontSize="14px"
                        lineHeight="21px"
                      >
                        Email address
                      </FormLabel>
                      <Input
                        name="email"
                        type="email"
                        borderRadius="10px"
                        height="50px"
                        fontSize={{ base: "14px", md: "16px" }}
                        // color="#D9DBF9"
                        border="1px solid rgba(255, 255, 255, 0.35)"
                        _placeholder={{ color: "#D9DBF9" }}
                        _focus={{
                          outline: "1px solid white",
                          outlineOffset: 0,
                        }}
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && touched.email && (
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      )}
                    </FormControl>

                    <Button
                      colorScheme="#4959E7"
                      variant="contained"
                      bg="#4959E7"
                      color="#fff"
                      borderRadius="10px"
                      h="50px"
                      w="100%"
                      mt="35px"
                      fontFamily="Inter"
                      fontSize="16px"
                      lineHeight="24px"
                      fontWeight="600"
                      isLoading={isSubmitting}
                      type="submit"
                      _hover={{
                        bg: "#4959E7",
                        color: "#fff",
                        opacity: 0.7,
                      }}
                    >
                      Download Sample Report
                    </Button>
                  </form>
                );
              }}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Banner;
