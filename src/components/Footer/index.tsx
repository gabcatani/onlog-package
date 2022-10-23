import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contato")}</Language>
              <a href="https://api.whatsapp.com/send?phone=55498406">Envie seu feedback</a>
              <Para>
              <a href="https://api.whatsapp.com/send?phone=55498406">Dúvidas?</a> <br/>
              <a href="https://api.whatsapp.com/send?phone=55498406">Entre em contato</a>
              </Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t("Endereço")}</Language>
              <Para>R. Oiapoc, 211</Para>
              <Para>Agostini, São Miguel do Oeste - SC</Para>
              <Para>89900-000</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={8} md={8} sm={12} xs={12}>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
