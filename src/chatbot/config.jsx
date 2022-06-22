import { getUserData } from "../utils";
import MonitoAvatar from "./MonitoAvatar";
import { createChatBotMessage } from "react-chatbot-kit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Login from "../components/Login";
import Signup from "../components/Signup";
import Options from "../components/Options";
import BotHeader from "../components/BotHeader";
import AuthOptions from "../components/AuthOptions";
import MonitorNewUrlForm from "../components/MonitorNewUrlForm";

const getInitialMessages = () => {
  let initialMessages = [
    createChatBotMessage(
      `Hi! I'm Monito!\n I help you in monitoring your APIs!`
    ),
  ];

  const userData = getUserData();

  if (userData) {
    initialMessages.push(
      createChatBotMessage(
        `Welcome ${userData.user.first_name}! What would you like to work on?`,
        {
          withAvatar: true,
          delay: 1000,
          widget: "Options",
        }
      )
    );
  } else {
    initialMessages.push(
      createChatBotMessage(`Let's start by creating an account!`, {
        withAvatar: true,
        delay: 1000,
        widget: "AuthOptions",
      })
    );
  }

  return initialMessages;
};

const config = {
  initialMessages: getInitialMessages(),
  botName: "Monito",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1F1B24",
    },
    chatButton: {
      backgroundColor: "#1F1B24",
    },
  },
  widgets: [
    {
      widgetName: "AuthOptions",
      widgetFunc: (props) => <AuthOptions {...props} />,
    },
    {
      widgetName: "Login",
      widgetFunc: (props) => <Login {...props} />,
    },
    {
      widgetName: "Signup",
      widgetFunc: (props) => <Signup {...props} />,
    },
    {
      widgetName: "Options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "MonitorNewUrlForm",
      widgetFunc: (props) => <MonitorNewUrlForm {...props} />,
    },
  ],
  customComponents: {
    botAvatar: (props) => <MonitoAvatar {...props} />,
    userAvatar: (props) => (
      <AccountCircleIcon
        style={{ width: 35, height: 35, marginLeft: 13, marginTop: 3 }}
        {...props}
      />
    ),
    header: () => <BotHeader />,
  },
};

export default config;
