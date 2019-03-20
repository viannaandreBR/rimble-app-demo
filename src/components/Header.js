import React from "react";
import { Box, Flex, Button, Heading } from "rimble-ui";
import NetworkOverview from "../utilities/components/NetworkOverview";

class Header extends React.Component {
  render() {
    return (
      <Box>
        <Flex alignItems={"center"} justifyContent="flex-end" bg={"white"}>
          <Box mr={4}>
            <NetworkOverview network={this.props.network.current} />
          </Box>
          
          <Button
            m={3}
            onClick={this.props.connectAndValidateAccount}
            size="small"
            backgroundColor={"white"}
          >
            Connect
          </Button>
        </Flex>
        <Box bg="primary" p={3} justifyContent="center" flexDirection="column">
          <Box width="400px" mx="auto">
            <Heading.h2 color={"white"}>Rimble App Demo</Heading.h2>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Header;
