import React from "react";
import PropTypes from "prop-types";

// декларирование пропсов и их типов
// 1. propTypes https://reactjs.org/docs/typechecking-with-proptypes.html
// 2. typescript types

// про деструктуризацию в JS https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// 2
type HelloProps = {
  message: string;
  other: string;
  age?: number; // ? опциональный
};

// pure function/component -- это пример чистой функции
const Hello = function(props: HelloProps) {
  let { message, other, age } = props;
  return (
    <div>
      {message} {other} {age}
    </div>
  );
};

export default function Test(props) {
  return (
    <div>
      <Hello message={props.message} other={props.name} />
    </div>
  );
}

// 1
Test.propTypes = {
  message: PropTypes.string,
  other: PropTypes.string
};
