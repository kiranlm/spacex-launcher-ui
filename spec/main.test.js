import React from "react";
import { shallow, mount } from "enzyme";
import Main from "../src/components/Main";
// import Launch from "../src/components/Launch";

it("Main renders correctly", () => {
  shallow(<Main />);
});

it("renders top header", () => {
  const wrapper = shallow(<Main />);
  const header = <h2>SpaceX Launch Programs</h2>;
  expect(wrapper.contains(header)).toEqual(true);
});
