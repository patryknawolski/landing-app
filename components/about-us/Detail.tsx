import type { NextPage } from "next";

import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";

const Detail: NextPage = () => {
  return (
    <Box
      w="100%"
      padding={{ base: "90px 25px", md: "60px 24px", xl: "150px 114px" }}
      maxW="1440px"
      margin="0 auto"
    >
      <Box>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="40px">
          <Box w="100%">
            <Text
              maxW={{ base: "100%", md: "493px" }}
              marginLeft={{ base: 0, lg: "30px" }}
              color="#110F24"
              fontSize={{ base: "22px", md: "30px" }}
              lineHeight={{ base: "34px", md: "46px" }}
              fontWeight="500"
            >
              Here we can highlight some information.{" "}
              <Heading
                as="span"
                fontSize={{ base: "22px", md: "30px" }}
                lineHeight={{ base: "34px", md: "46px" }}
                color="#4959E7"
                fontWeight="normal"
              >
                Here we can highlight some information.
              </Heading>
            </Text>
          </Box>

          <Box>
            <Text
              color="#6C6B74"
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "22px", md: "28px" }}
              marginBottom="15px"
            >
              Condimentum urna blandit dignissim posuere lacus, mattis viverra
              diam. Rutrum turpis dignissim fames amet, mi malesuada. Ipsum,
              netus semper mauris ut urna rhoncus faucibus non. Tincidunt turpis
              lobortis porttitor fermentum ullamcorper sapien volutpat blandit
              tincidunt. Id quisque dui.
            </Text>
            <Text
              color="#6C6B74"
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "22px", md: "28px" }}
              marginBottom="15px"
            >
              Risus libero enim amet enim, felis porttitor purus. Lorem diam
              suscipit quam ultrices consequat. Purus vestibulum accumsan,
              aenean erat vel id convallis.
            </Text>
            <Text
              color="#6C6B74"
              fontSize={{ base: "14px", md: "18px" }}
              lineHeight={{ base: "22px", md: "28px" }}
              marginBottom="15px"
            >
              Tincidunt volutpat suscipit dui odio. Maecenas aenean enim enim
              purus vitae non pellentesque.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Detail;
