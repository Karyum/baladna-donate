import "./App.scss"
import { useState } from "react"
import headerImage from "./assets/header-title.png"
import footerLogo from "./assets/footer-logo.png"
import logo from "./assets/logo.jpeg"
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import twitter from "./assets/twitter.png"
import { IntlProvider, FormattedMessage } from "react-intl"
import messages from "./translations"

function App() {
  const [language, setLanguage] = useState("ar")
  const isRtl = language === "ar"

  return (
    <IntlProvider
      locale={language}
      messages={messages[language]}
      defaultLocale="en"
    >
      <div className="App" style={{ direction: isRtl ? "rtl" : "ltr" }}>
        <div className="header">
          <button
            onClick={() => setLanguage(isRtl ? "en" : "ar")}
            className="language-button"
          >
            {isRtl ? "EN" : "AR"}
          </button>

          <img src={headerImage} className="header-img" alt="" />

          <FormattedMessage id="title">
            {(text) => <h1 className="title">{text}</h1>}
          </FormattedMessage>

          <FormattedMessage id="donateNow">
            {(text) => <button className="donateNow">{text}</button>}
          </FormattedMessage>

          <FormattedMessage id="joinCampaign">
            {(text) => <button className="joinCampaign">{text}</button>}
          </FormattedMessage>

          <div className="goal-container">
            <div className="goal-numbers-container">
              <div className="goal">
                <FormattedMessage id="reachedGoalTitle">
                  {(text) => <h2 className="goal-title">{text}</h2>}
                </FormattedMessage>

                <h2 className="goal-amount">123,563</h2>

                <FormattedMessage id="currency">
                  {(text) => <h2 className="currency">{text}</h2>}
                </FormattedMessage>
              </div>
              <div className="white-separator"></div>
              <div className="goal">
                <FormattedMessage id="mainGoalTitle">
                  {(text) => <h2 className="goal-title">{text}</h2>}
                </FormattedMessage>

                <h2 className="goal-amount">1,000,000</h2>

                <FormattedMessage id="currency">
                  {(text) => <h2 className="currency">{text}</h2>}
                </FormattedMessage>
              </div>
            </div>
          </div>

          <div className="progress-bar">
            <span className="bar">
              <span className="progress"></span>
            </span>
          </div>

          <div className="progress-bar-goal">
            <h2 className="amount">1,000,000</h2>

            <FormattedMessage id="currency">
              {(text) => <h2 className="currency">{text}</h2>}
            </FormattedMessage>
          </div>

          <FormattedMessage id="headerLastTitle">
            {(text) => <h2 className="header-last-title">{text}</h2>}
          </FormattedMessage>

          <div className="hor-separate"></div>
        </div>

        <div className="description">
          <div className="desc-slash"></div>

          <FormattedMessage id="descriptionTextMain">
            {(text) => <p className="descriptionTextMain">{text}</p>}
          </FormattedMessage>

          <FormattedMessage id="descriptionTextSub">
            {(text) => <p className="descriptionTextSub">{text}</p>}
          </FormattedMessage>

          <div className="desc-slash"></div>
        </div>

        <div className="campaign-goals">
          <FormattedMessage id="campaignGoalsTitle">
            {(text) => <p className="campaignGoalsTitle">{text}</p>}
          </FormattedMessage>

          <FormattedMessage id="campaignGoalsText1">
            {(text) => <p className="campaignGoalsText1">{text}</p>}
          </FormattedMessage>

          <FormattedMessage id="campaignGoalsText2">
            {(text) => <p className="campaignGoalsText2">{text}</p>}
          </FormattedMessage>

          <div className="absolute-percent">
            <span className="num">1</span>
            <span className="slash"></span>
            <span className="num">2</span>
          </div>
        </div>

        <div className="aboutus-container">
          <FormattedMessage id="aboutusTitle">
            {(text) => <p className="aboutusTitle">{text}</p>}
          </FormattedMessage>

          <div className="question-mark">?</div>

          <FormattedMessage id="aboutusText1">
            {(text) => <p className="aboutusText1">{text}</p>}
          </FormattedMessage>

          <FormattedMessage id="aboutusText2">
            {(text) => <p className="aboutusText2">{text}</p>}
          </FormattedMessage>
        </div>

        <div className="approach">
          <div className="approach-header">
            <div className="line"></div>
            <FormattedMessage id="approachTitle">
              {(text) => <h1 className="approachTitle">{text}</h1>}
            </FormattedMessage>
            <div className="line"></div>
          </div>
          <FormattedMessage id="approachText1">
            {(text) => <p className="approachText1 text">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="approachText2">
            {(text) => <p className="approachText2 text">{text}</p>}
          </FormattedMessage>
          <br />
          <FormattedMessage id="approachText3">
            {(text) => <p className="approachText3 text">{text}</p>}
          </FormattedMessage>
          <br />
          <FormattedMessage id="approachText4">
            {(text) => <p className="approachText4 text">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="subTitle1">
            {(text) => <p className="subTitle1 subtitle">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="approachText5">
            {(text) => <p className="approachText5 text">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="subTitle2">
            {(text) => <p className="subTitle2 subtitle">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="subTitle2Option1">
            {(text) => (
              <p
                className="subTitle2Option1 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle2Option2">
            {(text) => (
              <p
                className="subTitle2Option2 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <FormattedMessage id="subTitle3">
            {(text) => <p className="subTitle3 subtitle">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="subTitle3Option1">
            {(text) => <p className="subTitle3Option1 text">{text}</p>}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle3Option2">
            {(text) => (
              <p
                className="subTitle3Option2 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle3Option3">
            {(text) => (
              <p
                className="subTitle3Option3 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4">
            {(text) => <p className="subTitle4 subtitle">{text}</p>}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4Option1">
            {(text) => <p className="subTitle4Option1 text">{text}</p>}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4Option2">
            {(text) => (
              <p
                className="subTitle4Option2 text"
                style={{ marginRight: "35px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4Option3">
            {(text) => (
              <p
                className="subTitle4Option3 text"
                style={{ marginRight: "35px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4Option4">
            {(text) => (
              <p
                className="subTitle4Option4 text"
                style={{ marginRight: "35px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4Option5">
            {(text) => <p className="subTitle4Option5 text">{text}</p>}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4Option6">
            {(text) => (
              <p
                className="subTitle4Option6 text"
                style={{ marginRight: "35px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4Option7">
            {(text) => (
              <p
                className="subTitle4Option7 text"
                style={{ marginRight: "55px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4Option8">
            {(text) => (
              <p
                className="subTitle4Option8 text"
                style={{ marginRight: "55px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle4Option9">
            {(text) => <p className="subTitle4Option9 text">{text}</p>}
          </FormattedMessage>

          <br />
          <FormattedMessage id="subTitle5">
            {(text) => <p className="subTitle5 subtitle">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="subTitle5Text">
            {(text) => <p className="subTitle5Text text">{text}</p>}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle6">
            {(text) => <p className="subTitle6 subtitle">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="subTitle6Option1">
            {(text) => (
              <p
                className="subTitle6Option1 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle6Option2">
            {(text) => (
              <p
                className="subTitle6Option2 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle6Option3">
            {(text) => (
              <p
                className="subTitle6Option3 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle6Option4">
            {(text) => (
              <p
                className="subTitle6Option4 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle6Option5">
            {(text) => (
              <p
                className="subTitle6Option5 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle6Option6">
            {(text) => (
              <p
                className="subTitle6Option6 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>

          <br />
          <FormattedMessage id="subTitle7">
            {(text) => <p className="subTitle7 subtitle">{text}</p>}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle7Option2">
            {(text) => (
              <p
                className="subTitle7Option2 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle7Option3">
            {(text) => (
              <p
                className="subTitle7Option3 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle8">
            {(text) => <p className="subTitle8 subtitle">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="subTitle8Option1">
            {(text) => (
              <p
                className="subTitle8Option1 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle8Option2">
            {(text) => (
              <p
                className="subTitle8Option2 text"
                style={{ marginRight: "25px" }}
              >
                {text}
              </p>
            )}
          </FormattedMessage>

          <br />
          <FormattedMessage id="subTitle8Option3">
            {(text) => (
              <li
                className="subTitle8Option3 text"
                style={{ marginRight: "40px" }}
              >
                {text}
              </li>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle8Option4">
            {(text) => (
              <li
                className="subTitle8Option4 text"
                style={{ marginRight: "40px" }}
              >
                {text}
              </li>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle8Option5">
            {(text) => (
              <li
                className="subTitle8Option5 text"
                style={{ marginRight: "40px" }}
              >
                {text}
              </li>
            )}
          </FormattedMessage>
          <br />
          <FormattedMessage id="subTitle9">
            {(text) => <p className="subTitle9 subtitle">{text}</p>}
          </FormattedMessage>
          <FormattedMessage id="subTitle9Text">
            {(text) => <p className="subTitle9Text text">{text}</p>}
          </FormattedMessage>
          <br />
          <br />
          <br />
        </div>

        <div className="footer">
          <FormattedMessage id="footerTitle">
            {(text) => <p className="footerTitle">{text}</p>}
          </FormattedMessage>

          <FormattedMessage id="footerMessageSend">
            {(text) => <button className="footerMessageSend">{text}</button>}
          </FormattedMessage>

          <div className="social-container">
            <FormattedMessage id="socialContainerTitle">
              {(text) => <h1 className="social-container-title">{text}</h1>}
            </FormattedMessage>

            <div className="media-icons">
              <img src={twitter} className="icon" alt="" />
              <img src={instagram} className="icon" alt="" />
              <img src={facebook} className="icon" alt="" />
            </div>
          </div>

          <div className="bottom-footer">
            <img src={logo} className="img" alt="" />
            <img src={footerLogo} className="img" alt="" />
          </div>
        </div>
      </div>
    </IntlProvider>
  )
}

export default App
