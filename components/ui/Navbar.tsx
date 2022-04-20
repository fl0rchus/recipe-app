/* eslint-disable @next/next/link-passhref */
import NextLink from "next/link";
import { Text, Link } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NextLink href="/">
        <Link>
          <Text
            h4
            weight="bold"
            css={{
              textGradient: "45deg, $yellow500 -20%, $red500 100%",
            }}
          >
            Recipe App
          </Text>
        </Link>
      </NextLink>
    </nav>
  );
};

export default Navbar;
