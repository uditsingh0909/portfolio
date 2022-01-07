import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import ServicesSection from "../Components/ServicesSection";
import ReviewsSection from "../Components/ReviewsSetion";

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;
