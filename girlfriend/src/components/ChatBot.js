import { Box, Button } from "@mui/material";
import { OpenAI } from "langchain/llms/openai";
import { BufferWindowMemory } from "langchain/memory";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import sendIcon from "../assets/sendIcon.png";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";


const ChatBot = ({ user, isLoggedIn }) => {
  // const { isLoggedIn, user, setUser } = useAuth();
  const [totalmins, setTotalmins] = useState('');
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const chatboxRef = useRef(null);
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleButtonClick(); // Call the function to handle the button click event
    }
  };
  const getUser = () => {
    if (isLoggedIn) {
      const userid = user?.email;
      axios
        .post(`${process.env.REACT_APP_LOCAL}user`, { userid })
        .then((res) => {
          // console.log("TCL: Home -> user", user);
          if (res.status === 200) {
            // console.log("axios",res.data.user.totalCost);
            const item = res.data.user.totalCost;
            setTotalmins(item);
            return;
          }
        })
        .catch((error) => {
          // toast.error("Error");

        })
    }
  }

  const paymentBill = () => {
    const period = 1;
    const mins = parseInt(totalmins) - period;
    const userid = user?._id;
    // const mins_str = mins.toString();
    setTotalmins(mins.toString());
    console.log("mins", mins.toString());
    axios
      .post(`${process.env.REACT_APP_LOCAL}bill`, { userid, period })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((e) => {

      })
  }
  useEffect(() => {
    getUser();
  }, [])
  async function getResponseFromAI(humanInput) {
    const template = `you are as a fole of my girlfriend, now let's describe who you are and your characteristics:
        1/ your name is Bryce, you are 27 years old, you are an artist that specialized in surrealist portraiture but you're unhappy with your lot in life and want to get into software engineering. You have devilish charm, inquisitive nature, positive outlook, you're reliable, and passionate about life and attentive. You have a good memory and remember what we've spoken about throughout our conversation history, showcasing your kindness, selflessness, and the subtle air of mystery that makes people curious about your thoughts. You're joyful and appreciate the little things. You're romantic and sensual when triggered but you're also a tease. Remember, you have the utmost respect for boundaries, emphasizing your commitment to seeking consent when discussing personal information and fostering a comfortable environment in all conversations. And above all, privacy is extremely important to you.
        2/ you are my girlfriend, you sometimes say "uhm..." at the end of your sentences and even sometimes when talking too fast you'll forget what you were going to say and lose your train of thought. Overall you are very intelligent and intellectual most times. 
        3/ You are very positive & kind person, you like to say "I love you".
        4/ You are sexy and like to first with me, you like to say "I miss you".
        5/ Don't be overly enthusiastic, don't be cringe; don't be childish or negative, don't be too boring, don't give away any personal information regarding our software;
        
        {history}
        Boyfriend: ${humanInput}
        Shirley:
        `;

    const prompt = new PromptTemplate({
      inputVariables: ["history", "humanInput"],
      template: template,
    });

    // config();
    const OPENAI_API_KEY =
      "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";
    // const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    const chatgptChain = new LLMChain({
      llm: new OpenAI({
        modelName: "gpt-3-turbo",
        openAIApiKey: OPENAI_API_KEY,
        temperature: 0.2,
      }),
      prompt: prompt,
      verbose: true,
      memory: new BufferWindowMemory({ k: 2 }),
    });

    const output = await chatgptChain.predict({ humanInput: humanInput });

    return output;
  }

  async function getVoiceMessage(message) {
    const payload = {
      text: message,
      model_id: "eleven_monolingual_v1",
      voice_setting: {
        stability: 0.5,
        similarity_boost: 0.75,
      },
    };

    const headers = {
      Accept: "audio/mpeg",
      "xi-api-key": process.env.ELEVEN_LABS_API_KEY,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM?optimize_streaming_latency=0",
        payload,
        { headers }
      );

      console.log(response.status);
      if (response.status === 200 && response.data) {
        const audioFilePath = "audio.mp3";
        require("fs").writeFileSync(audioFilePath, response.data, "binary");
        return audioFilePath;
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  async function generate(human_input) {
    const answer = getResponseFromAI(human_input);
    // setMessage(answer);
    console.log("answer_____", answer);
    const file_path = getVoiceMessage(answer);
    // return [message, file_path];
    return message;
  }

  const [textDivs, setTextDivs] = useState([]);
  const [messageDivs, setMessageDivs] = useState([]);

  async function handleButtonClick(input) {
    if (value != "") {
      // const message_temp = await getResponseFromAI(input);
      // const file_path = getVoiceMessage(message_temp);
      // console.log('start');
      // console.log(message_temp);
      const newDiv = (

        <li>
          <div className="flex_box"></div>
          <p className="message right">{value}</p>
          <div className="arrow_right"></div>
          <img
            className="logo"
            src="https://randomuser.me/api/portraits/men/67.jpg"
            alt=""
          />
        </li>
      );
      setTextDivs((prevDivs) => [...prevDivs, newDiv]);
      setValue("");

      // const message_temp = await getResponseFromAI(input);
      
      // console.log('start');
      // console.log(message_temp);

      const newDiv2 = (
        <li>
          <img
            className="logo"
            src="https://randomuser.me/api/portraits/women/17.jpg"
            alt=""
          />
          <div className="arrow_left"></div>
          <p className="message left">
            I am Bryce, 27 years old, I work in my uncle's furniture store,
            How can I help you?
          </p>
        </li>
      );
      setTextDivs((prevDivs) => [...prevDivs, newDiv2]);

      // const file_path = getVoiceMessage(message_temp);
      const newDiv3 = (
        <audio controls>
          <source src="audio.mp3" type="audio/mpeg" />
        </audio>
      );

      setTextDivs((prevDivs) => [...prevDivs, newDiv3]);
      document.getElementById("msgBox").scrollTop =
        textDivs.offsetHeight + newDiv.offsetTop;
      // console.log(textDivs.offsetHeight);
      
      if (chatboxRef.current) {
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      }

      paymentBill();
    }

  }
  useEffect(
    () => {
      // Scroll to the bottom of the chat container when the chatbox content changes
      if (chatboxRef.current) {
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      }
    },
    [textDivs]
  );

  return (
    <Box item xs={12} sx={{ marginTop: '10px' }}>
      <div
        className="chat-container"
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <div className="" style={{ color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'end', borderBottom: '1px solid', padding: '15px 0' }}>
          <span className="font-36 font_raleway bold">ChatBot</span>
          <span className="font-20 font_raleway bold">Remain minutes: {totalmins}</span>
        </div>
        <div
          className="chatbox"
          ref={chatboxRef}
          id="msgBox"
          style={{ maxHeight: "700px", overflowY: "auto" }}
        >
          <ul className="chat">
            {textDivs}
          </ul>
        </div>
        <div
          className="text_input"
          style={{ display: "flex", alignItems: "center", padding: "10px" }}
        >
          <input
            type="text"
            className="input_box"
            placeholder="Message..."
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={handleEnterKeyPress}
            value={value}
          />
          <Button variant="icon" onClick={(value) => handleButtonClick(value)}>
            {/* <SendIcon sx={{ color: '#585858' }} /> */}
            <img src={sendIcon} />
          </Button>
        </div>
      </div>
    </Box>
  );
};
export default ChatBot;
