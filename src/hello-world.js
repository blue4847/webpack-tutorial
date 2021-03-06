import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("hello world"));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

let mode = process.env.NODE_ENV;
if (mode === "production") {
  console.log("production mode!");
} else if (mode === "development") {
  console.log("development mode!");
}
