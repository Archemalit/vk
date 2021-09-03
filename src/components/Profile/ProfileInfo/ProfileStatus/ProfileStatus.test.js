import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in the correct state", () => {
    const component = create(<ProfileStatus status="Like a boss!" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Like a boss!");
  });

  test("len of span should be correct", () => {
    const component = create(<ProfileStatus status="Like a boss!" />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span.children.length).toBe(1);
  });

  test("there is not input", () => {
    const component = create(<ProfileStatus status="Like a boss!" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("status should be correct", () => {
    const component = create(<ProfileStatus status="Like a boss!" />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span.children[0]).toBe('Like a boss!');
  });

  test("set input instead of span", () => {
    const component = create(<ProfileStatus status="Like a boss!" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick()
      let input = root.findByType("input");
    expect(input.props.value).toBe('Like a boss!');
  });

  test("how many times has this function be used", () => {
    const mockCallBack = jest.fn()
    const component = create(<ProfileStatus status="Like a boss!" updateStatusTH={mockCallBack} />);
    const instance = component.getInstance();
    instance.deactivateEditMode()
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});