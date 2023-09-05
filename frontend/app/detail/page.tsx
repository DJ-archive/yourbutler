"use client";

import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Image from "next/image";
import Img1 from "@/assets/estate1.png";
import { IBM_Plex_Sans_KR } from "next/font/google";
import Chart from "@/components/Chart";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const Detail = () => {
  return (
    <main>
      <AppBar backgroundColor="transparent" color="#334835" />
      <Container className={ibmPlexSansKR.className}>
        <TopDiv>
          <ImgDiv>
            <StyledImg src={Img1} alt="매물사진" />
            <StyledImg src={Img1} alt="매물사진" layout="contain" />
            <StyledImg src={Img1} alt="매물사진" layout="contain" />
            <StyledImg src={Img1} alt="매물사진" layout="contain" />
          </ImgDiv>
        </TopDiv>
        <BottomDiv className={ibmPlexSansKR.className}>
          <LeftDiv>
            <ContainerP>
              <TitleP>송파아이파크 107동 · 중층</TitleP>
              <SubP>서울특별시 송파구 삼전동 93-13</SubP>
            </ContainerP>
            <AboutDiv>
              <AboutP>가격정보</AboutP>
              <AboutEachDiv>
                <AboutDetailDiv>
                  <AboutTitleP>전세</AboutTitleP>
                  <p>7억 5000</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>관리비</AboutTitleP>
                  <p>매월 9만원</p>
                </AboutDetailDiv>
              </AboutEachDiv>
            </AboutDiv>
            <AboutDiv>
              <AboutP>상세정보</AboutP>
              <AboutEachDiv>
                <AboutDetailDiv>
                  <AboutTitleP>방 종류</AboutTitleP>
                  <p>쓰리룸 이상</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>해당층/건물층</AboutTitleP>
                  <p>중/15층</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>전용/공급면적</AboutTitleP>
                  <p>61.32m²/75.61m²</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>방 수/욕실 수</AboutTitleP>
                  <p>3개/2개</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>방향</AboutTitleP>
                  <p>남향</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>건축물용도</AboutTitleP>
                  <p>공동주택</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>사용승인일</AboutTitleP>
                  <p>2023.04.11</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>최초등록일</AboutTitleP>
                  <p>2023.08.14</p>
                </AboutDetailDiv>
              </AboutEachDiv>
            </AboutDiv>
            <AboutDiv>
              <AboutP>중개사</AboutP>
              <AboutEachDiv>
                <AboutDetailDiv>
                  <AboutTitleP>지점명</AboutTitleP>
                  <p>주식회사우대빵부동산중개법인 강서지점</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>대표</AboutTitleP>
                  <p>이은정</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>주소</AboutTitleP>
                  <p>서울특별시 강서구 강서로 243, 2층 201호 202호 203호</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>전화번호</AboutTitleP>
                  <p>02-1661-9539, 010-1234-5667</p>
                </AboutDetailDiv>
              </AboutEachDiv>
            </AboutDiv>
            <AboutDiv>
              <AboutP>시세(현재 + 예상)</AboutP>
              <PriceP>매매 7억 3,000 ~ 17억 4,000</PriceP>
              <SubP>평균 4,866만/3.3㎡</SubP>
            </AboutDiv>
            <Chart />
          </LeftDiv>
          <RightDiv>
            <InfoDiv>
              <InfoDetailDiv>
                <TitleP>현재 자산으로는</TitleP>
                <BlueP>72,738,991원</BlueP>
                <TitleP>더 필요합니다.</TitleP>
              </InfoDetailDiv>
              <LineHr />
              <InfoDetailDiv>
                <TitleP>대출 시 예상되는 월 이자</TitleP>
                <BlueP>4.15%</BlueP>
                <LightPDiv>
                  <LightP>가입 시 입력한 신용도를 기반으로</LightP>
                  <LightP>산정된 예상 이자율 입니다.</LightP>
                </LightPDiv>
              </InfoDetailDiv>
            </InfoDiv>
            <ChatDiv>
              <AskDiv>
                <AskP>집사에게 물어보세요!</AskP>
              </AskDiv>
              <ChatBotDiv>
                <ChatSvg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </ChatSvg>
              </ChatBotDiv>
            </ChatDiv>
          </RightDiv>
        </BottomDiv>
      </Container>
      <Footer />
    </main>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 3rem;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88%;
  gap: 1rem;
`;

const BottomDiv = styled.div`
  display: flex;
  padding: 1rem 5rem;
`;

const LeftDiv = styled.div`
  width: 50%;
`;

const RightDiv = styled.div`
  width: 50%;
`;

const StyledImg = styled(Image)`
  height: 19rem;
  width: 19rem;
  border-radius: 1rem;
  object-fit: cover;
`;

const TitleP = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

const ContainerP = styled.div``;

const SubP = styled.p`
  color: gray;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
`;

const AboutP = styled.p`
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
`;

const AboutEachDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AboutTitleP = styled.p`
  font-weight: 600;
  color: gray;
`;

const AboutDetailDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  border-bottom: solid 1px lightgray;
  padding: 0.7rem 0;
`;

const PriceP = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  height: 16rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const BlueP = styled.p`
  color: #436fe9;
  font-weight: 600;
  font-size: 1.8rem;
`;

const InfoDetailDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const LightP = styled.p`
  color: lightgray;
  font-weight: 600;
  font-size: 0.8rem;
`;

const LightPDiv = styled.div`
  text-align: center;
  line-height: 1.2rem;
`;

const LineHr = styled.hr`
  border: solid 1px #f6f6f6;
`;

const ChatBotDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 5rem;
  background-color: #ffc436;
  cursor: pointer;
`;

const ChatSvg = styled.svg`
  height: 2rem;
  width: 2rem;
`;

const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 0.6rem;
`;

const AskP = styled.p``;

const AskDiv = styled.div`
  border: solid 3px #ffc436;
  border-radius: 2rem 2rem 0 2rem;
  padding: 1.2rem;
  width: 9.8rem;
`;

export default Detail;
