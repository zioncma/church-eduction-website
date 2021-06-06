import React from "react";
import EducationItemPage from "../components/EducationItemPage/EducationItemPage";

export default {
  title: "Example/Page",
  component: EducationItemPage,
};

const Template = (args) => <EducationItemPage {...args} />;

const args1 = {
  title: "希伯來書研讀〈一〉",
  description:
    "本書激勵那些經歷過神在基督裏至終恩典的人，叫他們持守神在祂兒子裏終極的啟示。 有別於其他新約書信，希伯來書開始的地方，並不像一封信。",
  video: "https://youtu.be/WOTBxlQvMpg",
  files: [
    {
      title: "教育",
      doc: "http://zioncma.ca/ss/21/21KaK02.pdf",
    },
    {
      title: "飲食",
      doc: "http://zioncma.ca/ss/21/21KaK03.pdf",
    },
  ],
};

const args2 = {
  title: "希伯來書研讀〈二〉",
  description:
    "本書激勵那些經歷過神在基督裏至終恩典的人，叫他們持守神在祂兒子裏終極的啟示。 有別於其他新約書信，希伯來書開始的地方，並不像一封信。",
  video: "https://youtu.be/VY4-10UknVo",
  files: [
    {
      title: "飲食",
      doc: "http://zioncma.ca/ss/21/21KaK03.pdf",
    },
    {
      title: "教育",
      doc: "http://zioncma.ca/ss/21/21KaK02.pdf",
    },
  ],
};

export const Case1 = Template.bind({});
Case1.args = {
  ...args1,
};

export const Case2 = Template.bind({});
Case2.args = {
  ...args2,
};
