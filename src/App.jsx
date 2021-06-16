import logo from "./logo.svg"
import "./App.scss"
import { useState } from "react"
import headerImage from "./assets/header-title.png"
import { IntlProvider, FormattedMessage } from "react-intl"
import messages from "./translations"

function App() {
  const [language, setLanguage] = useState("ar")
  const isRtl = language === "ar"

  console.log("Built by @Karyum")

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
      </div>
    </IntlProvider>
  )
}

export default App
