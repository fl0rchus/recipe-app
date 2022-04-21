import Link from "next/link";
import { Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", marginTop: 40 }}>
      <Text size={14} color="gray" css={{ margin: "10px 0px" }}>
        Developed by <Link href="https://github.com/fl0rchus">Fl0rchus</Link>
      </Text>
    </footer>
  );
};

export default Footer;
