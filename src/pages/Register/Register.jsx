import React from "react";
import styled from "styled-components";
import Footer from "../../components/Layout/Footer";

function Register(props) {
  return (
    <>
    <Wrapper>
      <Logo>
        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"alt="Logo" />
        <CompanyName>Musicart</CompanyName>
      </Logo>
      <Form>
        <Section>
          <SectionTitle>Create Account</SectionTitle>
          <Field>
            <FieldName>Your name</FieldName>
            <Input />
          </Field>
          <Field>
            <FieldName>Mobile number</FieldName>
            <Input />
          </Field>
          <Field>
            <FieldName>Email Id</FieldName>
            <Input />
          </Field>
          <Field>
            <FieldName>Password</FieldName>
            <Input type='password'/>
            <Note>
              By enrolling your mobile phone number, you consent to receive
              automated security notifications via text message from Musicart.
              Message and data rates may apply.
            </Note>
          </Field>
          <SubmitButton>Continue</SubmitButton>
          <Disclaimer>
            By continuing, you agree to Musicart privacy notice and conditions
            of use.
          </Disclaimer>
        </Section>
        <SignInLink>
          Already have an account? <Span href='/signin'>Sign in</Span>
        </SignInLink>
      </Form>
    </Wrapper>
    <Footer/>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height:92vh;
`;

const Logo = styled.div`
  align-self: center;
  display: flex;
  margin: 15px;
  gap: 8px;
  padding: 0 15px;
  img{
    heigth:5vh;
    width:5vh;
  }
`;

const CompanyName = styled.div`
  color: #2e0052;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 600 44px Roboto, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Form = styled.div`
  border-radius: 23.201px;
  border: 3px solid #d9d9d9;
  background-color: #fff;
  display: flex;
  align-self: center;
  width: 38%;
  height:75vh;
  flex-direction: column;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height:100%;
    width: 100%;
`;

const SectionTitle = styled.div`
  color: #000;
  font: 500 6vh Roboto, sans-serif;
  padding-top: 10px;
  @media (max-width: 480px) {
    max-width: 100%;
    font-size: 20px;
  }
`;

const Field = styled.div`
  color: #000;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font: 900 2.5vh Roboto, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FieldName = styled.div`
`;

const Input = styled.input`
  border-radius: 8px;
  border: 2px solid #b6b6b6;
  background-color: #fff;
  display: flex;
  margin-top: 10px;
  height: 5vh;
  width:70%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
    background-color: white;
    background-position: 10px 10px;
    font-size:2.25vh;
    padding:0 1.5vh;
`;

const Note = styled.div`
  color: #000;
  font: 700 2vh Roboto, sans-serif;
  margin-top: 10px;
  padding:1.5vh;
  width:85%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SubmitButton = styled.div`
  color: #fff;
  white-space: nowrap;
  border-radius: 8px;
  background-color: #2e0052;
  justify-content: center;
  align-items: center;
  padding: 1vw 4vw;
  font: 500 27px Roboto, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding: 0 20px;
  }
  &:hover {
    background-color: #2e0052;
    opacity:.7;
  }
`;

const Disclaimer = styled.div`
  color: #000;
  margin: 2%;
  font: 400 18px/26px Roboto, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SignInLink = styled.div`
  color: #000;
  align-self: center;
  margin: 2vh;
  white-space: nowrap;
  font: 500 25px/32px Roboto, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Span = styled.a`
  font-weight: 400;
  text-decoration: underline;
  color:inherit;
`;

export default Register;