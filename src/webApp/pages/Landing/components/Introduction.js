import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "swiper/css/swiper.css";
import style from "../../../global-style";
import Swiper from "swiper";
import { Link } from "react-router-dom";
const Section = styled.div`
  padding: 10rem;
  text-align: center;
  @media (min-width: 93.75em) {
    width: 1440px;
    margin: 0 auto;
  }
  .introductionSection {
    display: flex;
    justify-content: space-evenly;
  }

  .description {
    /* padding-left: 5rem; */
    /* margin: auto 2rem; */

    &__title {
      font-size: ${style["font-size-ll"]};
      margin-bottom: 3rem;
      color: ${style["font-color-dark"]};
      span {
        display: block;
        line-height: ${style["line-height-l"]};
      }
    }
    &__sub {
      font-size: ${style["font-size-l"]};
      line-height: ${style["line-height-l"]};
      /* margin-bottom: 3rem; */
      color: ${style["font-color-light-2"]};
      span {
        display: block;
        line-height: ${style["line-height-m"]};
      }
    }
  }
  .introduction {
    display: grid;
    grid-template-columns: repeat(2, 16rem);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    padding: 5rem;
    height: 100%;

    text-align: left;
    &__group {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    &__detail {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      color: ${style["highlight-color"]};
      border: 3px solid ${style["highlight-color"]};
      position: relative;
    }
    &__count {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${style["font-size-ll"]};
    }
    &__text {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-light-2"]};
    }
    &__description {
      width: 14rem;
      text-align: center;
      padding-top: 3px;
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-light-1"]};
      line-height: ${style["line-height-l"]};
    }
  }
  .button {
    border: none;
    color: ${style["highlight-color"]};
    font-size: ${style["font-size-l"]};
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    :hover {
      font-weight: bold;
      transform: translateX(1rem) scale(1.03);
      border-bottom: 1px solid ${style["highlight-color"]};
    }
  }
`;
const SliderContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 7rem;
  margin: auto;
  border-radius: 3rem;
  text-align: left;
  color: ${(props) =>
    props.fontColor ? props.fontColor : style["font-color-light-2"]};
  /* background: white; */
  background-color: ${(props) =>
    props.swiperColor ? props.swiperColor : style["theme-color-primary"]};

  &::before {
    content: open-quote;
    position: absolute;
    top: 3rem;
    left: -15rem;
    line-height: 1;
    font-size: 20rem;
    color: ${style["highlight-color"]};
    z-index: 1;
    @media (max-width: 37.5em) {
      font-size: 15rem;
    }
  }

  .slider-container {
    position: relative;
    width: 100%;
    height: 20rem;
    overflow: hidden;
    margin: auto;
    /* border-radius: 6px; */
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination {
      padding-top: 2rem;
    }
    .swiper-pagination-bullet-active {
      border: 1px solid ${style["highlight-color"]};
      background-color: ${style["highlight-color"]};
    }
  }
  .story {
    &__buddy {
      font-size: ${style["font-size-l"]};
      margin-bottom: 1rem;
      font-weight: bold;
    }
    &__text {
      line-height: ${style["line-height-l"]};
      font-size: ${style["font-size-l"]};
      margin-bottom: 4rem;
      /* width: 100%; */
    }
    &__user {
      width: 50%;
      margin-left: 50%;
      font-size: ${style["font-size-s"]};
      display: grid;
      grid-template-columns: 1fr max-content;
      align-items: center;
      grid-column-gap: 1.5rem;
      &::before {
        content: "";
        height: 1px;
        display: block;
        background-color: currentColor;
      }
    }
  }
`;
const commentList = [
  {
    buddy: "Kelly",
    text:
      "这次聊天，用我喜欢的顾城的诗来总结。当你想当诗人的时候，你就失去了诗，当你想成为一个人时，你就失去了你自己，在你什么也不想要的时候，一切如期而来。共勉，小可爱。",
    user: "来访者感悟",
  },
  {
    buddy: "	Teagan	",
    text: "	谢谢你当我的树洞听这个故事，也谢谢你陪我看到更完整的自己☺️	",
    user: "来访者感悟",
  },
  {
    buddy: "	Daisy 	",
    text: "	除了感谢也不知道可以说什么了，衷心地感谢您。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Kimberly Wang	",
    text:
      "	Kimberly，感觉你能在我迷茫的时候和我交流，如果要说几句走心的话，那么我想说：希望你在未来的日子里，学习顺利，工作开心，生活幸福，微笑面对每一天😀——from 一个受到感情问题困扰的学弟	",
    user: "来访者感悟",
  },
  {
    buddy: "	Krystal	",
    text:
      "	真的非常感谢你。我真的一下子心里就有底了。我觉得你一定是一个很温柔的人，希望你的生活里也有倾听你讲话的人。真的很感谢你！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Shumin	",
    text: "	同是留学生，超级聊得来，耐心听我说，感动到不行！To Shumin	",
    user: "来访者感悟",
  },
  {
    buddy: "	Ennis	",
    text: "	谢谢你的陪聊，真的开心了很多，谢谢~	",
    user: "来访者感悟",
  },
  {
    buddy: "	Simon	",
    text: "	谢谢！感觉一下子找到了一条可以走的路！我会去尝试的！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Olivia	",
    text: "	谢谢你的倾听和建议，感觉舒服一些了	",
    user: "来访者感悟",
  },
  {
    buddy: "	Ling	",
    text: "	谢谢你的鼓励和陪伴，我真的感觉心里好受了很多。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Steven	",
    text:
      "	谢谢你的冷静与温暖，让我感到我是可以被接受的。希望我自己调整好了，变平和了，也能像你们一样，做个发光发热的人。谢谢你，谢谢你们，谢谢这个平台。愿每个人睡前都能安然坦然释然，愿全世界好梦！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Ty	",
    text:
      "	谢谢你今天的耐心温暖的陪伴专业地帮我梳理情绪和问题寻找解决问题的办法 谢谢你	",
    user: "来访者感悟",
  },
  {
    buddy: "	Momo	",
    text: "	有耐心的哥哥（还是姐姐？我不知道）谢谢你对我的帮助哦	",
    user: "来访者感悟",
  },
  { buddy: "	Ling	", text: "	屏幕那头的你一定很善良	", user: "来访者感悟" },
  {
    buddy: "	Pera	",
    text: "	虽然我看不见你的脸 但是我知道会聆听的人是最美的~ 你一定很美	",
    user: "来访者感悟",
  },
  {
    buddy: "	Lydia	",
    text: "	大晚上还帮着接待来访者，还特别有耐心，真的是善良又可爱的buddy~	",
    user: "来访者感悟",
  },
  {
    buddy: "	Ruiyi	",
    text:
      "	感谢你的倾听和陪伴，共情和理解我的感受，然后为我梳理问题，帮我想办法解决问题。	",
    user: "来访者感悟",
  },
  {
    buddy: "	M	",
    text:
      "	十分谢谢耐心帮我剖析，并启发我去寻找解决的办法。体验很棒！520给个心心	",
    user: "来访者感悟",
  },
  {
    buddy: "	Daisy	",
    text:
      "	谢谢你Daisy！可以听我说那么多然后提供一些很专业而且很有用的分析！我的心情真的有变好了！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Ying	",
    text:
      "	这个特殊的日子里，感谢陪伴和聆听，愿大家有个甜甜的梦，有个甜甜的一天，晚安好梦~梦里盛开着缤纷的鲜花还有宁静的大海~	",
    user: "来访者感悟",
  },
  {
    buddy: "	Kay	",
    text: "	谢谢你Kay，谢谢Beenthere，太美好了。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Abbys	",
    text: "	谢谢Abbys，很耐心很友善地陪我聊天	",
    user: "来访者感悟",
  },
  {
    buddy: "	我忘了	",
    text:
      "	谢谢你愿意倾听，谢谢你愿意鼓励，谢谢你愿意给我拥抱，谢谢你给我温暖。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Suzy	",
    text:
      "	谢谢你愿意把我完全放在第一位聊天，一直在跟我说我的好，希望我没有给你带去负能量，因为我也努力让生活满满正能量。愿你一切都好😊	",
    user: "来访者感悟",
  },
  {
    buddy: "	Panda	",
    text: "	谢谢你的善意！(btw， Panda这名字好有趣～）	",
    user: "来访者感悟",
  },
  {
    buddy: "	mingshu	",
    text: "	谢谢mingshu，很耐心，给的建议也很受用	",
    user: "来访者感悟",
  },
  {
    buddy: "	Steven	",
    text: "	相信你那句，对我来说也是成长和蜕变！谢谢你~~	",
    user: "来访者感悟",
  },
  { buddy: "	CC	", text: "	谢谢你的倾听！祝你天天好心情！	", user: "来访者感悟" },
  { buddy: "	Abbys	", text: "	祝你幸福快乐！谢谢你！	", user: "来访者感悟" },
  {
    buddy: "	zhang yi	",
    text: "	谢谢你的倾听，这种被看见和理解的感觉真好。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Daniel	",
    text: "	谢谢你让我知道答案都在我心里，我只要慢慢去寻找它。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Xin 	",
    text:
      "	谢谢你们可以为我们这些有困难的人一些帮助 但在帮助别人的同时记得要照顾好自己 自己的情绪自己的身体 希望你们快乐	",
    user: "来访者感悟",
  },
  {
    buddy: "	Lisa	",
    text:
      "	真的超谢谢lisa对我的帮助，我讲话说完的夸奖真的让我很开心，祝你天天开心呀！	",
    user: "来访者感悟",
  },
  { buddy: "	June	", text: "	感恩你们的守候与付出-	", user: "来访者感悟" },
  {
    buddy: "	M	",
    text: "	谢谢buddy的聆听，帮我理顺事和自己的想法和感受	",
    user: "来访者感悟",
  },
  { buddy: "	Wanrong	", text: "	加油，社会需要你们。	", user: "来访者感悟" },
  { buddy: "	Rayna	", text: "	感谢你的耐心，鼓励和陪伴～～	", user: "来访者感悟" },
  {
    buddy: "	Rebecca	",
    text: "	谢谢你这么晚能听我说这些话，让我又充满了学习的动力😄	",
    user: "来访者感悟",
  },
  {
    buddy: "	Lisa	",
    text:
      "	Lisa谢谢你！我特别特别喜欢你。谢谢你作为很耐心的倾听者听我讲了许多许多家里的烦心事，谢谢你用心为我解答为我解开心结，谢谢你的理解和鼓励，也谢谢你的幽默让我开心了好多。祝你今后的每天都能幸福快乐哦～	",
    user: "来访者感悟",
  },
  {
    buddy: "	Jingheng + Callie	",
    text: "	感谢Callie和Jingheng，谢谢你真切的提问。	",
    user: "来访者感悟",
  },
  { buddy: "	Cami	", text: "	谢谢你的陪伴，你真的很温柔	", user: "来访者感悟" },
  { buddy: "	Callie	", text: "	谢谢你。最美的祝愿送给你。	", user: "来访者感悟" },
  { buddy: "	Sophia	", text: "	谢谢您的倾听，祝一切顺利	", user: "来访者感悟" },
  {
    buddy: "	Daisy Dai	",
    text: "	幸福在简单的东西里。谢谢你引导我意识到这一点	",
    user: "来访者感悟",
  },
  {
    buddy: "	Anthony	",
    text: "	感谢Anthoy buddy的倾听、理解和支持	",
    user: "来访者感悟",
  },
  {
    buddy: "	mingshu	",
    text: "	有时候只是需要别人来肯定自己的想法，谢谢你，帮我这么做了。	",
    user: "来访者感悟",
  },
  { buddy: "	Wanrong	", text: "	谢谢耐心地引导和解答	", user: "来访者感悟" },
  {
    buddy: "	Wanrong	",
    text:
      "	谢谢你帮助我揭开一些自己没能明白的事情，这样的开解对我来说太重要了。	",
    user: "来访者感悟",
  },
  { buddy: "	Teagan	", text: "	感谢切中关键词 点出困惑	", user: "来访者感悟" },
  {
    buddy: "	Rebeca	",
    text:
      "	现在人与人之间的连结少得可怜，您作为一个素不相识的人愿意花宝贵的时间认真倾听我说话，这是身边亲密的人都不一定能做到的事，真的很感谢您的聆听和理解，并给我的建议和鼓励，祝您身体安康，一切顺利	",
    user: "来访者感悟",
  },
  {
    buddy: "	M	",
    text: "	Thanks， the conversation really makes my day	",
    user: "来访者感悟",
  },
  {
    buddy: "	Yi Zhao	",
    text: "	谢谢你同我分享喜悦！我更加期待回国的日子了呢～	",
    user: "来访者感悟",
  },
  {
    buddy: "	CC	",
    text: "	抱歉传播负面情绪给你啦，谢谢你的鼓励~	",
    user: "来访者感悟",
  },
  {
    buddy: "	M	",
    text:
      "	Melo你真的很好，比我现实中的家人同学朋友都要好，你非常温暖，在我遭遇挫折处于颓废的时候帮助了我，真的非常感谢你。真的很少有人愿意倾听我的诉说这么久，你让我感到了极大的温暖，带给我了极大的力量。我真的不敢相信一个素不相识的人对我这么好，这么关心我，真的非常感动！相信在现实中你肯定是一个很受欢迎的人。我真的非常幸运能够遇到你。你帮我走出了黑暗，谢谢你！真心感谢！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Kelly	",
    text:
      "	我喜欢王尔德的一首诗，我们都生活在阴沟里，但仍有人仰望星空。谢谢kelly。我是小蘑菇。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Rayna	",
    text:
      "	谢谢你！跟你聊着聊着我就哭了，这么长时间来第一次，但是也扫除了我心中的很多阴霾。我知道你也一个人在家，希望你不要孤独，振作起来！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Panda	",
    text: "	谢谢你听我诉说，感谢你的真诚和不带偏见	",
    user: "来访者感悟",
  },
  {
    buddy: "	Teagan	",
    text: "	很感谢Teagan的耐心倾听  让我得自己不是踽踽独行  今夜很温暖 谢谢！	",
    user: "来访者感悟",
  },
  {
    buddy: "	一羊	",
    text:
      "	谢谢你们，可能我一个人闷头想总有天花板，你们总能给我提供一个新的视角，或者帮我理清头绪，帮我找到可能我内心深处早已知道的那个答案	",
    user: "来访者感悟",
  },
  {
    buddy: "	CC	",
    text: "	真的感谢，原本难过，迷茫，煎熬，通过一起交流，我发现好多了，谢谢。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Jingheng	",
    text: "	谢谢你！既帮我想清楚了解决办法，也帮我想清楚了 pain reliever.	",
    user: "来访者感悟",
  },
  { buddy: "	Rebecca 	", text: "	很有帮助，心情好多啦^_^	", user: "来访者感悟" },
  {
    buddy: "	Jianan	",
    text:
      "	第一次这么爽的beenthere体验   非常有效   感谢Jianan耐心的倾听和鼓励   温暖❤️	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sylvia	",
    text: "	感觉你耐心听取我的烦心事，并帮我积极化解，给我了温暖的鼓励与陪伴。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Daisy	",
    text: "	感谢buddy，很设身处地为他人着想	",
    user: "来访者感悟",
  },
  {
    buddy: "	Teagan	",
    text: "	谢谢你~希望疫情下的我们都健健康康！加油！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Teagan	",
    text:
      "	谢谢你今晚的陪伴，如若在你以后也有灰暗的时刻时，想一下我现在在做的 就是别人可能一辈子都不太会实现的梦想，那我超幸运了，加油吧！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Olivia	",
    text:
      "	感谢陪伴和关心，最重要的是对我的支持和认可，这给了我很大的面对问题的信心！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Rayna 	",
    text: "	让我们一起努力，拥抱美好和太阳。	",
    user: "来访者感悟",
  },
  { buddy: "	Rebecca	", text: "	非常感谢！非常有帮助！	", user: "来访者感悟" },
  {
    buddy: "	Pera	",
    text:
      "	感谢今天耐心的倾听，温柔的回应，提供的交流互动、改善的方法以及对我的肯定和鼓励，爱你^^	",
    user: "来访者感悟",
  },
  {
    buddy: "	Cindy	",
    text: "	谢谢你Cindy。谢谢Beenthere。每次来这都感到被包容、被接纳。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Steven	",
    text: "	谢谢你陪我聊了这么久，耐心地给我解决问题[比心]	",
    user: "来访者感悟",
  },
  { buddy: "	Sophie	", text: "	谢谢你的耐心和理解～	", user: "来访者感悟" },
  { buddy: "	Sam	", text: "	也希望你的生活更美好	", user: "来访者感悟" },
  {
    buddy: "	Abyss	",
    text: "	可能如何看待某件事 远重要于事件本身的性质吧	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sylvia	",
    text:
      "	Sylvia，在谈话中感觉你正面、阳光、积极，是我幻想中自己能成为的样子，感谢你带我找回了自己舒缓的逻辑，希望我们都能越来越好，希望自己能够不在为打翻的牛奶哭泣。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maggie	",
    text: "	你就是那个值得期待的高质量的朋友呢谢谢你的温暖善良 加油❤️	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maggie	",
    text: "	谢谢你的时间。谢谢你的聆听。也谢谢你的建议。祝好	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maggie	",
    text: "	很开心Maggie能倾听心事，并且给出一些中肯的看法和建议～	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sam	",
    text:
      "	能有小哥哥的帮助，也挺让我豁然开朗的。因为这件事困扰我好久了，小哥哥不仅在心理上开导我同时也告诉我了很多方法。非常感谢！！！(๑>؂<๑）	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sophie	",
    text:
      "	虽然我不知道隔着屏幕的你是谁，在哪儿，有着什么样的故事，但我真心想对你说声感谢	",
    user: "来访者感悟",
  },
  {
    buddy: "	Olivia	",
    text: "	一个人在外都不容易，嗯照顾好自己呀，多多囤粮食！谢谢你的建议～	",
    user: "来访者感悟",
  },
  {
    buddy: "	Nimo	",
    text: "	非常感谢今天认真跟我聊天，对于我来说是一次小小的改变。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Lisa	",
    text: "	谢谢你陪着我的情绪走了一段，她长大了一点，变强了一点。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Kelly	",
    text: "	海内存kelly，天涯若比邻。爱你哦。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Kelly	",
    text:
      "	非常感谢Kelly在简短的时间内就解决了我的困惑，并且她一直在鼓励我。真的非常暖心！虽然俩人素未谋面也不认识，但是今天和你的谈话，就像是认识了很久的朋友，会让我接下来这一周的时间都会一直开心！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Steven	",
    text:
      "	非常感谢在这个夜晚有人愿意听我说这一路上的付出和困难，通过跟你的聊天又找到了一点支撑自己努力下去的力量。可能我们这些来访者会传递很多负面情绪，想对你们说，一定要注意，不要被影响到啦～	",
    user: "来访者感悟",
  },
  {
    buddy: "	J	",
    text: "	谢谢你的陪伴，希望我们有机会一起帮助别人	",
    user: "来访者感悟",
  },
  { buddy: "	Kimberly	", text: "	谢谢你的倾听和认同！	", user: "来访者感悟" },
  {
    buddy: "	J	",
    text:
      "	J，很高兴可以在这个平台遇到你。第一次和你聊天的时候，我就觉得很舒服，我的经历有被你理解，很感动。这个感谢卡好像得避开个人隐私，但我希望你知道我是哪个人，所以放一个小小的关键词（sy），希望你会get到。我不是那么会表达我的感谢，用词也很笨拙，所以只能把这个感谢信写的再长一点，再啰嗦一点。嘻嘻~ 给你比心心：）	",
    user: "来访者感悟",
  },
  {
    buddy: "	Simon	",
    text: "	谢谢！感觉一下子找到了一条可以走的路！我会去尝试的！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Rebecca	",
    text: "	谢谢你的聆听 坚持就是胜利 加油加油加油	",
    user: "来访者感悟",
  },
  {
    buddy: "	Suzy	",
    text: "	谢谢你今天陪我聊天，我觉得和你对话很令我开心和舒服。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Abbys	",
    text: "	谢谢你陪我聊天，让我感到温暖和陪伴。这个困难的时候我们一起加油！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sophie	",
    text: "	超感谢你对我问题的分析以及对我的鼓励和肯定 感觉通透了很多！	",
    user: "来访者感悟",
  },
  { buddy: "	Qianyi Wang	", text: "	很nice的buddy～谢谢	", user: "来访者感悟" },
  {
    buddy: "	Lydia	",
    text: "	谢谢聆听！有机会的话加入你们，像你一样帮到更多人！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Rebecca	",
    text:
      "	谢谢你今晚的倾听，帮我明白要勇敢面对自己的情绪，与人合理的沟通，把控好自己的情绪。你的鼓励与陪伴也会成为我战胜自己的动力，让自己变得更加勇敢，一起加油!表白Been There!😄	",
    user: "来访者感悟",
  },
  { buddy: "	Cami	", text: "	谢谢温暖小太阳哦	", user: "来访者感悟" },
  {
    buddy: "	Pera	",
    text:
      "	非常感谢Pera的帮助，让我解决了这次的情绪危机也知道怎么去应对了，太感谢	",
    user: "来访者感悟",
  },
  { buddy: "	Rebecca	", text: "	谢谢你的及时响应！	", user: "来访者感悟" },
  {
    buddy: "	云龙	",
    text: "	谢谢你 用你宝贵的一个小时聆听来自陌生人的烦恼	",
    user: "来访者感悟",
  },
  {
    buddy: "	Teagan	",
    text: "	一次偶遇，却让我如释重负！谢谢你！	",
    user: "来访者感悟",
  },
  {
    buddy: "	jiachen	",
    text: "	Jiachen，谢谢你的鼓励，你很好。我相信一切都会变好的。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sophie	",
    text:
      "	谢谢你呀 Sophie，不留在过去，不担忧未来，过好现在的每一天，为自己制造属于一个人的快乐，希望你也每天开心～	",
    user: "来访者感悟",
  },
  {
    buddy: "	jiachen	",
    text:
      "	「私は主人公、だから多少の無理はしても大丈夫」   😁😁😁😁😁 ありがとうございます。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Qianyi Wang	",
    text: "	谢谢远方的你的聆听和陪伴，也感谢你的善解人意。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Jianan	",
    text: "	跟你聊完后，我发现自己不再是一座孤岛；谢谢你，素未谋面的Jianan。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Xu	",
    text:
      "	谢谢你，Xu！当我因为被滞留美国而担心疫情来袭的时候，在英国的你勇敢地帮助和鼓励我，给了我面对的勇气。现在虽然我觉得很不安、有恐惧、有不确定性，但是我也前所未有地感到自己同世界的紧密联系。我们一起努力，共度难关！	",
    user: "来访者感悟",
  },
  {
    buddy: "	一羊	",
    text:
      "	感谢你愿意聆听我的经历，帮我找出我身上的闪光点并给予肯定。祝你越来越好！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sylvia	",
    text:
      "	谢谢呀，让我思考了很多平时藏在情绪下的问题，以及更清楚的了解自己。同时真诚的沟通和理解，让我自己也变得更加坦诚。我喜欢坦诚的自己！	",
    user: "来访者感悟",
  },
  {
    buddy: "	momo	",
    text:
      "	Momo，谢谢你，是你让我感受到来自陌生人的善意，我会一直记着这种无条件地被理解的感觉，真的很感谢你！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Xiaoqing	",
    text: "	很开心和你聊天，希望能够加入你们，一起帮助更多人，冲冲冲	",
    user: "来访者感悟",
  },
  { buddy: "	Sylvia	", text: "	感谢你的倾听和陪伴，谢谢你	", user: "来访者感悟" },
  {
    buddy: "	Li	",
    text: "	感谢你们的努力 让我们更好的面对自己的困难 一起加油 奥利给！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Nimo	",
    text: "	Thanks~ Appretiate your patience~	",
    user: "来访者感悟",
  },
  {
    buddy: "	Lydia	",
    text: "	非常感谢， 从昨晚开始情绪不适得到了很好的调解	",
    user: "来访者感悟",
  },
  {
    buddy: "	Shenyun	",
    text: "	谢谢你的聆听与陪伴 我也会努力的 希望还可以再遇见你	",
    user: "来访者感悟",
  },
  {
    buddy: "	Cami	",
    text: "	宇宙无敌超级好，支持你们，请加油	",
    user: "来访者感悟",
  },
  {
    buddy: "	J	",
    text:
      "	谢谢你，Jane。还有其他帮助开导、陪伴和倾听我的buddy们。是你们无私的付出和关怀，让我感到被理解和接纳，同时也帮助了我改善了和家人的关系。沟通，真的很重要。最重要的是，在你们这里，你们放下了自己，割舍了自己的时间来理解我，不带有偏见，让我真的很感动。是啊，也许经历过，所以懂，谢谢你们，因为你们将成长路上的荆棘，开出了美丽的花朵🌺，芬芳了别人。真的很感恩，鞠躬。愿有一天，我也能将爱传递，温暖别人，想起你们时，能够看着天空，对从未谋面的你们，微笑❤️	",
    user: "来访者感悟",
  },
  { buddy: "	Steven	", text: "	谢谢🙏祝你一切顺利	", user: "来访者感悟" },
  {
    buddy: "	jiachen	",
    text:
      "	我真的很感谢jiachen，她/他 还能陪我讲日语  ，非常激动 ，我会尝试从读书开始，勇ましい兵士になる！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maeve(Sunny)	",
    text: "	感谢半夜聆听，心情好多了，祝你幸福快乐	",
    user: "来访者感悟",
  },
  {
    buddy: "	Panda	",
    text: "	谢谢Panda， 你是很好的观察者，给我很多空间，也给我很多鼓励。	",
    user: "来访者感悟",
  },
  { buddy: "	Simon	", text: "	谢谢你的真诚，愿你以后更好～	", user: "来访者感悟" },
  {
    buddy: "	Maeve(Sunny)	",
    text:
      "	谢谢你，当然也要谢谢其他人，尤其是我三岁的姐姐，给我度过艰难困苦时光的勇气和力量；让我能在哪怕因为自己的信念暂时失明看不到光亮的时候日子里，也有另一种可以依靠的力量和勇气！希望我们彼此可以用，在自己需要前进的道路上越来越强壮这个结果，来完成达对彼此的感谢和情谊的诉说！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maeve(Sunny)	",
    text: "	姐姐，谢谢你～不再那么难受了，因为有温暖的姐姐，善良的姐姐陪着❤️	",
    user: "来访者感悟",
  },
  {
    buddy: "	Abbys	",
    text: "	谢谢Abbys今天陪我聊很久！人无完人要学会接纳自己接纳别人眼中的自己！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Yifan	",
    text:
      "	Yifan是一个很温柔很耐心的buddy，有爱心，和他/她聊天很快乐，希望下次能再遇到。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Kimberly Wang	",
    text: "	做倾诉者很简单，做倾听者很难，感谢你帮我的人生分担五分钟，谢谢！	",
    user: "来访者感悟",
  },
  {
    buddy: "	兔毛	",
    text: "	谢谢你听我发牢骚！你超级耐心超级好！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Xu	",
    text: "	谢谢你的开导和陪伴！外表不是最重要的 加油！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Iris	",
    text: "	感谢耐心的倾听与引导，感觉最后找到了问题的核心所在，有点惊喜~	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maggie	",
    text:
      "	感谢您的帮助，我想我有一些前进的方向了，希望未来能变得更好，希望自己能走出阴霾~感谢您的聆听，是您在我最无助的时候给了我帮助，您一定是位温柔善良的人吧，希望世界也能对您多些温柔~	",
    user: "来访者感悟",
  },
  {
    buddy: "	Siyu	",
    text:
      "	谢谢Siyu姐姐！谢谢你的理解和陪伴，原本孤独的夜晚也就不那么难熬，很温暖的姐姐。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Adria	",
    text: "	谢谢Adria！我知道应该怎么做了。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Venus	",
    text:
      "	谢谢你哈 情绪的安慰 actionable的策略 新的角度看问题 祝你更勇敢自信 更理解自己 也祝你一切顺利	",
    user: "来访者感悟",
  },
  {
    buddy: "	Cindy	",
    text: "	感谢Cindy可以正视我性格的某些点！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maeve(Sunny)	",
    text: "	亲爱的Maeve， 希望我们都能给彼此带来好运，有幸在生日这天遇见你。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maggie	",
    text:
      '	It\'s lucky for me to have some "buddy" there listen to me!Thank you，Maggie.	',
    user: "来访者感悟",
  },
  {
    buddy: "	Andrea	",
    text: "	感谢Andrea分享自己的经历和对于类似事情的心声，很有帮助！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Andrea	",
    text:
      "	聽説”孤單才能對抗孤單“，而我很感激素昧平生的兩人能夠憑藉網絡展開一次走心的交流。❤	",
    user: "来访者感悟",
  },
  {
    buddy: "	Shumin	",
    text:
      "	I have too much of a story. I'm glad you're willing to listen. I look forward to using this platform more	",
    user: "来访者感悟",
  },
  {
    buddy: "	Xu	",
    text: "	谢谢通透、耐心、善良、可爱的Xu：）谢谢BeenThere：）	",
    user: "来访者感悟",
  },
  {
    buddy: "	Iris Lei	",
    text: "	谢谢耐心倾听哈，我会试一试你的建议哦	",
    user: "来访者感悟",
  },
  {
    buddy: "	Andrea	",
    text: "	期待被环抱时，BeenThere愿意陪你放纵一下	",
    user: "来访者感悟",
  },
  {
    buddy: "	Abbys	",
    text: "	感谢你在我无助的时刻无条件的安慰我支持我，愿你好心情常驻	",
    user: "来访者感悟",
  },
  { buddy: "	Xin	", text: "	谢谢你丫 大家都一起加油！	", user: "来访者感悟" },
  {
    buddy: "	Xu 	",
    text:
      "	耐心听我的故事，让我感觉到可以被理解，感觉到有人支持我，真的非常感谢。聊天持续蛮久的，想对你说：辛苦了，真的非常非常感谢！希望Xu也能够勇敢地面对生活中的艰难，并且最终跨越它们。内心默默祝福！并且送上好运气！加油！我也是！Xu也是！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maeve(Sunny)	",
    text:
      "	谢谢你深夜的倾听和陪伴，我会试着好好爱自己照顾自己的！也希望你好好照顾自己呀❤️	",
    user: "来访者感悟",
  },
  {
    buddy: "	Jianan	",
    text: "	谢谢你，和你聊天真的很开心呢！	",
    user: "来访者感悟",
  },
  {
    buddy: "	momo	",
    text:
      "	emmm祝哲学大佬一切顺利吧！谢谢你滴帮助，有条理的分析和insight，相信你一定是善良可爱的人，真诚感谢。语文不好心意在嘿嘿	",
    user: "来访者感悟",
  },
  {
    buddy: "	Maeve(Sunny)	",
    text:
      "	真的谢谢你！！你让我有了更乐观的态度和积极的想法。祝你天天开心，我也要去战胜恶龙了！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sunny	",
    text:
      "	嗨，谢谢你喔！谢谢你的倾听，我能感觉到你的用心~ 希望你能越来越好~ 我会更成长也更坚强哒！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Panda	",
    text:
      "	我想耐心、爱心、信心，大概都是可以传递的。希望你给他人带来的美好，同样会收到生活的馈赠。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Mingshu	",
    text: "	谢谢Beenthere，各位Buddy们早点休息哦。	",
    user: "来访者感悟",
  },
  { buddy: "	Siyu	", text: "	哈哈哈，谢谢Siyu给我的提醒	", user: "来访者感悟" },
  {
    buddy: "	jiachen	",
    text:
      "	谢谢你陪我分担这些烦恼，即使隔着屏幕也能感觉到你的支持和理解，真的让我好受很多～	",
    user: "来访者感悟",
  },
  {
    buddy: "	Mengjia Lyu	",
    text: "	没有粗鄙的得意忘形，就不会有深入骨髓的悲伤” 谢谢你，陪伴倾听和鼓励	",
    user: "来访者感悟",
  },
  { buddy: "	Siyu	", text: "	谢谢Siyu很耐心很友善陪我聊天	", user: "来访者感悟" },
  {
    buddy: "	Maggi	",
    text:
      "	感谢你让我知道，这世界上有一群人有着细腻的情感，温柔的内心，这让我对世界又有了更多的信心与希望。感谢你触动了我	",
    user: "来访者感悟",
  },
  {
    buddy: "	Kelly	",
    text:
      "	分享一个辛波斯卡的诗段，现实世界：我们无从逃离，每一次行动，它都如影随形，现实并不希望我们逃走，在我们逃离的旅途中，也没有任何车站。小可爱。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Cindy	",
    text: "	很谢谢你的鼓励，今天和你聊天也帮到我很多。谢谢(*°∀°)=3	",
    user: "来访者感悟",
  },
  {
    buddy: "	Mengjia Lyu	",
    text: "	谢谢Mengjia陪我聊了这么久有的没的！辛苦啦——	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sophie Liu	",
    text: "	很感谢你的倾听，让我舒缓了情绪	",
    user: "来访者感悟",
  },
  { buddy: "	CC	", text: "	谢谢CC，很耐心，很温和	", user: "来访者感悟" },
  {
    buddy: "	Venus	",
    text: "	祝你越来越好！一起加油！来自坚韧的小强	",
    user: "来访者感悟",
  },
  {
    buddy: "	Panda	",
    text: "	谢谢你的帮助，你真的非常贴心，期待下次和你聊天。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Yi Zhang	",
    text: "	感谢您们耐心的回复和专业的意见，心情有好转，大家一起加油	",
    user: "来访者感悟",
  },
  {
    buddy: "	彦君	",
    text: "	Thanks for your time and patience! All the best!	",
    user: "来访者感悟",
  },
  { buddy: "	Momo	", text: "	谢谢你的聆听和理解！感恩！	", user: "来访者感悟" },
  {
    buddy: "	Siyu	",
    text: "	感谢你的时间，我会永远记得这来自陌生人的善意	",
    user: "来访者感悟",
  },
  {
    buddy: "	Mengjia Lyu	",
    text: "	感谢你的用心倾听，我有被温暖到了	",
    user: "来访者感悟",
  },
  {
    buddy: "	Abbys	",
    text: "	感谢感谢感谢！我觉得自己的心情好些啦	",
    user: "来访者感悟",
  },
  {
    buddy: "	Sam	",
    text:
      "	感谢你愿意倾听我杂乱而不成熟的发问。又是需要良好时间管理的一天~希望在你需要调整一下自己的时候，这张卡片也能够鼓舞你继续充满力量地做事情。就像你对我的鼓励一样。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Pera	",
    text: "	谢谢Pera小姐姐的陪伴关心和好态度呢，加油鸭！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Thea	",
    text: "	谢谢你Thea！我会坚定自己的信念的！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Kay	",
    text:
      "	Kay你很棒哟，通过你问我的问题，我感受到你是一个富有同理心懂得换位思考的buddy～希望你再接再厉，帮助到更多小伙伴，同时自己不要太累哦，注意休息！	",
    user: "来访者感悟",
  },
  {
    buddy: "	Daisy Dai	",
    text: "	真的特别谢谢姐姐 第一次和别人分享自己的秘密感觉真好	",
    user: "来访者感悟",
  },
  {
    buddy: "	Abbys	",
    text:
      "	谢谢你能抽出时间为我解答内心的苦恼，建议我有认真听哦，我现在好多了，我会向梦想前进的(๑>؂<๑）好幸运能使用这个宝藏网站(*˘︶˘*)希望你们越来越好，我们一起加油吧(ง •̀_•́)ง	",
    user: "来访者感悟",
  },
  {
    buddy: "	Yi Zhang	",
    text: "	我想你是一个可以带给他人帮助和改变的人~祝好~	",
    user: "来访者感悟",
  },
  {
    buddy: "	Pera	",
    text:
      "	我也不知道该说些什么，最重要的还是要谢谢你这么耐心地听我说话，祝你愉快。	",
    user: "来访者感悟",
  },
  {
    buddy: "	Elle	",
    text: "	谢谢你的倾听和帮助，使我原来的复杂的思绪被理顺了ヽ(○^㉨^)ﾉ♪	",
    user: "来访者感悟",
  },
  { buddy: "	Simon	", text: "	谢谢你的真诚，愿你以后更好～	", user: "来访者感悟" },
];

function randomComment(arr) {
  let randomList = [];
  for (let i = 0; i < 7; i++) {
    randomList.push(commentList[Math.floor(Math.random() * 185)]);
  }
  return randomList;
}
const randomList = randomComment(commentList);
function Introduction(props) {
  const { swiperColor, fontColor } = props;

  const [sliderSwiper, setSliderSwiper] = useState(null);
  useEffect(() => {
    if (commentList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: { el: ".swiper-pagination", clickable: true },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [sliderSwiper]);
  return (
    <Section>
      <div className="description">
        <div className="description__title">了解 BeenThere</div>
        <div className="description__sub">
          BeenThere 是一个源自哈佛中国学生的心灵互助社区
          <br />
          也是一个由哈佛大学和麻省理工学院孵化的社会企业
          <br />
          我们有 100 余位来自世界各地的Online Buddy,
          <br />
          TA 们经过精心筛选和严格培训, 其中有哈佛、麻省理工、哥大、宾大、
          <br />
          斯坦福、伯克利、清华、北大、北师大、港大、剑桥、牛津等名校的众多校友
        </div>
      </div>
      <div className="introductionSection">
        <SliderContainer swiperColor={swiperColor} fontColor={fontColor}>
          <div className="slider-container">
            <div className=" swiper-wrapper">
              {randomList.map((comment, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <div className="slider-nav story">
                      <p className="story__text">
                        来访者对buddy{" "}
                        <span className="story__buddy">{comment.buddy} </span>
                        说:
                      </p>
                      <p className="story__text">{comment.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </SliderContainer>
        <div className="introduction">
          <div className="introduction__group">
            <div className="introduction__detail">
              <span className="introduction__count">4500+</span>
              <span className="introduction__text">同伴支持</span>
            </div>
            <div className="introduction__description">
              共进行超过4500次同伴心理支持服务
            </div>
          </div>
          <div className="introduction__group">
            <div className="introduction__detail">
              <span className="introduction__count">97%</span>
              <span className="introduction__text">表示满意</span>
            </div>
            <div className="introduction__description">
              97％的来访者对平台的同伴心理支持服务表示满意
            </div>
          </div>
          <div className="introduction__group">
            <div className="introduction__detail">
              <span className="introduction__count">63%</span>
              <span className="introduction__text">多次来访</span>
            </div>
            <div className="introduction__description">
              63％的来访者使用buddy服务的次数多于一次
            </div>
          </div>
          <div className="introduction__group">
            <div className="introduction__detail">
              <span className="introduction__count">9.4/10</span>
              <span className="introduction__text">愿意推荐</span>
            </div>
            <div className="introduction__description">
              总分为10，来访者将buddy服务推荐给他人的意愿平均为9.4
            </div>
          </div>
        </div>
      </div>
      <Link to="/family">
        <button className="button">BeenThere 大家庭 ></button>
      </Link>
    </Section>
  );
}

export default Introduction;
