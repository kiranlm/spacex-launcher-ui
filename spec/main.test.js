import React from "react";
import { shallow, mount } from "enzyme";
import Main from "../src/components/Main";
import Filter from "../src/components/Filter";

it("Main renders correctly", () => {
  shallow(<Main />);
});

it("renders top header", () => {
  const wrapper = shallow(<Main />);
  const header = <h2>SpaceX Launch Programs</h2>;
  expect(wrapper.contains(header)).toEqual(true);
});

describe("Filters", () => {
  const setFilters = jest.fn();
  const filters = {
    limit: 100,
    launchYear: null,
    launchSuccess: null,
    landSuccess: null,
  };
  const wrapper = mount(<Filter filters={filters} setFilters={setFilters} />);
  it("Renders year filter", () => {
    const wrapper = mount(<Filter filters={filters} setFilters={setFilters} />);
    expect(wrapper.props().filters).toEqual(filters);
  });
  it("Renders 19 filters", () => {
    expect(wrapper.find("button").length).toEqual(19);
  });
  it("First filter shoulbe 2006", () => {
    const button = wrapper.find("button").at(0);
    expect(button.text()).toEqual("2006");
  });
  //   it("Clicked button should have selected class", () => {
  //     const button = wrapper.find("button").at(0);
  //     button.simulate("click");
  //     expect(button.hasClass("selected")).toBe(true);
  //   });
});
